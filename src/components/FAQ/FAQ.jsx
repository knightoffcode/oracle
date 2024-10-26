import React from 'react';

function FAQ() {
    const faqSections = [
        {
            id: 1,
            title: 'Love, Relationship & Life FAQ',
            description: 'Here are some frequently asked questions about love, relationships, and life advice. Here are some frequently asked questions about love, relationships, and life advice. Here are some frequently asked questions about love, relationships, and life advice. Here are some frequently asked questions about love, relationships, and life advice.',
            questions: [
                { id: 1, question: 'How can I improve my relationship?' },
                { id: 2, question: 'What is the best way to handle a breakup?' },
                { id: 3, question: 'How can I find true love?' },
                { id: 4, question: 'What should I do if I feel lonely?' },
            ],
        },
        {
            id: 2,
            title: 'Career & Financial FAQ',
            description: 'Frequently asked questions to help guide your career and financial decisions. Frequently asked questions to help guide your career and financial decisions Frequently asked questions to help guide your career and financial decisions. Frequently asked questions to help guide your career and financial decisions.',
            questions: [
                { id: 1, question: 'How do I advance in my career?' },
                { id: 2, question: 'What are some tips for saving money?' },
                { id: 3, question: 'How do I start investing?' },
                { id: 4, question: 'What should I consider before changing careers?' },
            ],
        },
    ];

    return (
        <div className="faq__container">
            {faqSections.map((section) => (
                <div key={section.id} className="section__item">
                    <h2 className="item__title">{section.title}</h2>
                    <p className="item__description">{section.description}</p>
                    <div className="item__questions">
                        <div className="questions__column">
                            {section.questions.slice(0, 2).map((q) => (
                                <a key={q.id} href="#" className="question__link">
                                    {q.question}
                                </a>
                            ))}
                        </div>
                        <div className="questions__column">
                            {section.questions.slice(2).map((q) => (
                                <a key={q.id} href="#" className="question__link">
                                    {q.question}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="item__read-more">
                        <button href="#" className="">Read More</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FAQ;
