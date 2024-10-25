import React from 'react';
import { FaCheckCircle, FaStar, FaRocket } from 'react-icons/fa';

function Advantadges() {
    const advantadges = [
        {
            id: 1,
            icon: <FaCheckCircle />,
            title: 'Quality Service',
            description: 'We ensure the best quality in all our services to meet your needs.',
        },
        {
            id: 2,
            icon: <FaStar />,
            title: 'Customer Satisfaction',
            description: 'Our top priority is to ensure customer satisfaction through excellence.',
        },
        {
            id: 3,
            icon: <FaRocket />,
            title: 'Fast Response',
            description: 'Quick and efficient response to save your time and provide solutions.',
        },
    ];

    return (
        <div className="advantadges__container">
            <h2 className="container__title">Our Advantages</h2>
            <div className="container__cards">
                {advantadges.map((item) => (
                    <div key={item.id} className="card__item">
                        <div className="item__icon">{item.icon}</div>
                        <h3 className="item__title">{item.title}</h3>
                        <p className="item__description">{item.description}</p>
                        <a href="#" className="item__read-more">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Advantadges;
