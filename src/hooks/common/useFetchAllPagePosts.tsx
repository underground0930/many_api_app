import { useQuery } from 'react-query'
import axios from 'axios'

// 参考記事
// http://www.code-magagine.com/?p=13537
// https://zenn.dev/himorishige/articles/76e903bc5a1aa2

type Data = {
  userId: number
  id: number
  title: string
  completed: boolean
}[]

const queryKey = 'all/todos'

// ダミーAPI
const url = 'https://jsonplaceholder.typicode.com/users/1/todos'

const fetcher = async () => {
  const { data } = await axios.get<Data>(`${url}`)
  return data
}

export const useFetchAllPagePosts = () => {
  return useQuery<Data, Error>({
    queryKey,
    queryFn: fetcher,
    cacheTime: 0,
    staleTime: 0,
  })
}