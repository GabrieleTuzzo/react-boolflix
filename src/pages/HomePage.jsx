import ItemList from '../components/ItemList';

export default function HomePage({ movies, tv }) {
    return (
        <main>
            <h1>Movies</h1>
            <ItemList array={movies}></ItemList>
            <h1>TV Series</h1>
            <ItemList array={tv}></ItemList>
        </main>
    );
}
