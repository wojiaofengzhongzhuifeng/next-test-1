import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: black;
`

export default function X() {
  return <div>
    <Title>fdsfdsafds</Title>
    <Link href='/'>
      <a>back to /</a>
    </Link>
  </div>;
  
}
