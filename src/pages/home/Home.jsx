import {Container} from './Style'
import TopChars from '../../components/TopCharacters/TopChars.jsx';
import magnifying from '../../../public/magnifying-glass.png'

const Home = () => {
  
  
  return (
    <Container>
        <div id='homeContent'>
          <div className='trending'>
            <div className='trendingHeader'>
              <div className='trendingTitle'>
                <h2>EM ALTA</h2>
              </div>
              <form method='GET'>
                  <input type='search' placeholder='Pesquisar'/>
                  <button><img src={magnifying}/></button>
              </form>
            </div>
            
            <div className='trendingDescription'>
              <span>Confira os melhores do momento</span>
            </div>
          </div>
          <div id='trendingCharacters'>
            <div className='trendingCategoryTitle'>
              <h3>Top Personagens</h3>
              <div className='divisor'></div>
            </div>
            <TopChars/>
          </div>
          
        </div>
    </Container>
  )
}

export default Home