import React from 'react'
import Link from 'next/link'

import { useFetchAllPagePosts } from '../hooks/common/useFetchAllPagePosts'

// hooks
import { UseUserState } from '../hooks/atoms/useUserState'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [user] = UseUserState()
  const { data, error, isLoading } = useFetchAllPagePosts()
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a>works</a>
              </Link>
            </li>
            <li>
              <Link href="/recoil">
                <a>recoil</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          {user ? (
            <h1>
              {user?.name}:{user?.userId}
            </h1>
          ) : (
            <h1>Null</h1>
          )}
        </div>
      </header>

      {isLoading && <div>...All loading</div>}
      <hr />
      <h1>ページ固有の処理</h1>
      <div>{children}</div>
      <hr />
      <h1>ページ全体で必要な処理</h1>
      <ul>
        {data?.map((item: any, index: number) => {
          return (
            <li key={index}>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.completed ? '終わり' : '未対応'}</p>
            </li>
          )
        })}
      </ul>
      <hr />
    </>
  )
}
