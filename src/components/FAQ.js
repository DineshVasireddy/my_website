import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function FAQ() {
    const [faqs, setFaqs] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const answerRefs = useRef([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios.get('https://github.com/DineshVasireddy/my_website/blob/main/public/faqs.txt');
                const data = response.data;
                const faqArray = data
                    .replace(/\r\n/g, '\n')
                    .trim()
                    .split(/\n\n+/)
                    .map(faq => {
                        const parts = faq.split(/\nA: /);
                        const question = parts[0].replace(/^Q: /, '').trim();
                        const answer = parts[1] ? parts[1].trim() : '';
                        return { question, answer };
                    })
                    .filter(faq => faq.question && faq.answer);

                setFaqs(faqArray);
                setIsVisible(false); // Set visibility after fetching FAQs
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };

        fetchFAQs();

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); 

        return () => clearTimeout(timer);
    }, []); 

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <center>
            <div className='content'>
                <h2>Frequently Asked Questions</h2>
                <div className={`faqs ${isVisible ? 'visible' : ''}`}>
                    {faqs.map((faq, index) => (
                        <div key={index} className='faq-item' onClick={() => handleToggle(index)}>
                            <div className='faq-question'>
                                <h5>{faq.question}</h5>
                            </div>
                            <div
                                ref={el => answerRefs.current[index] = el}
                                className='faq-answer'
                                style={{
                                    maxHeight: expandedIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : 0,
                                    opacity: expandedIndex === index ? 1 : 0,
                                    transition: 'max-height 0.3s ease, opacity 0.3s ease'
                                }}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </center>
    );
}

export default FAQ;