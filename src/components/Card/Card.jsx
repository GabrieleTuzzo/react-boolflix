import { IMG_URI } from '../../config/URL';
import style from './Card.module.css';

export default function Card({
    title,
    ogTitle,
    lang,
    vote,
    posterPath,
    overview,
}) {
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
        <div className={style.CardWrapper}>
            <div className={style.CardContent}>
                <img
                    src={
                        posterPath
                            ? IMG_URI + 'w342' + posterPath
                            : '/placeholder.png'
                    }
                    alt={`${title} poster`}
                ></img>
                <div className={style.Card_Overlay}>
                    <h3>{title}</h3>
                    <h4>{ogTitle}</h4>
                    {flagLookup[lang] ? (
                        <img
                            className={style.flag_image}
                            src={flagLookup[lang]}
                            alt={`${lang} flag`}
                        ></img>
                    ) : (
                        <p>Original Language: {lang.toUpperCase()}</p>
                    )}
                    {overview && (
                        <p className={style.Card_Overview}>{overview}</p>
                    )}
                    <p className={style.StarsVote}>
                        {starsArray.map((_, i) =>
                            i < fullStarsNumber ? (
                                <i key={i} className="fa-solid fa-star"></i>
                            ) : (
                                <i key={i} className="fa-regular fa-star"></i>
                            )
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}
