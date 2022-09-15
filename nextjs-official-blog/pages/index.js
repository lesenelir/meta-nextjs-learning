import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

import Layout, {siteTitle} from "../components/layout"
import utilStyles from '../styles/utils.module.css'

export default function Home() {
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

    </Layout>
  )
}
