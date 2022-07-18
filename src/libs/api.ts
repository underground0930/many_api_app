import axios from 'axios'
import { TopListType, WorksType, ResponseBaseType } from '../types'

const headers = {}

const params = {}

const apiBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  headers,
  params
})

// エンドポイントごとにAPI処理の関数を用意する
const apiEndpoints = () => {
  return {
    getTopList: (category: string) =>
      apiBase.get<TopListType>(`/top-list/${category}`),
    postWork: (work: WorksType) => apiBase.post<ResponseBaseType>('/work', work)
  }
}

const api = apiEndpoints()

export { apiBase, api }
