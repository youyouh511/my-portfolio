import React, { useState } from "react";
import { Icon } from "@iconify/react";

import "./InfoCard.scss";
import PillsCollection from '../pills/PillsCollection';

/**
 * Generic info card
 *
 * Props:
 *  - **logo**: optional, image path in public folder (string)
 *  - **logoAlt**: alt text for logo
 *  - **header**: main title (school / company / project name)
 *  - **externalLink**: { href: string; ariaLabel?: string; icon?: string }
 *  - **subheader**: {
 *      - **text**: string;
 *      - **icon?**: string;
 *      }[][];
 *  - **pills**: {
 *      title?: string;
 *      items: { icon?: string; label: string }[];
 *    }
 *  - **paragraph**: short paragraph text
 *  - **bullets**: array of strings or { text, sub?: string[] }
 *  - **actionButton**: { href: string; label: string; icon?: string; external?: boolean }
 * 
 *  - **expandable**: boolean, whether to offer option to View / Collapse details
 *  - **defaultExpanded**: boolean, initial expanded state * 
 *  - **visibility?**: {
 *          **collapsed?**: {
 *              **header?**: boolean (default: true);
 *              **subheader?**: boolean (default: true);
 *              **pills?**: boolean (default: false);
 *              **summary?**: boolean (default: false);
 *              **bullets?**: boolean (default: false);
 *              **actionButton?**: boolean (default: false);
 *          };
 *          expanded?: {
 *              **header?**: boolean (default: true);
 *              **subheader?**: boolean (default: true);
 *              **pills?**: boolean (default: true);
 *              **summary?**: boolean (default: true);
 *              **bullets?**: boolean (default: true);
 *              **actionButton?**: boolean (default: false);
 *          };
 *      };
 * 
 *  - **className**: string, extra class for existing section-specific styling
 */
const InfoCard = ({
    logo,
    logoAlt,
    header,
    externalLink,
    subheader,
    pills,
    paragraph,
    bullets,
    expandable = false,
    defaultExpanded = false,
    actionButton,
    visibility,
    className = "",
}) => {

    // Check availability of logo
    const hasLogo = !!logo;

    // Expansion settings
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    // Toggle expansion state handler
    const handleToggle = () => {
        if (!expandable) {
            setIsExpanded(true);
            return;
        };
        setIsExpanded((prev) => !prev);
    };

    // Default element visibility
    const DEFAULT_VISIBILITY = {
        collapsed: { header: true, subheader: true, pills: false, paragraph: false, bullets: false, actionButton: false },
        expanded: { header: true, subheader: true, pills: true, paragraph: true, bullets: true, actionButton: true }
    }

    // Override default visibility based on provided parameters
    const mergedVisibility = {
        collapsed: {
            ...DEFAULT_VISIBILITY.collapsed,
            ...(visibility?.collapsed || {}),
        },
        expanded: {
            ...DEFAULT_VISIBILITY.expanded,
            ...(visibility?.expanded || {}),
        },
    };

    // Finalize visibility & expansion settings
    const collapsedVisibility = mergedVisibility.collapsed;
    const expandedVisibility = mergedVisibility.expanded;
    const currentVisibility = isExpanded ? expandedVisibility : collapsedVisibility;

    // Check if subheader has multiple columns
    const hasSubheaderColumns = Array.isArray(subheader) && subheader.length > 0;

    // Helper for rendering bullets & subbullets
    const renderBullet = (item, idx) => {
        if (typeof item === 'string') {
            return <li key={idx}>{item}</li>;
        }

        return (
            <li key={idx}>
                {item.text}
                {item.sub && item.sub.length > 0 && (
                    <ul className='infoCard_subbullets'>
                        {item.sub.map((s, j) => (
                            <li key={j} className='infoCard_subbullet'>
                                {s}
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        )
    }

    // Info Card construction
    return (
        <article
            className={[
                "infoCard",
                hasLogo ? "infoCard-withLogo" : "",
                isExpanded ? "infoCard-expanded" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {/* LOGO */}
            {hasLogo && (
                <div className="infoCard_logo">
                    <img
                        src={logo}
                        alt={logoAlt || "logo"}
                        className="infoCard_logoImg"
                    />
                </div>
            )}
            <div className='infoCard_content'>
                {/* HEADER */}
                {currentVisibility.header && header && (
                    <header className="infoCard_header">
                        <h2 className="infoCard_headerText">{header}</h2>

                        {externalLink?.href && (
                            <a
                                href={externalLink.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={externalLink.ariaLabel || "Open external link"}
                                className="infoCard_link"
                            >
                                <Icon
                                    icon={externalLink.icon || "mdi:open-in-new"}
                                    className="infoCard_linkIcon"
                                />
                            </a>
                        )}
                    </header>
                )}

                {/* SUBHEADER */}
                {currentVisibility.subheader && hasSubheaderColumns && (
                    <div className="infoCard_subheader">
                        {subheader
                            .filter(col => Array.isArray(col) && col.length > 0)
                            .map((colItems, colIdx) => (
                                <div
                                    key={colIdx}
                                    className={`infoCard_subheaderCol infoCard_subheaderCol-${colIdx + 1}`}
                                >
                                    {colItems.map((item, itemIdx) => (
                                        <div key={itemIdx} className="infoCard_subheaderItem">
                                            {item.icon && (
                                                <Icon
                                                    icon={item.icon}
                                                    className="infoCard_subheaderIcon"
                                                />
                                            )}
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                    </div>
                )}

                {/* PILLS */}
                {currentVisibility.pills && pills?.items?.length > 0 && (
                    <div className="infoCard_pills">
                        <PillsCollection
                            title={pills.title}
                            items={pills.items}
                            layout='row'
                            pillClassName='infoCard_pill'
                        />
                    </div>
                )}

                {/* PARAGRAPH */}
                {currentVisibility.paragraph && paragraph && (
                    <p className="infoCard_paragraph">{paragraph}</p>
                )}

                {/* BULLETS */}
                {currentVisibility.bullets && bullets?.length > 0 && (
                    <ul className="infoCard_bullets">
                        {bullets.map((b, idx) => renderBullet(b, idx))}
                    </ul>
                )}

            </div>

            {/* ACTION BUTTON */}
            {currentVisibility.actionButton && actionButton && (
                <div className="infoCard_actionButton">
                    {actionButton?.href && (
                        <a
                            href={actionButton.href}
                            className="infoCard_actionButton_link"
                            target={actionButton.external ? "_blank" : undefined}
                            rel={actionButton.external ? "noreferrer" : undefined}
                        >
                            {actionButton.icon && (
                                <Icon
                                    icon={actionButton.icon}
                                    className="infoCard_actionButton_icon"
                                />
                            )}
                            <span>{actionButton.label}</span>
                        </a>
                    )}
                </div>
            )}

            {/* EXPAND / COLLAPSE TOGGLE */}
            {expandable && (
                <button
                    type="button"
                    className="infoCard_toggle"
                    onClick={handleToggle}
                >
                    <Icon
                        icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"}
                        className="infoCard_toggleIcon"
                    />
                    <span className="infoCard_toggleText">
                        {isExpanded ? "Show Less" : "Show More"}
                    </span>
                </button>
            )}

            {/* divider */}
            <hr className='underliner' />
        </article>
    );
};

export default InfoCard;