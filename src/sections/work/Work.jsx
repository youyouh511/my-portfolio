import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { portfolioData } from "../../data/portfolioData";

import "./Work.scss";

const Work = () => {
    const workExperiences = portfolioData?.work || [];

    if (!workExperiences.length) {
        return (
            <section id="work" className="work-section">
                <div className="work-inner">
                    <h1>Work Experience</h1>
                    <p>Work experience is coming soon.</p>
                </div>
            </section>
        );
    }

    const [expanded, setExpanded] = useState({});

    const toggleCard = (idx) => {
        setExpanded((prev) => ({
            ...prev,
            [idx]: !prev[idx],
        }));
    };

    return (
        <section id="work" className="work-section">
            <div className="work-inner">
                <h1 className="work-heading">Work Experience</h1>

                <div className="work-grid">
                    {workExperiences.map((job, idx) => {
                        const isExpanded = !!expanded[idx];
                        const firstLetter = job.company?.[0] || "?";

                        return (
                            <article
                                key={idx}
                                className={`work-card ${isExpanded ? "expanded" : ""}`}
                            >
                                {/* Overlapping logo circle on the left */}
                                <div className="work-card-logo">
                                    {/* Default logo layer (logo or initial) */}
                                    <div className="work-logo-layer logo-main">
                                        {job.logo ? (
                                            <img
                                                src={job.logo}
                                                alt={`${job.company} logo`}
                                                className="work-logo-img"
                                            />
                                        ) : (
                                            <span className="work-logo-fallback">{firstLetter}</span>
                                        )}
                                    </div>

                                    {/* Hover layer – More / Less */}
                                    <button
                                        type="button"
                                        className="work-logo-layer logo-toggle"
                                        onClick={() => toggleCard(idx)}
                                    >
                                        <Icon
                                            icon={
                                                isExpanded ? "mdi:chevron-up" : "mdi:chevron-right"
                                            }
                                            className="work-logo-toggle-icon"
                                        />
                                        <span className="work-logo-toggle-text">
                                            {isExpanded ? "Less" : "More"}
                                        </span>
                                    </button>
                                </div>

                                {/* Card content */}

                                {/* ALWAYS visible: company name (collapsed state) */}
                                <header className="work-card-header">
                                    <div className="work-company">
                                        <h2>{job.company}</h2>
                                    </div>
                                </header>

                                {/* ONLY when expanded: meta + bullets */}
                                {isExpanded && (
                                    <>
                                        <div className="work-card-subheader">
                                            <div className="subheader-left">
                                                <div className="work-position">
                                                    <Icon icon="mdi:briefcase" className="work-meta-icon" />
                                                    <span>{job.position}</span>
                                                </div>
                                            </div>

                                            <div className="subheader-right">
                                                <div className="work-location">
                                                    <Icon icon="mdi:map-marker" className="work-meta-icon" />
                                                    <span>{job.location}</span>
                                                </div>

                                                <div className="work-duration">
                                                    <Icon icon="mdi:calendar-month" className="work-meta-icon" />
                                                    <span>{job.duration}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {Array.isArray(job.bullets) && (
                                            <ul className="work-card-list">
                                                {job.bullets.map((item, i) => {
                                                    if (typeof item === "string") {
                                                        return <li key={i}>{item}</li>;
                                                    }

                                                    if (item && typeof item === "object") {
                                                        return (
                                                            <li key={i}>
                                                                {item.text}
                                                                {Array.isArray(item.sub) &&
                                                                    item.sub.length > 0 && (
                                                                        <ul className="work-sublist">
                                                                            {item.sub.map((subText, j) => (
                                                                                <li key={j} className="work-subitem">
                                                                                    {subText}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                            </li>
                                                        );
                                                    }

                                                    return null;
                                                })}
                                            </ul>
                                        )}
                                    </>
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

export default Work;
