import {NextApiRequest, NextApiResponse} from "next";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {GetPost, GetAllPost, GetAllFilePath} from "../../../types/types";

const rootDirPath = process.cwd();
const markdownDirPath = `${rootDirPath}/markdown`;

const getAllFilePath: GetAllFilePath = (dirPath) => {
  return new Promise((resolve, reject)=>{
    fs.readdir(dirPath, (err, files) => {
      if(err){reject(err)}
      let resultFilePath = files.map((filePath)=>{
        return `${dirPath}/${filePath}`
      });
      resolve(resultFilePath);
    });
  })
}

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

const getAllPosts: GetAllPost = (filePathList) => {
  return new Promise((resolve)=>{
    Promise.all(filePathList).then((resolve1)=>{
      let fileContent: Promise<any>[] = []
      resolve1.forEach((filePath)=>{
        fileContent.push(getPost(filePath));
      })
      Promise.all(fileContent).then((fileContentList)=>{
        resolve(fileContentList);
      });
    });
  });
}


const test = (request: NextApiRequest, response: NextApiResponse) => {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('charset', 'utf-8')

  getAllFilePath(markdownDirPath).then((dirFileList)=>{
    getAllPosts(dirFileList).then((post)=>{
      response.end(JSON.stringify(post))
    })
  });
}

export default test
