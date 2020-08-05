import cookie from 'js-cookie'
import {Request} from 'express'

const onBrowser = () => !(typeof window == undefined)
const ONE_HUNDRED_DAYS = 100

export const setCookie = (key:string, value: any) => {
  if (onBrowser()) {
    cookie.set(key, value, {
      expires: ONE_HUNDRED_DAYS,
      path: '/'
    })
  } else { throw new Error("Cannot set cookie on server")}
}

export const removeCookie = (key: string) => { if (onBrowser()) cookie.remove(key) }

export const getCookieFromBrowser = (key: string) => cookie.get(key)

export const getCookieFromServer = (key: string, req: Request) => {
  if (!req.headers.cookie) return undefined
  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`))
  if (!rawCookie) return undefined
  return rawCookie.split('=')[1]
}
