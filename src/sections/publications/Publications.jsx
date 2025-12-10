import React from "react";
import { Icon } from "@iconify/react";

import "./Publications.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import { portfolioData } from "../../data/portfolioData";

const Publications = () => {
    const pubs = portfolioData?.publications || [];

    if (!pubs.length) {
        return (
            <section id='publications' className='pub_section'>
                <h1 className='pub_title'>Publications</h1>
                <p>Publication details coming soon.</p>
            </section>
        );
    }

    return (
        <section id='publications' className='pub_section'>
            <h1 className='pub_title'>Publications</h1>

            <div className='pub_cards'>
                {pubs.map((item, idx) => (
                    <InfoCard
                        key={idx}
                        header={item.title}
                        externalLink={item.link}
                        subheader={[
                            [
                                { text: item.role, icon: 'mdi:account-badge-outline' }
                            ],
                            [
                                { text: item.year, icon: 'mdi:calendar-month' }
                            ]
                        ]}
                        pills={{
                            items: item.domain.map((x) => ({
                                label: x,
                            })),
                        }}
                        expandable={false}
                        visibility={{collapsed: {pills: true}}}
                        className='pub_card'
                    />
                ))}
            </div>
        </section>
    )
}

export default Publications;