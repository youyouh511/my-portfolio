import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { portfolioData } from "../../data/portfolioData";

import "./Projects.scss";

const Projects = () => {
    const projects = portfolioData?.projects || [];

    if (!projects.length) {
        return (
            <section id="projects" className="proj-section">
                <div className="proj-inner">
                    <h1 className="proj-heading">Projects</h1>
                    <p>Projects coming soon.</p>
                </div>
            </section>
        );
    }

    const [expanded, setExpanded] = useState({});

    const toggleCard = (idx) => {
        setExpanded((prev) => ({
            ...prev,
            [idx]: !prev[idx]
        }));
    };

    return (
        <section id="projects" className="proj-section">
            <div className="proj-inner">
                <h1 className="proj-heading">Projects</h1>

                <div className="proj-grid">
                    {projects.map((proj, idx) => {
                        const isExpanded = !!expanded[idx];

                        return (
                            <article
                                key={idx}
                                className={`proj-card ${isExpanded ? "expanded" : ""}`}
                            >

                                {/* Header: project title + GitHub link */}
                                <header className="proj-card-header">
                                    <div className="proj-title">
                                        <a
                                            href={proj.repoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="proj-title-link"
                                        >
                                            {proj.title}
                                        </a>
                                    </div>
                                    {proj.repoUrl && (
                                        <a
                                            href={proj.repoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="proj-github-link"
                                            aria-label="View on GitHub"
                                        >
                                            <Icon icon="mdi:open-in-new" className="proj-meta-icon" />
                                        </a>
                                    )}
                                </header>

                                {/* Always-visible meta summary row */}
                                <div className="proj-card-meta">
                                    {proj.domain && (
                                        <div className="proj-domain">
                                            <Icon icon="mdi:domain" className="proj-meta-icon" />
                                            <span>{proj.domain}</span>
                                        </div>
                                    )}
                                    {proj.role && (
                                        <div className="proj-role">
                                            <Icon icon="mdi:account-badge" className="proj-meta-icon" />
                                            <span>{proj.role}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Expandable content */}
                                {isExpanded && (
                                    <div className="proj-details">
                                        {proj.techStack?.length > 0 && (
                                            <div className="proj-tech">
                                                <ul className="proj-tech-list">
                                                    {proj.techStack.map((tech, i) => (
                                                        <li key={i} className="proj-tech-pill">
                                                            {tech}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {proj.summary && (
                                            <p className="proj-summary">{proj.summary}</p>
                                        )}

                                        {proj.bullets?.length > 0 && (
                                            <ul className="proj-bullets">
                                                {proj.bullets.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {proj.resourcesLink && (
                                            <div className="proj-resources">
                                                <a
                                                    href={proj.resourcesLink}
                                                    className="proj-resources-btn"
                                                    target={
                                                        proj.resourcesLink.startsWith("http") ? "_blank" : undefined
                                                    }
                                                    rel="noreferrer"
                                                >
                                                    <Icon
                                                        icon="mdi:folder-information-outline"
                                                        className="proj-resources-icon"
                                                    />
                                                    <span>Request additional resources</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Expand / collapse control at bottom */}
                                <button
                                    type="button"
                                    className="proj-toggle"
                                    onClick={() => toggleCard(idx)}
                                >
                                    <Icon
                                        icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"}
                                        className="proj-toggle-icon"
                                    />
                                    <span className="proj-toggle-text">
                                        {isExpanded ? "Collapse details" : "View details"}
                                    </span>
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
            <hr className='divider' />
        </section>
    );
};

export default Projects;
