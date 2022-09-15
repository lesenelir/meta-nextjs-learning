import fs from 'node:fs'
import path from 'node:path'

// api文件夹内的js文件不是一个React Component，而是一个标准的JS函数


// 重用代码
export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json')
}

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath)
  return JSON.parse(fileData)
}


// 该函数解决发送到 /api/feedback 的传入请求
function handler(req, res) {
  // 该函数内编写 服务端 代码

  if (req.method === 'POST') {
    const email = req.body.email
    const feedbackText = req.body.text

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText
    }

    // 接下去的步骤： 与数据库进行交互，把请求体中的内容存入数据库

    // 此处进行简化： 存储在文件中
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    res.status(201).json({message: 'Success', feedback: newFeedback})
  } else {
    const filePath = buildFeedbackPath()
    const data = extractFeedback(filePath)
    res.status(200).json({message: 'Hello API Routes', feedback: data})
  }
}

export default handler
