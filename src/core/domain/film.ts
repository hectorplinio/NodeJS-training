import { Comment } from "./comments";

export interface Film {
    id?: number;
    title: string;
    description: string;
    director: string;
    category: string;
    year: number;
    image: string;
    createdAt: Date;
    actors: string[];
    comments: Comment[];
}
