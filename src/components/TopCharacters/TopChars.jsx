import { useState, useEffect } from 'react'
import { Container, Loading } from './TopChars'
import LoadingGif from '../../../public/YlWC.gif'

const TopChars = () => {
    const [topCharacters, setTopCharacters] = useState([]);
    const [limitedChars, setLimitedChars] = useState([])
    //chamar a api
    useEffect(()=>{
        const url = 'https://api.jikan.moe/v4/top/characters';
        const setCharacters = async ()=>{
            const response = await fetch(url);
            const json = await response.json();
            const data = await json.data;
            setTopCharacters(data);
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


    if (limitedChars.length > 0) {
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
    } else {
        return (
                <Loading>
                    <div className='loadingGifDiv'>
                        <img src={LoadingGif}/>
                    </div>
                </Loading>
        )
    }
}

export default TopChars