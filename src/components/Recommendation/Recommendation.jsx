import React from 'react';
import { FaPhoneAlt, FaComments } from 'react-icons/fa';

function Recommendation() {
    const recommendations = [
        {
            id: 1,
            name: 'John Doe',
            description: 'help with all matters of life. Such as Love Health happiness, and Career. I will also give you, sense of direction. I am a Life coach, My readings come directly from the heart I do not sugarcoat, I am nonjudgmental. all of my readings are private and confidential. I will lead you and guide you to your hearts desires.',
            freeTime: 'First 3 minutes Free',
            price: '$5.00/min',
            imageUrl: 'https://placeholder.co/150', // URL de exemplo para imagem
        },
        {
            id: 2,
            name: 'Jane Smith',
            description: 'Im proud to say that I have guided many clients to their financial breakthrough and overall happiness. Ive lead many on the right career path as well as helped them through every difficult time.',
            freeTime: 'First 3 minutes Free',
            price: '$4.00/min',
            imageUrl: 'https://placeholder.co/150',
        },
        {
            id: 3,
            name: 'Emily Johnson',
            description: 'Hello Keen clients! My name is Rex! Quick, friendly, fun, and Accurate! Over 60,000 readings here on Keen! Love, Marriage, Finance and Your Well Being! Im here to serve your every need! Detailed w/Real understanding!.',
            freeTime: 'First 3 minutes Free',
            price: '$6.00/min',
            imageUrl: 'https://placeholder.co/150',
        },
    ];

    return (
        <div className="recommendation">
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
        </div>
    );
}

export default Recommendation;
