import React, { useState, useContext } from 'react';
// import './index.css';
import Header from './Header';
import { ThemeContext } from './ThemeContext';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarClosed, setIsSidebarClosed] = useState(true);
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarClosed(!isSidebarClosed);
    };

    const buttonStyle = {
        background: !isDarkMode ? `url('https://studioai.lenovo.com/asset/home/screen-banner.webp')` : '',
        backgroundSize: !isDarkMode ? "cover" : '',
        backgroundPosition: !isDarkMode ? "center" : '',
        backgroundRepeat: !isDarkMode ? "no-repeat" : '',

    };

    return (
        <div >
            <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`} style={buttonStyle}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            {!isSidebarClosed ? <img src="https://p4-ofp.static.pub/fes/cms/2022/11/14/h82es5y402b4rh1089sf86ay7n9sdl721044.png" alt="" onClick={toggleSidebar} /> : <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwkHBgkNCgoIBwkLDRYPDQwHDQ8UFRAWIB0cIiAdHx8kKDQsJCExJx8TLUktMTU3Ojo6Iys/RD86QzQ5PjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NTc3Nzc4Kzc3Nzc4MissKy83LTc3ODErNSs4Nzc4Lf/AABEIABwAHAMBEQACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAABBgcA/8QAKxAAAQMDAQMNAAAAAAAAAAAAAQACAwQFESEGEnEHExUWIjEyNlFhc4HC/8QAGwEAAQUBAQAAAAAAAAAAAAAAAAEDBAUGAgf/xAAmEQACAgAEBAcAAAAAAAAAAAAAAQIDBBESMQUhQVETFDI0YdHw/9oADAMBAAIRAxEAPwBeOgKoj05DNtTszBZLXbJ45553VjcubMGYb2QdMD3T9tKhFNPcrMDxGeKusrlFLT9iymCyZkomQH+E8EHUdyh8o/lvZ34/w1TMV6Imc4L7q/8AdWT1QzRMyQVAdqDwQItyrXLq5f7Na4qu80tI6mibpT1MAOd0Ag5z6Kxn4VkUnLYydHn8JfZOulvU+qff4FHaezWK3UEcltuvSlQ6YMdHz0D8M3XHOGgHvDR9qNbXXFZwlmXOBxeMuscb6tKy3ya58u4sKOWYSMIACBQ4QDMu0htvI//Z" alt="" style={{ cursor: "pointer" }} onClick={toggleSidebar} />}
                        </span>
                        {/* <div className="text logo-text-1">
                            <span className="name">Studio AI</span>
                            <span className="profession">AI Smart Engine</span>
                        </div> */}
                    </div>
                    <i
                        className="bx bx-chevron-right toggle"
                        onClick={toggleSidebar}
                    ></i>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        {/* <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li> */}
                        <ul className="menu-links">

                            <li className="nav-link">
                                <Link to="/">
                                    <i className='bx bx-book-open icon'></i>
                                    <span className="text nav-text">Content Library</span>
                                </Link>
                            </li>

                            <li className="nav-link">
                                <Link to="/charts">
                                    <i className="bx bx-bar-chart-alt-2 icon"></i>
                                    <span className="text nav-text">Charts</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <li>
                            <a href="#">
                                <i className="bx bx-log-out icon"></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                        <li className="mode">
                            <div className="sun-moon">
                                <i className={`bx bx-moon icon moon ${!isDarkMode ? 'sidebar-last-text' : ''}`}></i>
                                <i className="bx bx-sun icon sun"></i>
                            </div>
                            <span className={`mode-text text ${!isDarkMode ? 'sidebar-last-child' : ''}`}>
                                {isDarkMode ? 'Light mode' : 'Dark mode'}
                            </span>
                            <div className="toggle-switch" onClick={toggleDarkMode}>
                                <span className="switch"></span>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>

            <section className="home">
                <Header />
                <Outlet />
            </section>
        </div>
    );
};

export default Sidebar;
