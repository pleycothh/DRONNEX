
export interface BlogEntity {
    id: string; // Corresponds to Guid in C#
    title: string;
    sections: BlogSection[];
    footer: string;
}

export interface BlogSection {
    heading: string;
    content: string;
}

export interface BlogItemEntity {
    id: string;
    header: string;
    explanation: string;
    imageUrl: string;
}