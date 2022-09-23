import fs from 'node:fs/promises'
import path from 'node:path'

import Link from "next/link"

function Home(props) {
  const {products} = props
  return (
    <>
      <ul>
        {products.map(product => (
          <li key={product.id}><Link href={`${product.id}`}>{product.title}</Link></li>
        ))}
      </ul>
    </>
  )
}

// 客户端是无法获取getStaticProps中代码的内容
// 只在构建时运行，获取数据发生在服务端，不发生在客户端
export async function getStaticProps() {
  console.log('Static Props')

  // readFileSync() 同步读取文件
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
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
    // 对于每一个请求都要重新生成页面，除非最后一次页面生成时间小于120秒
    revalidate: 120
  }
}

export default Home
