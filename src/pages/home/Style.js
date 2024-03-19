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

        .trendingTitle{
            border-left: solid .2em red;
            padding: .4em 0 .4em;
            h2{
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
    }

    .trendingCategoryTitle{
        margin-top: 4vh;
        margin-bottom: 2vh;
        h2{
            font-weight: 500;
        }

        .divisor{
            margin-top: .5em;
            height: .1em;
            width: 8em;
            background-color:red;
        }
    }
`