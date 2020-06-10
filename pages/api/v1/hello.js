// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json(
	  {
		  message: "success",
		  data: [{id:1}, {id:2}]
	  }
  )
}
