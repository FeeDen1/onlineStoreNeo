import React, {FC, useState} from 'react';
import cl from './Footer.module.css'
import GlobalIcon from "../../UI/globalIcon/GlobalIcon";
import VkIcon from "../../UI/vkIcon/VkIcon";
import TelegramIcon from "../../UI/telegramIcon/TelegramIcon";
import WhatsappIcon from "../../UI/whatsappIcon/WhatsappIcon";
import {Link} from "react-router-dom";

const Footer:FC = () => {
    const langArr: string[] = ['Каз', 'Рус', 'Eng']
    const [activeLang, setActiveLang] = useState('Рус')
    return (
        <div className={cl.footer}>
            <div className={cl.wrapper}>
                <p className={cl.logoName}>QPICK</p>
                <div className={cl.links}>
                    <Link to='/'>Избранное</Link>
                    <Link to='/cart'>Корзина</Link>
                    <Link to='/'>Контакты</Link>
                </div>
                <div className={cl.servAndLangCont}>
                    <p>Условия сервиса</p>
                    <div className={cl.langChooseCont}>
                        <GlobalIcon/>
                        {langArr.map((lang) =>
                            <button
                                key={lang}
                                className={activeLang === lang ? cl.buttonActive : ''}
                                onClick={() => setActiveLang(lang)}
                            >
                                {lang}
                            </button>
                        )}
                    </div>
                    <div>

                    </div>
                </div>
                <div className={cl.socialNetLinks}>
                    <Link to={'https://vk.com/id216976990'} target={'_blank'} > <VkIcon/></Link>
                    <Link to={'https://ru.wikipedia.org/wiki/Telegram'} target={'_blank'}><TelegramIcon/></Link>
                    <Link to={'https://www.neoflex.ru/'} target={'_blank'} ><WhatsappIcon/></Link>
                </div>
            </div>

        </div>
    );
};

export default Footer;