import React, {useState} from 'react';
import cl from './modalInfoItem.module.css';
import {IItem} from "../../models/IItem";
import {StarIcon} from "../../UI/starIcon/StarIcon";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: IItem;
    addToCart: (item:IItem) => void;
}



const ModalInfoItem: React.FC<ModalProps> = ({ isOpen, onClose, item, addToCart }) => {
    if (!isOpen) return null;

    const handleAddToCart = (item:IItem) => {
        addToCart(item);
        onClose();
    };

    return (
        <div className={cl.modalOverlay} onClick={onClose}>
            <div className={cl.modalContent}>
                <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={cl.closeButton} onClick={onClose}>X</button>
                    <img
                        className={cl.modalImage}
                        width='220px'
                        height='240px'
                        src={item.image}
                        alt={item.title}
                    />
                    <div className={cl.titleAndRate}>
                        <h2>{item.title}</h2>
                        <div className={cl.titleAndRate}>
                            <StarIcon/>
                            <p className={cl.rate}>{item.rate}</p>
                        </div>

                    </div>

                    <p>{item.description}</p>
                    <div className={cl.modalPriceWrapper}>
                        <p className={cl.modalPrice}>{item.price}₽</p>
                        {item.discount && <p className={cl.modalDiscountPrice}>{item.discount}₽</p>}
                    </div>
                    <button  onClick={() => handleAddToCart(item)} className={cl.modalBuyBtn}>Купить</button>
                </div>

            </div>
        </div>
    );
};

export default ModalInfoItem;