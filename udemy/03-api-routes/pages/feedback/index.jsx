import {buildFeedbackPath, extractFeedback} from "../api/feedback";
import {useState} from "react";


function FeedbackPage(props) {

  const [feedbackData, setFeedbackData] = useState()

  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
        .then(res => res.json())
        .then(data => {
          setFeedbackData(data.feedback)
        })
  }

  return (
      <>
        {feedbackData && <p>{feedbackData.email}</p>}
        <ul>
          {
            props.feedbackItems.map(item => (
                <li key={item.id}>
                  {item.text}
                  <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button>
                </li>
            ))
          }
        </ul>
      </>
  )
}

// pre-render 预渲染 获得静态的props
export async function getStaticProps() {
  // 直接写nodejs逻辑代码
  const filePath = buildFeedbackPath()
  const data = extractFeedback(filePath)

  return {
    props: {
      feedbackItems: data
    }
  }
}

export default FeedbackPage
