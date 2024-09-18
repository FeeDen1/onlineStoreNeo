import React from 'react';
import cl from './CartList.module.css'
import {useAppSelector} from "../../hooks/redux";
import SingleItemCart from "../singleItemCart/SingleItemCart";

const CartList = () => {
    let {products} = useAppSelector(state => state.cart)
    return (

            products.length > 0
                ?
                <div className={cl.wrapper}>
                    {products.map((item) =>
                        <SingleItemCart key={item.id} item={item}/>
                    )
                    }
                </div>
                :
                <div>Корзина пуста</div>


    );
};

export default CartList;