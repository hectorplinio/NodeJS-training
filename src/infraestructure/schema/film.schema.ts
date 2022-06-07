import { Schema } from "mongoose";
import { Film } from "../../core/domain/film";

const filmSchema = new Schema<Film>({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000,
    },
    director: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    category: {
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    year: {
        type: Number,
        required: true,
        minlength: 4,
        maxlength: 4,
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
    },
    actors: {
        type: [String],
        required: true,
    },
    comments: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        required: true,
    },
});
export default filmSchema;
