import { Schema } from "mongoose";
import { Film } from "../../core/domain/film";

const filmSchema = new Schema<Film>({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 100,
        message: "Title must be between 3 and 100 characters",
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000,
        message: "Description must be between 3 and 1000 characters",
    },
    director: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        message: "Director must be between 3 and 100 characters",
    },
    category: {
        type: String,
        minlength: 3,
        maxlength: 100,
        message: "Category must be between 3 and 100 characters",
    },
    year: {
        type: Number,
        required: true,
        minlength: 4,
        maxlength: 4,
        message: "Year must be between 4 and 4 characters",
    },
    image: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000,
        message: "Image must be between 3 and 1000 characters",
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
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
