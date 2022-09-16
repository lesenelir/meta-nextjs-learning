import Link from "next/link"
import Head from "next/head"

import Layout, {siteTitle} from "../components/layout"
import Date from '../components/date'
import {getSortedPostsData} from "../lib/posts"
import utilStyles from '../styles/utils.module.css'

export default function Home(props) {
  const {allPostsData} = props

  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <h1>Index Pages</h1>

        <section className={utilStyles.headingMd}>
          <p>Hi, I am Lesenelir. You can visit my <a href="https://github.com/lesenelir">Github</a></p>
        </section>
        <h4>
          Change <Link href="/posts/first-post">this page !</Link>
        </h4>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({id, date, title}) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br/>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date}/>
                  </small>
                </li>
            ))}
          </ul>
        </section>

      </Layout>
  )
}

// 渲染前会调用该方法，该方法return 一个对象，该对象有props属性，该属性是一个对象
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
