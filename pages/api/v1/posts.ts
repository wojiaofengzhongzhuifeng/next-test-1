import {NextApiRequest, NextApiResponse} from "next";

const test = (request: NextApiRequest, response: NextApiResponse) => {
  response.end(JSON.stringify({a: 1}))
}

export default test
