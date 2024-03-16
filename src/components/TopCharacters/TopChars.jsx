import React from 'react'
import { Container } from './TopChars'

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
        return <h1>carregando</h1>
    }
}

export default TopChars