import type { NextPage } from 'next'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

// recoil サンプル
// https://recoiljs.org/docs/guides/asynchronous-data-queries

// hooks
import { UseUserState } from '../hooks/atoms/useUserState'

// components
import { Layout } from '../components/Layout'

const RecoilTest: NextPage = () => {
  const [, setUser] = UseUserState()

  return (
    <Layout>
      <h1>Recoil</h1>
      <button onClick={() => setUser({ name: 'taro', userId: 1 })}>taro</button>
      <button onClick={() => setUser({ name: 'jiro', userId: 2 })}>jiro</button>
      <button onClick={() => setUser(null)}>reset</button>
    </Layout>
  )
}

export default RecoilTest
