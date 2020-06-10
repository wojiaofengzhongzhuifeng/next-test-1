import React, {useEffect, useState} from 'react';
import {NextPage} from "next";
import styled from 'styled-components'
import axios from 'axios';
import {Blog} from "../../types/types"; 

const GreyDiv = styled.div`
  background: grey;
  color: white;
  border: 1px solid red;
`

const Index:NextPage = () => {
  const [postsData, setPostData] = useState<Blog[]>([]);
  
  useEffect(()=>{
    axios.get('/api/v1/posts').then((resolve)=>{
      setPostData(resolve.data);
    });
  }, []);
  
  return (
      <GreyDiv>
        {postsData.map((postData)=>(
          <div key={postData.id}>{postData.title}</div>
        ))}
      </GreyDiv>
  )
}

export default Index
