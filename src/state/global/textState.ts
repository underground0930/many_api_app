import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : window.localStorage
})

export const textState = atom<string>({
  key: 'textState',
  default: '',
  effects_UNSTABLE: [persistAtom]
})
