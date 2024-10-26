import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';



function Services() {
    return (
        <center>
            <div className='services'>
                <div className='header'>
                    <h2>List of Services we Provide</h2>
                </div>
                <div className='servicesNav'>
                    <ul>
                        <li><NavLink to="/Services/WebDevelopment">Web Development</NavLink></li>
                        <li><NavLink to="/Services/MobileDevelopment">Mobile Development</NavLink></li>
                        <li><NavLink to="/Services/Consulting">Consulting</NavLink></li>
                    </ul>
                </div>
                    <Outlet />
                
            </div>
        </center>
    );
}

export default Services;