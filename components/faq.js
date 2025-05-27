// components/FAQ.js
'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'Do You Work With Both Federal And Commercial Teams?',
    answer: 'Yes, we collaborate with both federal and commercial teams to deliver tailored solutions that meet each sector’s needs.',
  },
  {
    question: 'Can You Advise Or Lead Just Part Of A Project?',
    answer: 'Absolutely. We can step in to lead or advise on specific phases of a project, depending on your needs.',
  },
  {
    question: 'How Do You Handle Data Privacy And Security?',
    answer: 'We follow industry best practices, encrypt sensitive data, and comply with regulations to ensure maximum security.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() => toggle(index)}>
            {faq.question}
            <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}><img src='images/arrow1.svg' /></span>
          </button>
          <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
