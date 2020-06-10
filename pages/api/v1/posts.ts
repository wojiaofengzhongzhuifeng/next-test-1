import {NextApiRequest, NextApiResponse} from "next";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import GetPost from "../../../types/types";

const rootDirPath = process.cwd();

const firstMDFilePath = path.join(rootDirPath, 'markdown/01.md');
const secondMDFilePath = path.join(rootDirPath, 'markdown/02.md');



// 获取一篇 markdown 
const getPost: GetPost = (markdownPath) => {
  return new Promise((resolve, reject)=>{
    fs.readFile(markdownPath, (error, data)=>{
      if(error){reject(error)}
      const mdContent = data.toString();
      resolve({
        title: matter(mdContent).data.title,
        date: matter(mdContent).data.date,
        content: matter(mdContent).content,
      })
    })
  })
}

// 获取指定文件名称的 markdown
function getAllPosts(firstMDFilePath: string, secondMDFilePath: string){
  return new Promise((resolve)=>{
    Promise.all([getPost(firstMDFilePath), getPost(secondMDFilePath)]).then((resolve1)=>{
      resolve(resolve1);
    });
  });
}


const test = (request: NextApiRequest, response: NextApiResponse) => {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('charset', 'utf-8')

  getAllPosts(firstMDFilePath, secondMDFilePath).then((post)=>{
    console.log(post);
    response.end(JSON.stringify(post))
  })
}

export default test
