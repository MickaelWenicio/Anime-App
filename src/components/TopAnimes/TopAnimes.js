import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
                filter: brightness(70%);
                
            }
            h3{
                font-size: 1.3em;
                text-align: center;
                position: absolute;
                top: 60%;
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