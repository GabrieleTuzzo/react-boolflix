import { IMG_URI } from '../../config/URL';

export default function Card({ title, ogTitle, lang, vote, posterPath }) {
    let src = null;
    switch (lang) {
        case 'it':
            src = '/flags/it.svg';
            break;
        case 'fr':
            src = '/flags/fr.svg';
            break;
        case 'de':
            src = '/flags/de.svg';
            break;
        case 'en':
            src = '/flags/en.svg';
            break;
        default:
            src = '';
    }

    return (
        <div>
            <img src={IMG_URI + '/w342' + posterPath}></img>
            <h3>{title}</h3>
            <h4>{ogTitle}</h4>
            {src ? <img src={src} alt="flag" width="30px"></img> : lang}
            <p>{vote}</p>
        </div>
    );
}
