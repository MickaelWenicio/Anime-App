import { useState, useEffect } from 'react'
import { Container, Loading } from './TopAnimes'
import LoadingGif from '../../../public/YlWC.gif'

const TopAnimes = () => {
    const [fullTopAnimes, setFullTopAnimes] = useState([]);
    const [limitedAnimes, setLimitedAnimes] = useState([])
    const [topAnimes, setTopAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);

    //chamar a api
    useEffect(() => {
        const url = 'https://api.jikan.moe/v4/top/anime';
        const setAnimes = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const data = await json.data;
                setFullTopAnimes(data);
                setLoading(false);
            } catch (e) {
                console.error(e);
            };

        };
        setAnimes();
    }, []);

    useEffect(() => {
        if (fullTopAnimes) {
            setTopAnimes([...fullTopAnimes])
        };
    }, [fullTopAnimes]);

    useEffect(() => {
        if (topAnimes) {
            setLimitedAnimes([...topAnimes.slice(0, 10)])
        };
    }, [topAnimes]);

    if (loading) {
        return (
            <Loading>
                <div className='loadingGifDiv'>
                    <img src={LoadingGif} />
                </div>
            </Loading>
        );
    };

    {
        if (showMore) {
            return (
                <Container>
                    <ul>
                        {topAnimes.map((anime) => {
                            return (
                                <li key={anime.mal_id}>
                                    <img src={anime.images.jpg.image_url} alt={anime.title} />
                                    <h3>{anime.title}</h3>
                                </li>

                            );
                        })}
                    </ul>
                    <button onClick={() => { setShowMore(false) }}>Mostrar Menos</button>
                </Container>
            )
        } else {
            return (
                <Container>
                    <ul>
                        {limitedAnimes.map((anime) => {
                            return (
                                <li key={anime.mal_id}>
                                    <img src={anime.images.jpg.image_url} alt={anime.title} />
                                    <h3>{anime.title}</h3>
                                </li>

                            );
                        })}
                    </ul>
                    <button onClick={() => { setShowMore(true) }}>Mostrar Mais</button>
                </Container>
            )
        }
    }
}

export default TopAnimes;