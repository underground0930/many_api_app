import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../../state/global/user'

export const UseUserState = () => {
  const [isInit, setIsInit] = useState(true)
  const [user, setUser] = useRecoilState(userState)

  useEffect(() => {
    setIsInit(false)
  }, [])
  return [isInit ? null : user, setUser] as const
}
