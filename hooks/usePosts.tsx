import {useEffect, useState} from "react";
import {Blog} from "../types/types";
import axios from "axios";


export const usePosts = () => {
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
  
  return {postsData, isEmptyData, isLoading}
};

