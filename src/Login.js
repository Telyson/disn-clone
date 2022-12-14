import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' />
            <SignUp>
                Get All There
            </SignUp>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In soluta mollitia accusantium quidem illum cupiditate, 
                numquam sunt odit fugit deleniti. consectetur adipisicing elit. In soluta mollitia accusantium quidem illum cupiditate
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png' />

        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`

min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;display: flex;
align-items: top;
justify-content: center;

&:before {
    background: url("/images/login-background.jpg") center center / cover 
    no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1
}

`

const CTA = styled.div`
max-width: 650px;
display: flex;
// align-items: center;
// justify-content: center;
width: 80%;
flex-direction: column;
padding: 80px 40px;


`

const CTALogoOne  = styled.img`
   
`

const SignUp  = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;
text-transform: uppercase;

&:hover {
    background-color: #0483ee;
}
   
`

const Description = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
 margin-bottom:10px;
`

const CTALogoTwo = styled.img`

`