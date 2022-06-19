export type User = {
  id: string
  email: string
  displayName: string
  photo: string
}

export type ColorType = {
  color?:
    | "gray"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "purple"
    | "pink"
}

export type SchoolType = {
  id: string
  name: string
  numOfListings: number
  numOfReviews: number
  lat: number
  lng: number
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
    date: string
    datetime: string
  }
}

export type ListingType = {
  school?: SchoolType | null
  reviews?: ReviewType["review"][]
  listing: {
    id: number
    street: string
    zipCode: number
    city: string
    school?: SchoolType
    reviews?: ReviewType[]
    tags: string[]
    numOfReviews: number
    avgRating: number
  }
}

export type ProviderType = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
}
export type ButtonType = ColorType & {
  buttonLink?: string
  children?: any
  fullWidth?: boolean
  className?: string
}
