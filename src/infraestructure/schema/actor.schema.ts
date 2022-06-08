import { Schema } from "mongoose";
import { Actor } from "../../core/domain/actor";

const actorSchema = new Schema<Actor>({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    country: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    films: {
        type: [String],
        required: true,
    },
});
export default actorSchema;
