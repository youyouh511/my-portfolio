import React from "react";
import { Icon } from "@iconify/react";
import "./PillsCollection.scss";

/**
 * Generic pills collection component, containing label, icon, or both
 *
 * Props:
 *  - **items**: Array<{            (portfolioData)
 *      - **label?**: string;           (text label)
 *      - **icon?**: string;            (iconify name from Iconify, e.g. "mdi:python")
 *      - **href?**: string;            (optional, hyperlink for the pill)
 *      - **external?**: boolean;       (open href in new tab if true)
 *      - **iconClassName?**: string;   (optional, extra class for the icon)
 *    }>
 *  - **title?**: string;           (optional, section label, e.g. "Tech stack")
 *  - **layout?**: "row" | "grid";  (semantic hint, default to row)
 *  - **containerClassName?**: string;  (class applied to inner pills container, as wrapper for existing class)
 *  - **pillClassName?**: string;       (class applied to each pill)
 */


const PillsCollection = ({
    items = [],
    title,
    layout = "row",
    containerClassName = "",
    pillClassName = "",
}) => {

    // Check whether portfolioData is provided
    if (!items.length) return null;

    // Determine layout type
    const layoutClass = 
        layout === "grid" ? "pills_items-grid" : "pills_items-row";


    return (
        <div className="pills">
            {title && <div className="pills_title">{title}</div>}

            <div className={`pills_items ${layoutClass} ${containerClassName}`}>
                {/* loop through all items */}
                {items.map((item, idx) => {
                    const content = (
                        <>
                            {item.icon && (
                                <Icon
                                    icon={item.icon}
                                    className={
                                        item.iconClassName
                                            ? item.iconClassName
                                            : "pills_icon"
                                    }
                                />
                            )}
                            <span>{item.label}</span>
                        </>
                    );

                    // Wrap content with <a> if hyperlink is provided
                    if (item.href) {
                        return (
                            <a
                                key={idx}
                                href={item.href}
                                className={`pill ${pillClassName}`}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noreferrer" : undefined}
                            >
                                {content}
                            </a>
                        );
                    }

                    return (
                        <div key={idx} className={`pill ${pillClassName}`}>
                            {content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PillsCollection;