import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Home',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Profile',
        icon: <i className='bx bx-user'></i>,
        to: '/profile',
        section: 'profile'
    },
    {
        display: 'Getting Started',
        icon: <i className='bx bx-star'></i>,
        to: '/started',
        section: 'started'
    },
    {
        display: 'Calendar',
        icon: <i className='bx bx-calendar'></i>,
        to: '/calendar',
        section: 'calendar'
    },
    {
        display: 'Orders',
        icon: <i className='bx bx-receipt'></i>,
        to: '/order',
        section: 'order'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

const handleLogin= () => {

    window.location.href= './login'
}
const handleRegister= () => {

    window.location.href= './register'
}

const handleLogout = () => {
    localStorage.removeItem('accesstoken')
    window.location.href = '/'
   }   

const jwtToken = localStorage.getItem('accesstoken')
    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <>
            <div className="bg-sidebar">
                <div className='sidebar'>
                    <div className="sidebar__logo">
                        Tim FSW Wave-25
                    </div>
                    <div ref={sidebarRef} className="sidebar__menu">
                        <div
                            ref={indicatorRef}
                            className="sidebar__menu__indicator"
                            style={{
                                transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                            }}
                        ></div>
                        {
                            sidebarNavItems.map((item, index) => (
                                <Link to={item.to} key={index}>
                                    <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="sidebar__menu__item__icon">
                                            {item.icon}
                                        </div>
                                        <div className="sidebar__menu__item__text">
                                            {item.display}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="sidebar__reg-log container">
                        <button type="button" className="btn btn-success text-center mx-2" onClick={handleLogin} >Login</button>
                        <button type="button" className="btn btn-warning text-center mx-2 text-white" onClick={handleRegister}>Register</button>
                    </div>
                    {jwtToken && <div className="sidebar__reg-log container">
                        <button type="button" className="btn btn-danger text-center mx-2" onClick={handleLogout}  >Logout</button>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default Sidebar;