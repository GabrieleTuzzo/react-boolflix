import Card from './Card/Card';

export default function ItemList({ array }) {
    return (
        <ul>
            {array ? (
                array.results.map((item, i) => {
                    return (
                        <li key={i}>
                            <Card
                                title={item.title || item.name}
                                ogTitle={
                                    item.original_title || item.original_name
                                }
                                lang={item.original_language}
                                vote={item.vote_average}
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