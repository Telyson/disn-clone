import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg' alt='ssss' />
      </Background>

      <ImgTitle>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E83AAB9620FC72320D8CBA8D5E1421635AC4C961B08ADC3F691B031A24D7CD38/scale?width=1920&aspectRatio=1.78&format=png'  alt='ksghs'/>
      </ImgTitle>

      <Control>

        <PlayButton>
          <img src='/images/play-icon-black.png' alt='fffds'/>
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src='/images/play-icon-white.png' alt='ddkfe'/>
          <span>PLAY</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>
        {/* <AddButton></AddButton> */}

        <GroupWatchButton>
          <img src='/images/group-icon.png' alt='fsrey'/>
        </GroupWatchButton>

      </Control>
      
      <SubTitle>
          2018 - 7m - Family, Fantasy, Kids, Animation
      </SubTitle>

      <Description>
         A Chinese mom who's sad when her grown son leaves home gets another 
         chance at motherhood when one of her dumplings springs to life. But she finds 
         that nothing stays cute and small forever.
      </Description>

    </Container>
  )
}

export default Detail

const Container = styled.div`

  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  

`

const Background = styled.div`

position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: -1;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;

}

`

const ImgTitle = styled.div`

height: 30vh;
min-height: 170px;
width: 30vh;
min-width: 200px;

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  

}

`

const Control = styled.div`
  display: flex;
  align-items: center;


`

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: none;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  height: 56px;
  letter-spacing: 1.8px;
  cursor: pointer;
  background: rgb(249, 249, 249);

  &:hover {
    background: rgb(198, 198, 198);
  }
`
const TrailerButton = styled(PlayButton)`
  border: 1px solid rgb(249, 249, 249);
  background: rgba(0, 0, 0, .3);
  color: rgb(249, 249, 249);


`
const AddButton = styled.button`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border: 2px solid white;
  margin-right: 16px;
  cursor: pointer;
  background: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: white;
    font-size: 30px;

  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;

`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);

`