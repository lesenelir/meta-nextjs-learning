import {useRouter} from "next/router"

// 动态路由
function PortfolioProjectPage() {
  const router = useRouter()

  /**
   * router.pathname 是获取URL路径
   * router.query 是获取动态路由中[]的内容，即获取动态路由参数值
   */
  console.log(router.pathname) // /portfolio/[projectId]
  console.log(router.query) // {projectId: '1'}

  // 可以用router.query.projectId向后台请求相关的数据
  // 一般都是：根据URL去请求相关数据，并进行显示

  return (
    <>
      <h1>The Portfolio Project Page</h1>
    </>
  )
}

export default PortfolioProjectPage
