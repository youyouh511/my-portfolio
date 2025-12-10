import React from "react";
import { Icon } from "@iconify/react";

import "./Work.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import { portfolioData } from "../../data/portfolioData";

const Work = () => {
    const work = portfolioData.work || [];

    if (!work.length) {
        return (
            <section id='projects' className='proj_section'>
                <h1 className='proj_title'>Work Experiences</h1>
                <p>Experience details coming soon.</p>
            </section>
        );
    }

    return (
        <section id='work' className='work_section'>
            <h1 className='work_title'>Work Experiences</h1>

            <div className='work_cards'>
                {work.map((item, idx) => (
                    <InfoCard
                        key={idx}
                        header={item.company}
                        logo={item.logo}
                        logoAlt={item.company}
                        subheader={[
                            [
                                { text: item.position, icon: 'mdi:briefcase' }
                            ],
                            [
                                { text: item.location, icon: 'mdi:map-marker' },
                                { text: item.duration, icon: 'mdi:calendar-month' }
                            ]
                        ]}
                        bullets={item.bullets}
                        expandable={true}
                        defaultExpanded={false}
                        className='work_card'
                    />
                ))}
            </div>
        </section>
    )
}

export default Work;