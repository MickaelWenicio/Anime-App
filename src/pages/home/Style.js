import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    #homeContent{
        padding-top: 3%;
        width: 70%;
    }

    .trending{
        width: 100%;
        .trendingHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;

            input[type=search]{
                background-color: #3B3B3B;
                width: 15vw;
                height: 5vh;
                padding-left:1.5em;
                border-radius: 10em;
                border: none;
                outline: none;
                font-size: 1.1rem;
                color: #ffffff;
            }

            input::placeholder {
                color: var(--text-gray);
            }


            }

            form{
                display: flex;
                align-items: center;
                position: relative;
                button{
                    background:none;
                    border: none;
                    img{
                        width: 1.2vw;
                    }
                    position: absolute;
                    right: 1em;
                    cursor: pointer;
                }
            }
    }

        .trendingTitle{
            border-left: solid .2em red;
            padding: .4em 0 .4em;
            h2{
                font-weight: 800;
                letter-spacing: 1px;
                padding-left: .5em;
                font-size: 1.8em;
            }
        }

        .trendingDescription{
            margin-top: .5em;
            span{
                color: var(--text-gray);
                font-weight: 500;
            }
        }

    .trendingCategoryTitle{
        margin-top: 6vh;
        margin-bottom: 2vh;
        h3{
            font-weight: 500;
            font-size: 1.5em;
        }

        .divisor{
            margin-top: .5em;
            height: .1em;
            width: 8em;
            background-color:red;
        }
    }

    
`