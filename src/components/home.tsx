import React from 'react';
import './App.css';
import styled from 'styled-components';
import 'react-responsive-modal/styles.css';

import Header from "./Header";

class Home extends React.Component <any, any> {

  render() {
    return (
    <Wrapper>
        <Header />
   </Wrapper>
    );
  }
}


const Wrapper = styled.div`
    flex-direction: column;
`;


export default Home;
