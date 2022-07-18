import type { NextPage } from 'next'
import Head from 'next/head'

// components
import { Layout } from '../components/Layout'

// hooks
import { useFetchTopPosts } from '../hooks/top/useFetchTopPosts'

const Example: NextPage = () => {
  const { data, error, isLoading } = useFetchTopPosts(3)
  return (
    <Layout>
      <Head>
        <title>Top</title>
      </Head>

      {isLoading && <div>loading...</div>}
      {error && <div>error</div>}

      {data && (
        <div>
          <p>
            <b>userId</b> : {data.userId}
          </p>
          <p>
            <b>id</b> : {data.id}
          </p>
          <p>
            <b>title</b> : {data.title}
          </p>
          <p>
            <b>body</b> : {data.body}
          </p>
        </div>
      )}
    </Layout>
  )
}

export default Example
