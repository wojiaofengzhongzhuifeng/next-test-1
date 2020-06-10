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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmptyData, setIsEmptyData] = useState<boolean>(false);


  useEffect(()=>{
    setIsLoading(true);
    axios.get('/api/v1/posts').then((resolve)=>{
      setIsLoading(false);
      if(resolve.data.length === 0){setIsEmptyData(true);}
      setPostData(resolve.data);
    });
  }, []);
  
  return (
      <GreyDiv>
        {isLoading ? <div>正在加载中</div> : isEmptyData ? <div>数据为空</div> : postsData.map((postData)=>(
          <div key={postData.id}>{postData.title}</div>
        ))}
      </GreyDiv>
  )
}

export default Index
