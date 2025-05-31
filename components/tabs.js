'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const tabs = [
    'AI Optimization',
    'Cloud Scalability',
    'Security Enhancements',
    'Enterprise Integration',
    'Compliance & Risk',
];

const content = {
    'AI Optimization': new Array(4).fill({
        title: 'Model Efficiency Gain',
        description:
            'Reduced training time of large language models by 42% through optimized GPU allocation and distributed workload management across hybrid cloud environments.',
    }),
    'Cloud Scalability': [
        {
            title: 'Auto Scaling Efficiency',
            description:
                'Optimized cloud usage by automatically adjusting resources to meet demand with zero downtime.',
        },
    ],
    'Security Enhancements': [
        {
            title: 'Zero Trust Architecture',
            description:
                'Implemented identity-based access controls to strengthen protection across the infrastructure.',
        },
    ],
    'Enterprise Integration': [
        {
            title: 'ERP + Cloud Sync',
            description:
                'Unified ERP system integration with cloud services to streamline operations and reporting.',
        },
    ],
    'Compliance & Risk': [
        {
            title: 'Regulatory Compliance',
            description:
                'Automated audits and documentation to ensure full compliance with financial and data standards.',
        },
    ],
};

export default function TabSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="tab-container">
            <div className='col1'>
                <div className="tab-menu">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className='col2'>
                <div className="tab-content">
                    {content[activeTab].map((item, index) => (
                        <Link href="" className="card" key={index}>
                            <h3>{item.title} <span className="arrow"><img src='images/a1.svg' /></span></h3>
                            <p>{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
