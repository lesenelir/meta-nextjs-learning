// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// /pages/api 文件夹是一个特殊的文件夹
// 该文件夹不是返回页面，而是返回请求回来的数据

// URL路径： /api/hello

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
