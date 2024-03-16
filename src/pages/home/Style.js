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
            border-left: solid 3px red;
            padding: .4em 0 .4em;
            h2{
                letter-spacing: 2px;
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
`