import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React from 'react';

export const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]

export const socials = [
    {
        icon: React.createElement(GitHubLogoIcon),
        path: ''
    },
    {
        icon: React.createElement(InstagramLogoIcon),
        path: ''
    },
    {
        icon: React.createElement(LinkedInLogoIcon),
        path: ''
    },
]