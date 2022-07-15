import { useQuery } from 'react-query'
import axios from 'axios'

// 参考記事
// http://www.code-magagine.com/?p=13537
// https://zenn.dev/himorishige/articles/76e903bc5a1aa2

type Data = {
  userId: number
  id: number
  title: string
  body: string
}

const queryKey = 'top/posts'

// ダミーAPI
const url = 'https://jsonplaceholder.typicode.com/posts'

const fetcher = (id: number) => async () => {
  const { data } = await axios.get<Data>(`${url}/${id}`)
  return data
}

export const useFetchTopPosts = (id: number) => {
  return useQuery<Data, Error>({
    queryKey,
    queryFn: fetcher(id),
    cacheTime: 0,
    staleTime: 0,
  })
}
