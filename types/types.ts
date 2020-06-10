interface Blog{
  title: string
  date: string,
  content: string,  
}

// 获取一篇 markdown 
export interface GetPost {
  (name: string): Promise<Blog>;
}

// 获取指定文件名称的 markdown
export interface GetAllPost {
  (filePathList: string[]): Promise<Blog[]>
}

// 获取目录下所有文件路径 string
export interface GetAllFilePath {
  (dirPath: string): Promise<string[]>
}
