// API Routes 应用场景：
// 前端获取用户输入，用户点击按钮，将请求队列发送到API路由，在API路由中和数据库交互
// （这样使得与数据库进行交互的过程 不能通过 前端暴露）

import {useRef, useState} from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([])

  const emailInputRef = useRef()
  const feedbackInputRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredFeedback = feedbackInputRef.current.value

    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback
    }

    // {email: 'xx@xx.com', text: 'feedback text'}
    // 发送给/api/feedback API路由
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => console.log(data))
  }

  const loadFeedbackHandler = () => {
    fetch('/api/feedback')
        .then(response => response.json())
        .then(data => {
          setFeedbackItems(data.feedback)
        })
  }


  return (
      <div>
        <h1>Home Page</h1>
        <form onSubmit={submitFormHandler}>
          <div>
            <label htmlFor="email">邮箱地址</label>
            <input type="email" id="email" ref={emailInputRef}/>
          </div>
          <div>
            <label htmlFor="feedback">你的反馈</label>
            <textarea id="feedback" cols="30" rows="10" ref={feedbackInputRef}/>
          </div>
          <button>反馈</button>
        </form>
        <hr/>
        <button onClick={loadFeedbackHandler}>反馈信息汇总</button>
        <ul>
          {feedbackItems.map(item => (
              <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
  )
}

export default HomePage
