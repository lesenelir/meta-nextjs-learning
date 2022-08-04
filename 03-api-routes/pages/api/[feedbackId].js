// 动态 API Routes | 动态路由

// /api/xx or /api/1
import {buildFeedbackPath, extractFeedback} from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedbackId
  const filePath = buildFeedbackPath()
  const feedbackData = extractFeedback(filePath)

  const selectedFeedback = feedbackData.find(feedback => feedback.id === feedbackId)

  res.status(200).json({feedback: selectedFeedback})
}

export default handler
