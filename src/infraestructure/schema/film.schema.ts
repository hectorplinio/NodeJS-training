import { Schema } from "mongoose";
import { Film } from "../../core/domain/film";

const filmSchema = new Schema<Film>({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 1000,
    },
    director: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
    },
    category: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 100,
    },
    year: {
        type: Number,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 4,
    },
    image: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 1000,
    },
    createdAt: {
        type: Date,
        required: true,
        trim: true,
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
