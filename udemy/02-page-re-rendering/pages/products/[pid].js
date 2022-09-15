import path from 'node:path'
import fs from 'node:fs/promises'

function ProductDetailPage(props) {
  const {loadedProduct} = props

  if (!loadedProduct) {
    return <p>Loading...</p>
  }

  return (
      <>
        <h1>{loadedProduct.title}</h1>
        <p>{loadedProduct.description}</p>
      </>
  )
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath) // 同步读取
  return JSON.parse(jsonData)
}

// context 掌握具体参数值
export async function getStaticProps(context) {
  const {params} = context
  const productId = params.pid

  const data = await getData()

  const product = data.products.find(product => product.id === productId)

  // fallback 为true 渲染不到页面时 返回一个页面
  if (!product) {
    return {notFound: true}
  }

  return {
    props: {
      loadedProduct: product
    }
  }
}

// 哪个动态页面应该生成
export async function getStaticPaths() {
  const data = await getData()

  const ids = data.products.map(product => product.id)
  const pathsWithParams = ids.map(id => ({params: {pid: id}})) // 数组

  // 当访问量很大的页面，可以设置fallback 为 true，并推迟不常访问的页面
  // fallback为false时，URL路径只配对 paths数组，找不到则渲染404页面
  // fallback为true时，即使不在paths中的路径，也可以渲染一个页面（没定义程序会报错）
  return {
    paths: pathsWithParams,
    fallback: true
  }
}


export default ProductDetailPage
