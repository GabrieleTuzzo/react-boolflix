import { IMG_URI } from '../../config/URL';

export default function Card({ title, ogTitle, lang, vote, posterPath }) {
    // let src = null;
    let fullStarsNumber = Math.ceil(vote / 2);
    const starsArray = Array.from({ length: 5 });

    // switch (lang) {
    //     case 'it':
    //         src = '/flags/it.svg';
    //         break;
    //     case 'fr':
    //         src = '/flags/fr.svg';
    //         break;
    //     case 'de':
    //         src = '/flags/de.svg';
    //         break;
    //     case 'en':
    //         src = '/flags/en.svg';
    //         break;
    //     default:
    //         src = '';
    // }

    const flagLookup = {
        it: '/flags/it.svg',
        fr: '/flags/fr.svg',
        de: '/flags/de.svg',
        en: '/flags/en.svg',
    };

    return (
        <div>
            <img
                src={IMG_URI + '/w342' + posterPath}
                alt={`${title} poster`}
            ></img>
            <h3>{title}</h3>
            <h4>{ogTitle}</h4>
            {flagLookup[lang] ? (
                <img
                    src={flagLookup[lang]}
                    alt={`${lang} flag`}
                    width="30px"
                ></img>
            ) : (
                <p>{lang}</p>
            )}
            <p>
                {starsArray.map((_, i) =>
                    i < fullStarsNumber ? (
                        <i key={i} className="fa-solid fa-star"></i>
                    ) : (
                        <i key={i} className="fa-regular fa-star"></i>
                    )
                )}
            </p>
        </div>
    );
}
