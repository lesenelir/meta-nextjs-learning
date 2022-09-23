import fs from 'node:fs/promises'
import path from 'node:path'

function ProductDetailPage(props) {
  const {loadedProduct} = props

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  )
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)

  return JSON.parse(jsonData)
}

// getStaticProps 根据动态路由结合，需要知道具体的URL来返回数据
// 预渲染页面之前，会先调用这个函数
export async function getStaticProps(context) {
  // 通过params来获取参数访问的具体值
  console.log(context)

  const {params} = context // params 是路由
  const productId = params.pid

  const data = await getData()
  const product = data.products.find(product => product.id === productId)

  if (!product) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      loadedProduct: product
    }
  }
}


// 让动态路由知道这个动态路由有哪些实例
export async function getStaticPaths() {
  // 预先生成动态路由可能的URL路径值，作为此动态路由pid的所有可能的值
  const data = await getData()
  const ids = data.products.map(product => product.id)
  const pathWithParams = ids.map(id => {
    return {
      params: {pid: id}
    }
  })

  return {
    // paths 的静态写法：
    // paths: [
    //   {params: {pid: 'p1'}},
    //   {params: {pid: 'p2'}},
    //   {params: {pid: 'p3'}}
    // ],

    // paths 的动态写法：
    paths: pathWithParams,

    // fallback 为 false，如果没有在getStaticPaths列出的动态路由路径都返回404，即只显示列出的paths
    // fallback 为 true，next.js会根据请求路径静态生成页面，推迟不经常请求的页面渲染
    fallback: false
  }
}


export default ProductDetailPage
