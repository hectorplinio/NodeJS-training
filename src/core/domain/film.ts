import { Comment } from "./comments";
import { idType } from "./id.type";

export interface Film {
    id?: idType;
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
