import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import Card from './Card/Card';

export default function MoviesList() {
    const { movies } = useContext(GlobalContext);

    return (
        <ul>
            {movies ? (
                movies.results.map((movie, i) => {
                    return (
                        <li key={i}>
                            <Card
                                title={movie.title}
                                ogTitle={movie.original_title}
                                lang={movie.original_language}
                                vote={movie.vote_average}
                            ></Card>
                        </li>
                    );
                })
            ) : (
                <p>No movies found</p>
            )}
        </ul>
    );
}
