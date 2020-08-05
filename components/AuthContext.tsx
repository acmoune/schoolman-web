import React, { useContext, createContext } from 'react'
import IAccount from '../server/src/models/accounts/Account'

const AuthContext = createContext<{ currentUser?: IAccount }>({ currentUser: undefined })

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ currentUser, children }: { currentUser?: IAccount, children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
