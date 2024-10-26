import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom';
import './styles/Centralized.css';

const HomePage = lazy(() => import('./HomePage'));
const DataViewerPage = lazy(() => import('./DataViewerPage'));
const AboutPage = lazy(() => import('./AboutPage'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Services = lazy(() => import('./components/Services/Services'));
const WebDevelopment = lazy(() => import('./components/Services/WebDevelopment'));
const MobileDevelopment = lazy(() => import('./components/Services/MobileDevelopment'));
const Consulting = lazy(() => import('./components/Services/Consulting'));

function App() {
    return (
        <Router basename="/my_website">
            <Navigation />
            <Suspense fallback={<div className='lazyload'>Loading...</div>}>
                <Routes>
                    <Route path="/my_website" element={<HomePage />} />
                    <Route path="/viewer" element={<DataViewerPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/Services" element={<Navigate to="WebDevelopment" />} />
                    <Route path="/Services" element={<Services />}>
                        <Route path='WebDevelopment' element={<WebDevelopment />} />
                        <Route path='MobileDevelopment' element={<MobileDevelopment />} />
                        <Route path='Consulting' element={<Consulting />} />
                    </Route>
                    <Route path="/FAQ" element={<FAQ />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

function Navigation() {
    const location = useLocation();

    return (
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/viewer" activeClassName="active">Data Viewer</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li>
                    <NavLink 
                        to="/Services/" 
                        className={({ isActive }) => (isActive || location.pathname.startsWith('/Services')) ? "active" : ""}>
                        Services
                    </NavLink>
                </li>
                <li><NavLink to="/FAQ" activeClassName="active">FAQ</NavLink></li>
                <li><NavLink to="/Contact" activeClassName="active">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default App;