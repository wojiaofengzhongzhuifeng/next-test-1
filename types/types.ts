interface Blog{
  title: string
  date: string,
  content: string,  
}


export interface GetPost {
  (name: string): Promise<Blog>;
}


export interface GetAllPost {
  (filePathList: string[]): Promise<Blog[]>
}

