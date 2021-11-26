import React from 'react';
import './App.css';
import styled from 'styled-components';
import 'react-responsive-modal/styles.css';
import img1500 from '../assets/img/image-1500.png';


class Header extends React.Component <any, any> {

  render() {
    return (
    <Wrapper>
      <HeaderDiv id="header">
            <Itemcontainer/>
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
                    <TitleDesc>
                        ? December 2021
                    </TitleDesc>

            </Description>
     </HeaderDiv>
    </Wrapper>
    );
  }
}

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    border:none; 
    width: auto;
    height: 300px;
    background-image: linear-gradient(-180deg,rgba(6,0,0,.5),rgba(200,32,18,.5)), url(${img1500});
    background-size: 100%;
    background-repeat: repeat-x;
    @media only screen and (min-width: 768px) {
        flex-direction : row;
        background-image: linear-gradient(-180deg,rgba(6,0,0,.5),rgba(200,32,18,.5)), url(${img1500});
        background-size: 100%;
        height: 850px;
    }
`


const Wrapper = styled.section`
    flex-direction: column;
`;


const Description = styled.div`
    text-align:justify;
    flex-direction: column;
    display: flex;
    align-items: left;
    justify-content: left;
    max-width: 500px;
    justify-content: flex-start;
    margin: 0px 30px 20px;
    @media only screen and (min-width: 768px) {
        margin: 200px 70px 20px;
    }
`

const Title = styled.h2`
    flex-direction: column;
    display: flex;
    align-items: center;
    text-shadow: 0.4rem 0.4rem 0 rgb(0 0 0 / 30%);
    font-family: Georgia, serif;
    font-weight: bold;
    line-height: 1.2;
    color: #FFEDED;
    font-size: calc(0.853125rem + .4154680369999997 * ((100vw - 30rem)/ 50));
    @media only screen and (min-width: 768px) {
        font-size: calc(1.653125rem + .4154680369999997 * ((100vw - 30rem)/ 50));
    }
`

const TitleDesc = styled.p`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    color: rgba(255,242,242,.6);
    font-size: calc(0.63125rem + .2154680369999997 * ((100vw - 30rem)/ 50));
`


const Itemcontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    height: auto;
    transition: all .25s;
    margin: 0px auto 30px;
`

const Spacer = styled.div`
    display: flex;
    width: 2%;
`

export default Header;
