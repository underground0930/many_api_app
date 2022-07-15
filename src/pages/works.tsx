import type { NextPage } from 'next'

import Head from 'next/head'
import { usePostWorksPosts } from '../hooks/works/usePostWorksPosts'

const Works: NextPage = () => {
  const { mutate, isLoading } = usePostWorksPosts()
  return (
    <div>

      {isLoading && <div>...loading</div>}

      <button onClick={()=>{
        mutate({
          name: "test1",
          job: 'free',
          id: 88,
        })
      }}>add</button>

    </div>
  )
}

export default Works
