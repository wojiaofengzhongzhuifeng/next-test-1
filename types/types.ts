import ErrnoException = NodeJS.ErrnoException;

interface Blog{
  title: string
  date: string,
  content: string,  
}

type GetPost = (name: string) => Promise<Blog>;

export default GetPost
