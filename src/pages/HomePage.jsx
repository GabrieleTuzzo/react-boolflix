import ItemList from '../components/ItemList';

export default function HomePage({ movies, tv }) {
    return (
        <main className="container">
            <section>
                <h1 className="sectionTitle">Movies</h1>
                <ItemList array={movies}></ItemList>
            </section>
            <section>
                <h1 className="sectionTitle">TV Series</h1>
                <ItemList array={tv}></ItemList>
            </section>
        </main>
    );
}
