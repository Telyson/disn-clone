import React from 'react'
import styled from 'styled-components'

export default function Movies() {
  return (
    <Container>

        <h4>Recommended for you</h4>

        <Content>
            <Wrap>
                <img src='/images/move1.jpg' alt='disney-view' />
            </Wrap>
            <Wrap>
                <img src='/images/movie2.jpg' alt='disney-view' />
            </Wrap>
            <Wrap>
                <img src='/images/movie6.jpg' alt='disney-view' />
            </Wrap>
            <Wrap>
                <img src='/images/movie5.jpg' alt='disney-view' />
            </Wrap>

            <Wrap>
                <img src='/images/movie6.jpg' alt='disney-view' />
            </Wrap>
            <Wrap>
                <img src='/images/movie5.jpg' alt='disney-view' />
            </Wrap>
            
        </Content>
    </Container>
  )
}

const Container = styled.div`

`

const Content = styled.div`

    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 25px 0;

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }

    // &:hover {
    //     transform: scale(1.05);
    //     border-color: rgba(249, 249, 249, 0.8);
    //     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    //     rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        
    // }

`
