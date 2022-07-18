import type { NextPage } from 'next'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

// recoil サンプル
// https://recoiljs.org/docs/guides/asynchronous-data-queries

// atoms
import { textState } from '../state/global/textState'

// components
import { Layout } from '../components/Layout'

const RecoilTest: NextPage = () => {
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <Layout>
      <h1>{text}</h1>
      <div>
        <input type="text" onChange={onChange} />
      </div>

      <button onClick={() => setText('hello')}>set text</button>
    </Layout>
  )
}

export default RecoilTest
