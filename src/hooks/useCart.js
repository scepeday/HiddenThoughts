import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'hidden-thoughts-cart';
const CART_EVENT = 'hidden-thoughts-cart-updated';

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function serializeCart(items) {
  return JSON.stringify(items);
}

function writeCart(items) {
  localStorage.setItem(STORAGE_KEY, serializeCart(items));
  window.dispatchEvent(new CustomEvent(CART_EVENT, { detail: items }));
}

export function useCart() {
  const [items, setItems] = useState(readCart);

  useEffect(() => {
    writeCart(items);
  }, [items]);

  useEffect(() => {
    function syncCart(event) {
      const nextItems = event?.type === CART_EVENT && Array.isArray(event.detail) ? event.detail : readCart();

      setItems((current) => (serializeCart(current) === serializeCart(nextItems) ? current : nextItems));
    }

    window.addEventListener('storage', syncCart);
    window.addEventListener(CART_EVENT, syncCart);

    return () => {
      window.removeEventListener('storage', syncCart);
      window.removeEventListener(CART_EVENT, syncCart);
    };
  }, []);

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + Number(item.price || 0) * item.quantity, 0),
    [items]
  );
  const itemCount = useMemo(() => items.reduce((total, item) => total + Number(item.quantity || 0), 0), [items]);

  function addItem(product) {
    setItems((current) => {
      const existing = current.find((item) => item.id === product._id);
      if (existing) {
        return current.map((item) =>
          item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...current,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          image: product.image,
          imagePath: product.imagePath,
          image_url: product.image_url,
          image_path: product.image_path,
          images: product.images,
          thumbnail: product.thumbnail,
          photo: product.photo,
          category: product.category,
          quantity: 1
        }
      ];
    });
  }

  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    const nextQuantity = Math.max(1, Number(quantity) || 1);
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: nextQuantity } : item))
    );
  }

  function clearCart() {
    setItems([]);
  }

  return { items, subtotal, itemCount, addItem, removeItem, updateQuantity, clearCart };
}
