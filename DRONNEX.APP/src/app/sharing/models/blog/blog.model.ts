

export interface BlogDetailEntity {
    id: string;
    item: BlogItemEntity;
    content: string;
}

export interface BlogItemEntity {
    id: string;
    header: string;
    explanation: string;
    imageUrl: string;
}