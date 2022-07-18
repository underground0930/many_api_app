import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : window.localStorage
})

export const userState = atom<{ userId: number; name: string } | null>({
  key: 'user',
  default: null,
  effects_UNSTABLE: [persistAtom]
})
