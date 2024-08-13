import css from './header.module.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

function Header() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        if (activeTab !== index) {
            setActiveTab(index);
        }
    };

    return (
        <div className={css.headerbox}>
            <div className={css.headerWrapper}>
                <div className={css.leftBox}>
                    <a href='#'>About</a>
                    <a href='#'>Services</a>
                    <a href='#'>Article</a>
                    <a href='#'>Contact Us</a>
                </div>
                <div className={css.centerBox}>
                    <img src={logo} />
                </div>
                <div className={css.rightBox}>
                    <div className={css.tabButtons}>
                        <button
                            onClick={() => handleTabClick(0)}
                            className={activeTab === 0 ? css.active : css.inActive}
                        >
                            GET in touch
                        </button>
                        <button
                            onClick={() => handleTabClick(1)}
                            className={activeTab === 1 ? css.active : css.inActive}
                        >
                            REQUEST CALLBACK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
