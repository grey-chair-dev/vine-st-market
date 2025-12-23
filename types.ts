
export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  tags?: string[];
}

export interface WeeklySpecial {
  day: string;
  name: string;
  description: string;
  tags?: string[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export enum Page {
  Home = 'home',
  Menu = 'menu',
  About = 'about',
  Location = 'location'
}
