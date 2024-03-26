import { useState, useEffect } from 'react'
import { Container, Loading } from './TopChars'
import LoadingGif from '../../../public/YlWC.gif'

const TopChars = () => {
    const [topCharacters, setTopCharacters] = useState([]);
    const [limitedChars, setLimitedChars] = useState([])
    const [loading, setLoading] = useState(true)

    //chamar a api
    useEffect(()=>{
        const url = 'https://api.jikan.moe/v4/top/characters';
        const setCharacters = async ()=>{
            const response = await fetch(url);
            const json = await response.json();
            const data = await json.data;
            setTopCharacters(data);
            setLoading(false);
        };
        setCharacters();
    },[]);

    //verificar se topCharacters é maior que 0 que caso seja modificar os caracteres limitados
    useEffect(()=>{
        if(topCharacters.length > 0){
        setLimitedChars(topCharacters.slice(0,6))
        }
        console.log(limitedChars)
    },[topCharacters])

    if (loading) {
       return (
            <Loading>
                <div className='loadingGifDiv'>
                    <img src={LoadingGif}/>
                </div>
            </Loading>
       )
    }

    if(limitedChars.length > 0) {
        return (
            <Container>
                <ul>
                    {limitedChars.map((char) => {
                        return (
                            <li key={char.mal_id}>
                                <img src={char.images.jpg.image_url} alt={char.name} />
                                <h3>{char.name}</h3>
                            </li>
                           
                        )
                    })}
                </ul>
            </Container>
        )
    }

    return <h3>Nenhum Anime Encontrado...</h3>
}

export default TopChars