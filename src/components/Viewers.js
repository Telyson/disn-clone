import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png' alt='disney-view' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png' alt='disney-view' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png' alt='disney-view' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png' alt='disney-view' />
        </Wrap>
        <Wrap>
            <img src='/images/viewers-disney.png' alt='disney-view' />
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`

margin-top: 30px;
display: grid;
gap: 25px;
padding: 30px 0 26px;
grid-template-columns: repeat(5, minmax(0, 1fr))

`

const Wrap = styled.div`
    cursor: pointer;
    border: 1px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }
`