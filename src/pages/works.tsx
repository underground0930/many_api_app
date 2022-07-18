import type { NextPage } from 'next'
import Head from 'next/head'

// components
import { Layout } from '../components/Layout'

// hook
import { usePostWorksPosts } from '../hooks/works/usePostWorksPosts'

const Works: NextPage = () => {
  const { mutate, isLoading } = usePostWorksPosts()
  return (
    <Layout>
      {isLoading && <div>...loading</div>}

      <button
        onClick={() => {
          mutate({
            name: 'test1',
            job: 'free',
            id: 88
          })
        }}
      >
        post data
      </button>
    </Layout>
  )
}

export default Works
