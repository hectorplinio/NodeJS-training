import { idType } from "./id.type";
export interface Comment {
    id: idType;
    filmId: string;
    userId: string;
    text: string;
    createdAt: Date;
}
