import { useMutation } from 'react-query'
import axios from 'axios'

// 参考記事
// http://www.code-magagine.com/?p=13565

type Data = {
  userId: number
  id: number
  title: string
  body: string
}

type Props = {
  name: string;
  job: string;
  id: number;
}

const mutationKey = 'works/posts'

// ダミーAPI
const url = 'https://jsonplaceholder.typicode.com/posts'

const postFnc = (data:Props) =>  {
  return axios.post<Data>(url,data)
}

export const usePostWorksPosts = () =>{
  return useMutation(postFnc,{
    mutationKey,
    onSuccess: (data) => {
      //
      console.log(data);
      alert("post success");
    },
    onError: () => {
      //
    },
    onSettled: () => {
      //
    },
  })
}


