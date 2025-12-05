import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Icon } from '@iconify/react';


// List of sections: id, label, icon
const sections = [
    { id: 'about', label: 'About', icon: 'material-symbols:person-raised-hand-rounded' },
    { id: 'education', label: 'Education', icon: 'ic:round-school' },
    { id: 'work', label: 'Work', icon: 'streamline-ultimate:work-from-home-user-pet-cat-bold' },
    { id: 'projects', label: 'Projects', icon: 'mdi:folder-multiple' },
    { id: 'publications', label: 'Publications', icon: 'streamline-plump:news-paper-solid' }
];


const Header = () => {
    // Track currently visible section
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Create IntersectionObserver for each section on the page
        const observers = sections.map(section => {
            const elem = document.getElementById(section.id);
            if (!elem) return null;

            // Observe when the section enters/leaves the viewpoint
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // When section visibility >60%, considered as active
                    if (entry.isIntersecting) {
                        setActiveSection(section.id);
                    }
                },
                { threshold: 0.6 }
            );

            observer.observe(elem);
            return observer;
        });

        // Clean up observers
        return () => observers.forEach(o => o && o.disconnect());
    }, []);

    return (
        <header className='navbar'>
            <nav>
                <ul className='navlist'>
                    {sections.map(section => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                // add active class if over visibility threshold
                                className={activeSection === section.id ? 'active' : ''}
                            >
                                <Icon icon={section.icon} className='navicon' />
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};


export default Header;