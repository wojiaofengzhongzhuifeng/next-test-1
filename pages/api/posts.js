// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.statusCode = 200
	res.json({
		message: '获取数据成功',
		data: [
			{title: "第一篇博客"},
			{title: "第二篇博客"},
		]
	})
}
