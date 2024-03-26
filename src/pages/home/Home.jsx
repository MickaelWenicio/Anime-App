import {Container} from './Style'
import TopChars from '../../components/TopCharacters/TopChars.jsx';
import magnifying from '../../../public/magnifying-glass.png'
import TopAnimes from '../../components/TopAnimes/TopAnimes.jsx'

const Home = () => {
  
  
  return (
    <Container>
        <div id='homeContent'>
          <div className='trending'>
            <div className='trendingHeader'>
              <div>
                <div className='trendingTitle'>
                  <h2>EM ALTA</h2>
                </div>
                <div className='trendingDescription'>
                  <span>Confira os melhores do momento</span>
                </div>  
              </div>
              
              <form method='GET'>
                  <input type='search' placeholder='Pesquisar'/>
                  <button><img src={magnifying}/></button>
              </form>
            </div>
            
            
          </div>
          <div id='trendingCharacters'>
            <div className='trendingCategoryTitle'>
              <h3>Top Personagens</h3>
              <div className='divisor'></div>
            </div>
            <TopChars/>
          </div>

          <div id='trendingAnimes'>
            <div className='trendingCategoryTitle'>
              <h3>Top Animes</h3>
              <div className='divisor'></div>
            </div>
            <TopAnimes/>
          </div>
          
        </div>
    </Container>
  )
}

export default Home