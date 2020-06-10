import React from 'react';
import {NextPage} from "next";
import styled from 'styled-components'

const GreyDiv = styled.div`
  background: grey;
  color: white;
  border: 1px solid red;
`

const Index:NextPage = () => {
  return (
      <GreyDiv>post index</GreyDiv>
  )
}

export default Index
