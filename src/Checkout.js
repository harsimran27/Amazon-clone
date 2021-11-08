import React from 'react'
import { useStateValue } from './StateProvider'
import "./css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img
                className="checkout_ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/OHL/Mar_HSS/Clearance_1500x300_gifud.gif"
                alt="amazon ad"
            />
            {basket?.length === 0 ?
                (
                    <div >
                        <h2>your shopping basket is empty</h2>
                        <p>you have no items in your basket. To but one or more items click to "Add to basket" next to the item.</p>
                    </div>
                ) :
                (
                    <div>
                        <h2 className="checkout_title">your shopping basket</h2>
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Checkout
