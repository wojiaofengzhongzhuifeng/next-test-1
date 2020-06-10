import {NextApiRequest, NextApiResponse} from "next";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const rootDirPath = process.cwd();

const firstMDFilePath = path.join(rootDirPath, 'markdown/01.md');

fs.readFile(firstMDFilePath, (error, data)=>{
  if(error)console.error(error);
  const mdContent = data.toString();
  console.log(matter(mdContent));
})
const test = (request: NextApiRequest, response: NextApiResponse) => {
  // response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({a: 2}))
}

export default test
