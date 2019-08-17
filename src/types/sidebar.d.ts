export interface menuItem {
    path: string;
    name: string;
    key: string;
    children: []|menuItem[];
}
