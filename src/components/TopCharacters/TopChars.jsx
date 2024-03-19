import React from 'react'
import { Container, Loading } from './TopChars'
import LoadingGif from '../../../public/YlWC.gif'

const TopChars = ({ limitedChars }) => {
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