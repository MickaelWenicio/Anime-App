import React from 'react'
import { Container } from './Style'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
        <div id='content'>
            <div id='logoDiv'>
                <NavLink to={'/'} id='logo'>
                    <span>início</span>
                </NavLink>
            </div>

            <div id='navLinks'>
                <ul>
                    <li>
                        <NavLink to={'/categorias'} className='listItem'>
                            <span>Categorias</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/sobre'} className='listItem'>
                            <span>Sobre</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/blog'} className='listItem'>
                            <span>Blog</span>
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>

    </Container>
  )
}

export default Navbar