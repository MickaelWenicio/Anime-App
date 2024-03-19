import React, { useEffect, useState } from 'react'
import {Container} from './Style'
import TopChars from '../../components/TopCharacters/TopChars.jsx';

const Home = () => {
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



  
  return (
    <Container>
        <div id='homeContent'>
          <div className='trending'>
            <div className='trendingTitle'>
              <h2>Em Alta</h2>
            </div>
            <div className='trendingDescription'>
              <span>Confira os melhores do momento</span>
            </div>
          </div>
          <div id='trendingCharacters'>
            <TopChars limitedChars={limitedChars} />
          </div>
          
        </div>
    </Container>
  )
}

export default Home