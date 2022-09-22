import Link from "next/link"

function Home() {
  return (
    <>
      <h1>The Home Page</h1>
      {/* 使用a标签会发起一笔新的http请求，Link标签不会发起http请求 */}
      <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><a href="/clients">clients</a></li>
      </ul>
    </>
  )
}

export default Home
