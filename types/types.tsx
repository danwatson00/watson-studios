interface DropdownItem {
    title: string;
    url: string;
}

interface NavItem {
    title: string;
    isDropdown: boolean;
    dropdownItems: DropdownItem[];
    url: string;
}

interface Photo {
    src: string;
    width: number;
    height: number;
    href: string;
}

export type {
    NavItem,
    DropdownItem,
    Photo
}