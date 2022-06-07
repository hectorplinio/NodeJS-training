import { idType } from "./id.type";

export interface Actor {
    id?: idType;
    name: string;
    films: string[];
    country: string;
}
