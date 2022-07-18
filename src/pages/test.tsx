import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { ChangeEvent } from 'react'

// atoms
import { textState } from '../state/global/textState'

// components
import { Layout } from '../components/Layout'

const Test: NextPage = () => {
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

export default Test
