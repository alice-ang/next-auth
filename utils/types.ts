export type User = {
  name?: string | null
  email?: string | null
  image?: string | null
}

export type SchoolType = {
  id: number
  name: string
  numOfListings: number
  numOfReviews: number
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

export type ListingType = {
  school?: SchoolType
  reviews?: ReviewType["review"][]
  listing: {
    id: number
    street: string
    zipCode: number
    city: string
    school?: SchoolType
    reviews?: ReviewType[]
  }
}
export type ProviderType = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
}
