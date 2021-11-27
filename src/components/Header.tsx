import React from 'react';
import './App.css';
import styled from 'styled-components';
import 'react-responsive-modal/styles.css';
import img1500 from '../assets/img/image-1500.png';
import imgmobile from '../assets/img/image-mobile.png';
import discordwhite  from '../assets/img/discord.png';


class Header extends React.Component <any, any> {

  render() {
    return (
    <Wrapper>
      <HeaderDiv id="header">
            <Description>
                    <Title>
                        Welcome to DirtyPanties
                    </Title>
                    <Spacer/>
                    <TitleDesc>
                        6969 randomly generated animated digital collectibles living on the Ethereum blockchain. 
                        <br />
                        Attributes are stored on-chain and can’t be altered.
                    </TitleDesc>
            </Description>
            <JoinDiv>
                  <SocialLogo href={`https://discord.gg/zASPSkRTsu`}>
                        <ConnectButton>
                            <ImgWrapper src={discordwhite} height={`26px`} alt="discord" /> 
                            Join Discord
                        </ConnectButton>
                </SocialLogo>
            </JoinDiv>
     </HeaderDiv>
    </Wrapper>
    );
  }
}

const HeaderDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(0px, auto);
    flex-direction: column;
    border:none; 
    width: auto;
    height: 800px;
    background-image: linear-gradient(-180deg,rgba(6,0,0,.5),rgba(200,32,18,.5)), url(${imgmobile});
    background-size: 100%;
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 0px;
        grid-auto-rows: minmax(0px, auto);
        flex-direction : row;
        background-image: linear-gradient(-180deg,rgba(6,0,0,.5),rgba(200,32,18,.5)), url(${img1500});
        background-size: 100%;
        height: 800px;
    }
`



const JoinDiv = styled.div`
    grid-row: 2;
    display: flex;
    text-align:justify;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 250px;
    @media only screen and (min-width: 768px) {
        padding: 0px 0px 0px;
        grid-row: 4;
        grid-column: 2/6;
    }
`


const Wrapper = styled.section`
    flex-direction: column;
`;


const Description = styled.div`
    grid-row: 1;
    flex-direction: column;
    display: flex;
    align-items: left;
    text-align: center;
    justify-content: flex-start;
    padding: 150px 0px 0px;
    @media only screen and (min-width: 768px) {
        grid-row: 2;
        grid-column: 2/6;
        padding: 0px 0px 0px;
    }
`

const Title = styled.h2`
    flex-direction: column;
    display: flex;

    text-shadow: 0.4rem 0.4rem 0 rgb(0 0 0 / 30%);
    font-weight: bold;
    line-height: 1.2;
    color: #FFEDED;
    font-size: calc(1.853125rem + .4154680369999997 * ((100vw - 30rem)/ 50));
    @media only screen and (min-width: 768px) {
        font-size: 55px;
    }
`

const TitleDesc = styled.p`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    color: rgba(255,242,242,.6);
    padding: 0px 80px 0px;
    font-size: 15px;
    @media only screen and (min-width: 768px) {
        font-size: 22px;
    }
`


const ConnectButton = styled.button`

  border: 1px solid #FFFFFF;
  border-radius: 7px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 5px;
  color: white;
  padding: 10px 10px  10px;
  background-color: transparent;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    border: 3px solid #FFFFFF;
    outline: 5px solid #fff;
    outline-offset: -5px;
  }

  @media (min-width: 768px) {
    border: 1px solid #FFFFFF;
    font-size: 12px;
    padding-left: 2px;
    padding-right: 2px;
    line-height: 19px;
    padding: 18px 50px  14px;
  }
`

const Spacer = styled.div`
    display: flex;
    width: 2%;
`

const SocialLogo = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration:none;
    font-size: 12px;
`

const ImgWrapper = styled.img`
    display: inline-block;
    margin: 0.4em;
`

export default Header;
