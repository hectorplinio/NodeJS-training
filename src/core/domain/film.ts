import { Comment } from "./comments";

export interface Film {
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