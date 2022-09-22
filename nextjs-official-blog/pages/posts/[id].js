import Head from 'next/head'
import Layout from "../../components/layout"
import Date from '../../components/date'
import {getAllPostIds, getPostData} from "../../lib/posts"

import utilStyles from '../../styles/utils.module.css'

function Post(props) {
  const {postData} = props

  return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
  )
}

// 动态路由id所有可能的路径值，path是一个数组
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// 根据id的所对应的值，去请求响应的数据
export async function getStaticProps({ params }) {
  // 获取数据可以从外部API获取，此处从当前项目文件夹获取
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    }
  }
}

export default Post
