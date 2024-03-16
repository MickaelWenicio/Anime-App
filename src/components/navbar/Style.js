import styled from "styled-components";

export const Container = styled.nav`
    width: 100vw;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 2px red;
    background-color: #141414;

    #content{
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
       
    }

    #logoDiv{
        #logo{
            text-decoration:none;
            font-size: 1.5em;
            text-transform: uppercase;
            font-weight: 800;
        }

        
    }

    #navLinks{
        width: 30%;
        
        ul{
            display: flex;
            justify-content: flex-end;
            gap: 2em;
            li{
                list-style: none;
            }
        }
        .listItem{
            text-decoration: none;
        }   
    }

`;