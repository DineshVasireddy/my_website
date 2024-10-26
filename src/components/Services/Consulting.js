import React, { useEffect, useState } from 'react';


function Consulting() {
    const [isVisible, setIsVisible] = useState(false);
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <center>
            <div className={`consulting ${isVisible ? 'visible' : ''}`}>
                <h2>Consulting</h2>
                <p>At our Company, we provide strategic insights and solutions to help your business thrive in a competitive landscape. Our consulting services include:</p>
                <ul>
                    <li><strong>Business Strategy Consulting:</strong> We analyze your operations and develop tailored strategies that drive efficiency and growth.</li>
                    <li><strong>Digital Transformation:</strong> Our experts guide you through the digital transition, implementing the latest technologies to optimize processes.</li>
                    <li><strong>Technology Consulting:</strong> We help you select and implement the right technologies to align with your business goals and ensure a competitive edge.</li>
                    <li><strong>Market Research & Analysis:</strong> In-depth insights to help you make informed decisions and identify new opportunities in your market.</li>
                    <li><strong>Training & Workshops:</strong> Equipping your team with the skills and knowledge necessary to thrive in today's digital environment.</li>
                </ul>
            </div>
            
        </center>
    );
}

export default Consulting;