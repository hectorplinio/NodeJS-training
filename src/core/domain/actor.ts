import { idType } from "./id.type";

export interface Actor {
    id?: idType;
    name: string;
    country: string;
    birthDate: Date;
    image: string;
    createdAt: Date;
    films: string[];
}
