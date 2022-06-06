import {
    createFilmRepository,
    getAllFilmsRepository,
} from "../../../infraestructure/adapters/films.repository";
const filmController = async (_req, res) => {
    try {
        if (res.method === "GET") {
            const films = await getAllFilmsRepository();
            console.log(films);
            return res.status(200).send({ films: films });
        }
        if (res.method === "POST") {
            const film = {
                title: "The Godfather 3",
                description:
                    "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                director: "Francis Ford Coppola",
                category: "Crime",
                year: 1972,
                image: "https://media.gq.com.mx/photos/5ee7becb8f739bf973bc801c/16:9/w_2560%2Cc_limit/VITO.jpg",
                createdAt: new Date(),
                actors: ["Marlon Brando", "Al Pacino", "James Caan"],
                comments: [],
            };
            const newFilm = await createFilmRepository(film);
            console.log(newFilm);
            return res.status(200).end(newFilm);
        }
    } catch (error) {
        console.log(error);
    }
};
export default filmController;
