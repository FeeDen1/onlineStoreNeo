import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cl from './PaymentPage.module.css'

interface FormErrors {
    cartNumber?: string;
    month?: string;
    cvc?: string;
}

export const PaymentPage: React.FC = () => {
    const [isPayed, setIsPayed] = useState(false);
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [cvc, setCvc] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setIsPayed(true);
            setTimeout(() => {
                navigate("/");
                setIsPayed(false);
            }, 2000);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (): FormErrors => {
        const errors: FormErrors = {};
        const regexNumber = /^[0-9 ]+$/;
        const regexMonth = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

        if (!cardNumber) {
            errors.cartNumber = "пустое поле";
        } else if (!regexNumber.test(cardNumber)) {
            errors.cartNumber = "допустимы только цифры";
        } else if (cardNumber.replace(/\s/g, "").length < 16) {
            errors.cartNumber = "минимум 16 цифр";
        }

        if (!date) {
            errors.month = "пустое поле";
        } else if (!regexMonth.test(date)) {
            errors.month = "Неверный формат ввода";
        } else if (date.length < 5) {
            errors.month = "минимум 4 цифры";
        }

        if (!cvc) {
            errors.cvc = "пустое поле";
        } else if (!regexNumber.test(cvc)) {
            errors.cvc = "допустимы только цифры";
        } else if (cvc.length !== 3) {
            errors.cvc = "Необходимо 3 символа";
        }

        return errors;
    };

    return (
        <div className={cl.container}>
            {isPayed ? (
                <div className={cl.paid}>
                    <p>Заказ оплачен</p>
                </div>
            ) : (
                <form className={cl.form} onSubmit={onSubmit}>
                    <p className={cl.paymentTitle}>Оплатить</p>
                    <div className={cl.paymentContainer}>
                        <div className={cl.flexColumnCenter}>

                            <input
                                className={cl.cartNumber}
                                placeholder="Номер карты"
                                value={cardNumber
                                    .replace(/\s/g, "")
                                    .replace(/(\d{4})/g, "$1 ")
                                    .trim()}
                                onChange={(e) => setCardNumber(e.target.value)}
                                maxLength={19}
                            />
                            {errors.cartNumber && (
                                <div className={cl.errorMessage}>{errors.cartNumber}</div>
                            )}
                            <div className={cl.cartInfo}>
                                <div className={cl.flexColumn}>

                                    <input
                                        className={cl.month}
                                        value={date.replace(/(\d{2})(\d{2})/, "$1/$2")}
                                        placeholder="MM/YY"
                                        onChange={(e) => setDate(e.target.value)}
                                        maxLength={5}
                                    />
                                    {errors.month && (
                                        <div className={cl.errorMessage}>{errors.month}</div>
                                    )}
                                </div>
                                <div className={cl.flexColumn}>

                                    <input
                                        className={cl.cvc}
                                        value={cvc}
                                        placeholder="CVC"
                                        onChange={(e) => setCvc(e.target.value)}
                                        maxLength={3}
                                    />
                                    {errors.cvc && (
                                        <div className={cl.errorMessage}>{errors.cvc}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={cl.pay}>Оплатить заказ</button>
                </form>
            )}
        </div>
    );
};
