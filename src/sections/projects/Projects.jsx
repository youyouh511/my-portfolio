import React from "react";
import { Icon } from "@iconify/react";

import "./Projects.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import { portfolioData } from "../../data/portfolioData";

const Projects = () => {
    const projects = portfolioData.projects || [];

    if (!projects.length) {
        return (
            <section id='projects' className='proj_section'>
                <h1 className='proj_title'>Projects</h1>
                <p>Project details coming soon.</p>
            </section>
        );
    }

    return (
        <section id='projects' className='proj_section'>
            <h1 className='proj_title'>Projects</h1>

            <div className='proj_cards'>
                {projects.map((item, idx) => (
                    <InfoCard
                        key={idx}
                        header={item.title}
                        externalLink={item.repoUrl}
                        subheader={[
                            [
                                { text: item.domain, icon: 'mdi:domain' }
                            ],
                            [
                                { text: item.role, icon: 'mdi:account-badge' }
                            ]
                        ]}
                        pills={{
                            items: item.techStack.map((x) => ({
                                label: x,
                            })),
                        }}
                        paragraph={item.summary}
                        bullets={item.bullets}
                        expandable={true}
                        defaultExpanded={false}
                        actionButton={item.actionButton}
                        className='proj_card'
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;