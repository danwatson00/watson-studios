import { NavItem } from '../types/types';

export const navItems: NavItem[] = [
    {
        title: 'Home',
        isDropdown: false,
        dropdownItems: [],
        url: '/'
    },
    {
        title: 'Portfolio',
        isDropdown: true,
        dropdownItems: [
            {
                title: 'Weddings',
                url: ''
            },
            {
                title: 'Engagements',
                url: ''
            },
            {
                title: 'Families',
                url: ''
            }
        ],
        url: ''
    },
    {
        title: 'About',
        isDropdown: false,
        dropdownItems: [],
        url: ''
    },
    {
        title: 'Info',
        isDropdown: true,
        dropdownItems: [
            {
                title: 'Wedding Photography Info',
                url: ''
            },
            {
                title: 'Portrait Photography Info',
                url: ''
            },
            {
                title: 'FAQs',
                url: ''
            },
            {
                title: 'Reviews',
                url: ''
            }
        ],
        url: ''
    },
    {
        title: 'Clients',
        isDropdown: false,
        dropdownItems: [],
        url: 'https://proofs.watson-studios.com/'
    },
    {
        title: 'Contact',
        isDropdown: false,
        dropdownItems: [],
        url: ''
    }
];