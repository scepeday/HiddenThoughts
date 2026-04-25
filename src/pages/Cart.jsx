import Button from '../components/Button';
import EmptyState from '../components/EmptyState';
import ImageWithFallback from '../components/ImageWithFallback';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatters';
import { getProductImageCandidates } from '../utils/images';

export default function Cart() {
  const { items, subtotal, itemCount, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <section className="section section--tight">
      {!items.length ? (
        <EmptyState message="Your cart is empty." />
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            <div className="cart-list__header">
              <div>
                <p className="eyebrow">Cart</p>
                <h1>A clean holding space before checkout.</h1>
              </div>
              <p>{itemCount} item{itemCount === 1 ? '' : 's'}</p>
            </div>
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <ImageWithFallback src={getProductImageCandidates(item)} alt={item.name} />
                <div className="cart-item__body">
                  <p className="chip">{item.category}</p>
                  <h2>{item.name}</h2>
                  <p>{formatCurrency(item.price)}</p>
                </div>
                <label>
                  Qty
                  <input
                    min="1"
                    type="number"
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.id, event.target.value)}
                  />
                </label>
                <button type="button" className="text-button" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </article>
            ))}
          </div>
          <aside className="cart-summary">
            <p className="eyebrow">Subtotal</p>
            <strong>{formatCurrency(subtotal)}</strong>
            <p>Checkout stays outside the scope of this project. Cart state remains persistent and unchanged.</p>
            <Button to="/shop">Keep shopping</Button>
            <button type="button" className="text-button" onClick={clearCart}>
              Clear cart
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
