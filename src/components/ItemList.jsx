import Card from './Card/Card';

export default function ItemList({ array }) {
    if (!array) return <p>Search Something!</p>;

    return (
        <ul className="row">
            {array.results.length != 0 ? (
                array.results.map((item, i) => {
                    return (
                        <li key={i} className="col-3">
                            <Card
                                posterPath={item.poster_path}
                                title={item.title || item.name}
                                ogTitle={
                                    item.original_title || item.original_name
                                }
                                lang={item.original_language}
                                vote={item.vote_average}
                                overview={item.overview}
                            ></Card>
                        </li>
                    );
                })
            ) : (
                <p>Nothing found :(</p>
            )}
        </ul>
    );
}
