import React from "react";
import { Icon } from "@iconify/react";

import { portfolioData } from "../../data/portfolioData";
import "./Education.scss";
import InfoCard from "../../components/infoCard/InfoCard";

const Education_test = () => {
    const edu = portfolioData?.education || [];

    if (!edu.length) {
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
        <section id="education" className="edu_section">
            <h1 className="edu_title">Education</h1>

            <div className="edu_cards">
                {edu.map((item, idx) => (
                    <InfoCard
                        key={idx}
                        logo={item.logo}
                        logoAlt={item.school}
                        header={item.school}
                        subheader={[
                            [
                                { text: item.degree, icon: "mdi:school-outline" }
                            ],
                            [
                                { text: item.location, icon: "mdi:map-marker" },
                                { text: item.duration, icon: "mdi:calendar-month" }
                            ]
                        ]}
                        pills={{
                            title: "Selected Coursework",
                            items: item.coursework.map((c) => ({
                                label: c,
                            })),
                        }}
                        paragraph={item.highlight}
                        expandable={false}
                        defaultExpanded={true}
                        className="edu_card"
                    />
                ))}
            </div>
        </section>
    );
};

export default Education_test;
