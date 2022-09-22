// 动态路由的嵌套方式
// http://localhost:3000/clients/server/1

import {useRouter} from "next/router"

function SelectClientProjectPage() {
  const router = useRouter()

  // router.query 可以拿到动态路由[]中的值
  console.log(router.query) // {id: 'server', clientprojectid: '1'}

  return (
    <>
      <h1>The Project for a specific Project for a selected client</h1>
    </>
  )
}

export default SelectClientProjectPage
