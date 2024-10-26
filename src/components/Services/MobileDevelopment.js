import React, { useEffect, useState } from 'react';

function MobileDevelopment() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`mobileDevelopment ${isVisible ? 'visible' : ''}`}>
            <h2>Mobile Development</h2>
            <p>At our Company, we are dedicated to creating high-performance mobile applications that engage users and elevate brands. Our services include:</p>
            <ul>
                <li><strong>iOS & Android App Development:</strong> We build native and cross-platform applications for exceptional performance on both iOS and Android devices.</li>
                <li><strong>UI/UX Design:</strong> Our team focuses on creating intuitive interfaces and seamless user journeys to enhance user engagement.</li>
                <li><strong>App Testing & Quality Assurance:</strong> Rigorous testing ensures your app is bug-free and performs optimally across all devices.</li>
                <li><strong>App Maintenance & Updates:</strong> We provide ongoing support to keep your app current and competitive in the mobile landscape.</li>
                <li><strong>Integration with APIs:</strong> We ensure your mobile app seamlessly integrates with existing systems and third-party services for enhanced functionality.</li>
            </ul>
        </div>
    );
}

export default MobileDevelopment;