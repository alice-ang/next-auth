export type User = {
  name?: string | null
  email?: string | null
  image?: string | null
}

export type ReviewType = {
  showButton?: boolean
  review: {
    id: number
    rating: number
    content: string
    author: string
    avatarSrc: string
    likes?: string
    views?: string
    date: string
    datetime: string
  }
}

export type ProviderType = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
}
