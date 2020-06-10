import React, {useEffect, useState} from 'react';
import {NextPage} from "next";
import styled from 'styled-components'
import axios from 'axios';
import {Blog} from "../../types/types"; 
import {usePosts} from "hooks/usePosts";

const GreyDiv = styled.div`
  background: grey;
  color: white;
  border: 1px solid red;
`

const Index:NextPage = () => {
  const {isLoading, isEmptyData, postsData} = usePosts();
  
  return (
      <GreyDiv>
        {isLoading ? <div>正在加载中</div> : isEmptyData ? <div>数据为空</div> : postsData.map((postData)=>(
          <div key={postData.id}>{postData.title}</div>
        ))}
      </GreyDiv>
  )
}

export default Index
