import './App.css';
import styled from 'styled-components';
//import Logo from '../assets/img/logo.png';
import React, {Fragment} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Web3 from 'web3'
import Home from './home';
import discord  from '../assets/img/discord.png';
import twitter  from '../assets/img/twitter.png';
import insta from '../assets/img/insta.png';
var namehash = require('eth-ens-namehash')


declare let window: any;

class App extends React.Component <any, any> {

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      networkId: 0
    }
  }

  networkId = 1;
  web3 = null;
  ens = null;
  async componentDidMount() {
    await this.loadWeb3()
    if(this.web3 !== null){
      await this.loadNetwork()
      await this.connect()
    }
  }

    async componentDidUpdate(prevProps) {
       if( this.state.account === '' && this.web3 !== null){
        await this.loadNetwork()
        await this.connect()
        }
  }

  async loadWeb3() {
    await window.ethereum.enable()
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      this.web3 = window.web3
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      this.web3 = window.web3
   }
    if (window.ethereum || window.web3) {
      // use MetaMask's provider
      // detect Metamask account change
      window.ethereum.on('accountsChanged', (accounts) => {
        this.setState({
          account: accounts[0]
        })
        this.connect()
      });
       // detect Network account change
      window.ethereum.on('networkChanged', (newNetworkId) => {
        //console.log("newNetworkId",parseInt(newNetworkId))
        this.setState({
          networkId: parseInt(newNetworkId)
        })
        this.connect()
      });
    } else {
      console.warn(
        "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
      );
    }
  }


  wait(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  async loadNetwork() {
    this.setState({
      networkId: await this.web3.eth.net.getId()
    });
  }


async Reverse(address) {
    if ( this.state.networkId === 1){
        try{
        var lookup = address.toLowerCase().substr(2) + '.addr.reverse'
        var ResolverContract = await this.web3.eth.ens.resolver(lookup);
        var nh = namehash.hash(lookup);
        var name = await ResolverContract.methods.name(nh).call()
        //console.log("ENS name",name)
        return name;
        }
        catch (error) {
             return "";
        }
    }
    else{
        return "";
    }
}

  async connect() {

    this.loadWeb3()

    const walletAddress = await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [
        {
          eth_accounts: {}
        }
      ]
    });
    if (!walletAddress[0]) {
    // Runs only they are brand new, or have hit the disconnect button
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {}
          }
        ]
      });
    }
    const accounts = await this.web3.eth.getAccounts()
    console.log("CONNECT before ENS",accounts[0])
    const ens = await this.Reverse(accounts[0])
    this.setState({ account: accounts[0] })
    this.setState({ ens: ens })
    console.log("CONNECT After ENS",accounts[0],ens)
  }

  async disconnect() {
    this.setState({
      account: '',
    });
    this.web3 = null
    this.ens = ""
    console.log(this.web3,this.ens)
  }


  render() {
    return (
            <Router basename="/">
                <NavWrapper>
                  <NavContainer>
                    <LeftNav>
                     <StyledNav>
                          <StyledLinkH to="/">
                          <TextLogo>DirtyPanties<span>NFT</span></TextLogo>
                          </StyledLinkH>
                      </StyledNav>
                    <SocialWrapper>
                        <SocialLogo  href={'https://twitter.com/69DirtyPanties'}>
                            <ImgWrapper src={twitter} height={`7px`} alt="twitter"/>
                        </SocialLogo>
                        <SocialLogo href={`https://discord.gg/zASPSkRTsu`}>
                            <ImgWrapper src={discord} height={`7px`} alt="discord"/>
                        </SocialLogo>
                        <SocialLogo href={`https://www.instagram.com/dirtypantiesnft`}>
                            <ImgWrapper src={insta} height={`7px`} alt="insta"/>
                        </SocialLogo>
                    </SocialWrapper>
                     </LeftNav>
                  </NavContainer>
                </NavWrapper>
                <Fragment>
                    <Switch>
                        <Route exact path={'/'} render={() => <Home web3={this.web3} account={this.state.account}/>} />
                        </Switch>
                </Fragment>
        </Router>
    );
  }
}




const NavWrapper = styled.nav`
  width: 100%;
  position: fixed;
  background: transparent;
`

//const LogoObj = styled.img`
//  width: 48px;
//  height: 48px;
//`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 480px) {
    padding: 2px 2px;
  }

  @media only screen and (min-width: 768px) {
    padding: 6px 1%;
  }
`

const TextLogo = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  color: white;
  margin-right: 2px;

  & span {
    color: #D29EE9;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
    padding-left: 1px;
    padding-right: 1px;
  }
`

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding-left: 1px;
    padding-right: 1px;
  }
`

const StyledLinkH = styled(Link)`
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  padding-left: 1px;
  padding-right:1px;
  text-decoration: none;
  &:hover {
    color: green;
  }
  &.active {
    color: red;
  }
  @media (min-width: 768px) {
    font-size: 11px;
    font-weight: 700;
    padding-left: 5px;
    padding-right: 5px;
  }
`


const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`


const SocialWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border:none;
    justify-content: flex-start;
    @media only screen and (min-width: 768px) {
        flex-direction : row;
    }
`

const SocialLogo = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ImgWrapper = styled.img`
    width: 25px;
    height: 25px;
    display: inline-block;
    margin: 0.2em;
    @media only screen and (min-width: 768px) {
        width: 25px;
        height: 25px;
    }
`

export default App;

