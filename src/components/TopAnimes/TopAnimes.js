import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    button{
       color: #ffffff;
       background: none;
       border: none;
       border-bottom: solid 2px red;
       padding: .5em;
       font-size: 1.1em;
       outline: none;
       cursor: pointer;
       transition: all ease-in-out 0.3s;
       border-radius: 5px 5px 0 0;
       margin-top: 1em;
    }

    button:hover{
       background: #2b2b2b;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 15px;
        list-style: none;
        
        li{
            transition: ease-in-out .3s;
            cursor: pointer;
            width: calc(20% - 12px);
            position: relative;
            /* height: 10%; */

            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                border-radius: 10px;
                filter: brightness(50%);
                
            }
            h3{
                width: 90%;
                font-size: 1em;
                text-align: center;
                position: absolute;
                top: 70%;
                left: 50%;
                transform: translate(-50%,-50%);
                transition: all ease-in-out 0.5s;
                pointer-events: none;
                text-shadow: 1px 1px 5px black;
            }
        }

        li:hover{
            transform: scale(1.1);
            
            img{
                filter: brightness(100%);
            }
            h3{
                opacity: 0%;
            }   
        }
    }
`

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .loadingGifDiv{
        padding-top: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`