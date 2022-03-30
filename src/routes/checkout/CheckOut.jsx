import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.jsx";
import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  TotalPrice,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <CheckoutContainer>
        <Header>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>

          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </Header>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <TotalPrice>Total: ${cartTotal}</TotalPrice>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
