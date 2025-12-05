import React from "react";
import { Icon } from "@iconify/react";
import { portfolioData } from "../../data/portfolioData";

import "./Education.scss";

const Education = () => {
    const educationList = portfolioData?.education || [];

    if (!educationList.length) {
        return (
            <section id="education" className="edu-section">
                <div className="edu-inner">
                    <h1 className="edu-heading">Education</h1>
                    <p>Education details coming soon.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="education" className="edu-section">
            <div className="edu-inner">
                <h1 className="edu-heading">Education</h1>

                <div className="edu-grid">
                    {educationList.map((item, idx) => {
                        const firstLetter = item.school?.[0] || "?";

                        return (
                            <article key={idx} className="edu-card">
                                {/* Logo circle */}
                                <div className="edu-card-logo">
                                    {item.logo ? (
                                        <img
                                            src={item.logo}
                                            alt={`${item.school} logo`}
                                            className="edu-logo-img"
                                        />
                                    ) : (
                                        <span className="edu-logo-fallback">{firstLetter}</span>
                                    )}
                                </div>

                                {/* Header: school + location */}
                                <header className="edu-card-header">
                                    <div className="edu-school">
                                        <h2>{item.school}</h2>
                                    </div>

                                </header>

                                {/* Subheader: degree + duration (if provided) */}
                                <div className="edu-card-subheader">
                                    <div className="subhead-left">
                                        <div className="edu-degree">
                                            <Icon icon="mdi:school" className="edu-meta-icon" />
                                            <span>{item.degree}</span>
                                        </div>
                                    </div>

                                    <div className="subhead-right">
                                        <div className="edu-location">
                                            <Icon icon="mdi:map-marker" className="edu-meta-icon" />
                                            <span>{item.location}</span>
                                        </div>
                                        <div className="edu-duration">
                                            <Icon icon="mdi:calendar-month" className="edu-meta-icon" />
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>

                                </div>

                                {/* Coursework */}
                                {Array.isArray(item.coursework) && item.coursework.length > 0 && (
                                    <div className="edu-coursework">
                                        <div className="edu-label">Selected coursework</div>
                                        <ul className="edu-coursework-list">
                                            {item.coursework.map((c, i) => (
                                                <li key={i} className="edu-coursework-pill">
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Highlight */}
                                {item.highlight && (
                                    <p className="edu-highlight">
                                        {item.highlight}
                                    </p>
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
            <hr className='divider' />
        </section>
    );
};

export default Education;
