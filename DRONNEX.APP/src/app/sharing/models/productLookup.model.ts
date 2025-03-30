export interface LookupItem {
    code: string;
    name: string;
}

export interface ProductLookup {
    framLookupItems: LookupItem[];
    motorLookupItems: LookupItem[];
    propellerLookupItems: LookupItem[];
    fcLookupItems: LookupItem[];
    batteryLookupItems: LookupItem[];
}