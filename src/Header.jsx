import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { ThemeContext } from './ThemeContext';


const Header = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    const handleFocus = () => {
        setIsFocused(!isFocused);
    };

    const handleBlur = () => {
        if (searchValue === '') {
            setIsFocused(false);
        }
    };

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };




    return (
        <div className="header" style={{position:"fixed", width:"100%"}}>
            <nav className="premium-nav" style={{
                background: `url('https://studioai.lenovo.com/asset/home/screen-banner.webp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <div className={`nav-container  ${isDarkMode ? 'header-dark' : 'header-light'}`}>
                    <a href="#" className="nav-logo">
                        <img style={{ width: "50%" }} src="https://studioai.lenovo.com/asset/home/login-logo-ai.webp" alt="" />
                        {/* <span className={`logo-text  ${isDarkMode ? 'logo-text-dark' : 'logo-text-light'}`}>Lenovo Studio AI</span> */}
                        <div className="logo-shine"></div>
                    </a>



                    <div className="nav-actions">

                        <div className={`nav-links`}>
                            <div className={`search-container ${isFocused ? 'expanded' : ''}`}>
                                <button className="search-icon" onClick={handleFocus}>
                                    <i className={`bx bx-search search-box-dark ${!isFocused ? 'search-box-dark' : 'search-box-dark'}`}></i>
                                </button>
                                {isFocused && <input
                                    type="text"
                                    className="search-bar"
                                    value={searchValue}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Search..."
                                />}

                            </div>

                        </div>
                        <button className="theme-toggle-dark" aria-label="Toggle theme" onClick={toggleDarkMode}>

                            {isDarkMode ? <i className="bx bx-sun"></i> : <i className="bx bx-moon"></i>}
                        </button>
                        {/* <button className="theme-toggle-dark" aria-label="Toggle theme">

                            <i className='bx bx-log-in'></i>
                        </button> */}
                        <button className="theme-toggle-dark" aria-label="Toggle theme">

                            <i className='bx bx-user' ></i>
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
