import React, {FC, useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/redux";
import CartList from "../components/cartList/CartList";
import {Link} from "react-router-dom";


const CartPage: FC = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const {products} = useAppSelector(state => state.cart)
    useEffect(() => {
        let price = 0
        products.map((item) =>
            price += item.quantity * item.price
        )
        setTotalPrice(price)
    }, [products]);
    return (
        <div style={{marginLeft:'20px'}}>
            <p className='basketText'>Корзина</p>
            <div className='basketWrapper'>
                <CartList/>
                <div>
                    <div className='total'>
                        <div className='totalPriceWrapper'>
                            <p>Итого</p>
                            <p>₽ {totalPrice}</p>
                        </div>
                        <Link className={'buyLink'} to={totalPrice === 0 ? '/cart' : '/payment'}>Перейти к оформлению</Link>
                </div>
                </div>
            </div>
        </div>

    );
};

export default CartPage;