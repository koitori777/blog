export interface NavSite {
  name: string;
  link: string;
  description?: string;
  icon?: string;
}

export interface NavCategory {
  category: string;
  sites: NavSite[];
}
