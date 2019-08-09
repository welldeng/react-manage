export interface menuItem {
    path: string;
    name: string;
    key: string;
    children: []|menuItem[];
}

// export default interface menuArray {
//     [index: number]: menuItem;
// }