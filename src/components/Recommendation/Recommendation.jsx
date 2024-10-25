import React from 'react';
import { FaPhoneAlt, FaComments } from 'react-icons/fa';

function Recommendation() {
    const recommendations = [
        {
            id: 1,
            name: 'John Doe',
            description: 'Experienced advisor with insights on personal development.',
            freeTime: 'First 3 minutes Free',
            price: '$5.00/min',
            imageUrl: 'https://via.placeholder.com/50', // URL de exemplo para imagem
        },
        {
            id: 2,
            name: 'Jane Smith',
            description: 'Professional coach for career and success strategies.',
            freeTime: 'First 3 minutes Free',
            price: '$4.00/min',
            imageUrl: 'https://via.placeholder.com/50',
        },
        {
            id: 3,
            name: 'Emily Johnson',
            description: 'Specialized in relationship counseling and guidance.',
            freeTime: 'First 3 minutes Free',
            price: '$6.00/min',
            imageUrl: 'https://via.placeholder.com/50',
        },
    ];

    return (
        <div className="recommendation__container">
            {recommendations.map((item) => (
                <div key={item.id} className="recommendation__item">
                    <img src={item.imageUrl} alt={item.name} className="item__image" />
                    <div className="item__content">
                        <h3 className="content__name">{item.name}</h3>
                        <p className="content__description">{item.description}</p>
                    </div>
                    <div className="item__info">
                        <p className="info__free-time">{item.freeTime}</p>
                        <p className="info__price">{item.price}</p>
                        <button className="info__button-call">
                            <FaPhoneAlt /> Call Now
                        </button>
                        <button className="info__button-chat">
                            <FaComments /> Chat Later
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Recommendation;
