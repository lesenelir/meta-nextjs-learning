import path from 'node:path'
import fs from 'node:fs/promises'
import Link from "next/link";

function HomePage(props) {
  const {products} = props

  return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
  )
}

// 为组件准备props (开发服务器的一部分)
// 使得数据是发送给客户端页面的一部分，而使得获取数据发生在服务端，而不是在客户端
// getStaticProps 函数在服务器上运行，而不是在客户端上运行
export async function getStaticProps() {
  // 可以在这使用文件系统模块
  // const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const filePath = path.join(process.cwd(), 'data','dummy-backend.json')
  const jsonData = await fs.readFile(filePath) // 同步读取
  const data = JSON.parse(jsonData)

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  if (data.products.length === 0) {
    return {notFound: true}
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 60
  }

}

export default HomePage
