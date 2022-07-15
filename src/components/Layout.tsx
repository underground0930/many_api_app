import React from 'react'
import { useFetchAllPagePosts } from '../hooks/common/useFetchAllPagePosts'

type Props = {
    children: React.ReactNode;
}


export const Layout:React.FC<Props> = ({children}) => {
    const { data, error, isLoading } = useFetchAllPagePosts()
    return (
    <>
        {isLoading && <div>...All loading</div>}
        <hr />
        <h1>ページ固有の処理</h1>
        <div>{children}</div>    
        <hr />
        <h1>ページ全体で必要な処理</h1>
        <ul>
        {data?.map((item:any, index:number) => {
            return (
            <li key={index}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.completed ? "終わり" : "未対応"}</p>
            </li>
            )
        })}
        </ul>
        <hr />

    </>
  )
}
