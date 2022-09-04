import { useState, useEffect, createContext } from 'react'
import { auth } from 'utils/firebase/firebase'
import Router from 'next/router'

export const useAuth = () => {
  const [name, setName] = useState<string | null>(null)
  const [currentUser, setCurrentUser] = useState<object | null>(null)
  useEffect(() => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName)
    }
  })
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : Router.push('/')
    })
  }, [])

  return name
}
