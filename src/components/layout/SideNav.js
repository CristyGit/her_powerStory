import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideNav = [
    {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Travel',
        path: '/TravelIn',
        icon: <IoIcons.IoMdAirplane />,
        cName: 'nav-text'
    },
    {
        title: 'Finance',
        path: '/FinanceIn',
        icon: <IoIcons.IoLogoUsd />,
        cName: 'nav-text'
    },
    {
        title: 'Tech',
        path: '/TechIn',
        icon: <IoIcons.IoIosLaptop />,
        cName: 'nav-text'
    },
    {
        title: 'Fitness',
        path: '/FitnessIn',
        icon: <IoIcons.IoIosFitness />,
        cName: 'nav-text'
    }
];