// URL: /posts/first-post
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"

function FirstPost() {
  return (
      <Layout>
        {/*页面的head标签*/}
        <Head>
          <title>My First Post</title>
          {/*<script src="https://connect.facebook.net/en_US/sdk.js" />*/}
        </Head>
        {/*<Script*/}
        {/*    src="https://connect.facebook.net/en_US/sdk.js"*/}
        {/*    strategy="lazyOnload"*/}
        {/*    onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}*/}
        {/*/>*/}

        <h1>First Post</h1>
        <h4>
          <Link href="/"><a>Back to home</a></Link>
        </h4>
      </Layout>
  )
}

export default FirstPost
