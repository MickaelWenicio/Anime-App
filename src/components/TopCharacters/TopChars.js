import styled from "styled-components";

export const Container = styled.div`
    ul {
        list-style: none;
        display: flex;
        gap: 20px;
        width: 100%;

        li{
            position: relative;
            width: 30vw;

            img{
                filter: brightness(50%);
                transition: all ease-in-out 0.3s;
                clip-path: inset(3px 3px 3px 3px); 
                border-radius: 15px;
                width: 100%;
            }

            img:hover{
                transform: scale(1.15);
                cursor: pointer;
                filter: brightness(100%);
            }

            h3{
                text-align: center;
                position: absolute;
                top: 80%;
                left: 50%;
                transform: translate(-50%,-50%);
                transition: all ease-in-out 0.5s;
                opacity: 80%;
                pointer-events: none;
            }
            
        }

        li:hover{
            h3{
                opacity: 0;
                
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