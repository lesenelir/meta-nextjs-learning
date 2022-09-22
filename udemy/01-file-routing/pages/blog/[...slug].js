import {useRouter} from "next/router"

// 动态路由加上... 即为动态路由不止是单层，可以后面根很多层级
// 最后 router.query 返回的是一个数组，数组url根据'/'分为不同层级的值

// http://localhost:3000/blog/2022/09

function BlogPostPage() {
  const router = useRouter()

  console.log(router.query) // {slug: ['2022', '09']}

  return (
    <>
      <h1>The Blog Posts</h1>
    </>
  )
}

export default BlogPostPage

// Note： 动态路由[id]只允许返回一层特定的路由，如果有多层则返回404
//        动态路由[...id] 可以在该url路径返回多层级 ==> catching all routes
