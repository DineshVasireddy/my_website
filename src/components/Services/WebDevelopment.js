import React, { useEffect, useState } from 'react';

function WebDevelopment() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`webDevelopment ${isVisible ? 'visible' : ''}`}>
            <h2>Web Development</h2>
            <p>At our Company, we specialize in creating robust and scalable web solutions tailored to meet your business needs. Our services include:</p>
            <ul>
                <li><strong>Custom Website Development:</strong> Dynamic corporate sites and engaging e-commerce platforms designed for your audience.</li>
                <li><strong>Responsive Design:</strong> Ensuring your website looks great and functions seamlessly on all devices.</li>
                <li><strong>Content Management Systems (CMS):</strong> We implement powerful solutions like WordPress, Joomla, and Drupal for easy content management.</li>
                <li><strong>E-Commerce Solutions:</strong> Secure and feature-rich online stores that enhance user experience and boost sales.</li>
                <li><strong>Maintenance & Support:</strong> Ongoing support to keep your website up-to-date, secure, and running smoothly.</li>
            </ul>
        </div>
    );
}

export default WebDevelopment;