import React from 'react';
import { Icon } from '@iconify/react';

const ContactIcons = ({ email, linkedin, github }) => {
    return (
        <div className='contact-icons'>
            {email && (
                <a href={'mailto:${email}'} aria-label='Email'>
                    <Icon icon='mdi:email' />    
                </a>
            )}
            {linkedin && (
                <a href={linkedin} target='_blank' rel='noreferrer'>
                    <Icon icon='mdi:linkedin' />
                </a>
            )}
            {github && (
                <a href={github} target='_blank' rel='noreferrer'>
                    <Icon icon='mdi:github' />
                </a>
            )}
        </div>
    );
};

export default ContactIcons;