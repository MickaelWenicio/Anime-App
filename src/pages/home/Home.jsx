import React, { useEffect, useState } from 'react'
import {Container} from './Style'
import TopChars from '../../components/TopCharacters/TopChars.jsx';

const Home = () => {
  
  
  return (
    <Container>
        <div id='homeContent'>
          <div className='trending'>
            <div>
              <div className='trendingTitle'>
                <h2>Em Alta</h2>
                
              </div>
              {/* <form>
                  <input type="text" placeholder='Pesquisar'/>
              </form> */}
            </div>
            
            <div className='trendingDescription'>
              <span>Confira os melhores do momento</span>
            </div>
          </div>
          <div id='trendingCharacters'>
            <div className='trendingCategoryTitle'>
              <h2>Top Personagens</h2>
              <div className='divisor'></div>
            </div>
            <TopChars/>
          </div>
          
        </div>
    </Container>
  )
}

export default Home