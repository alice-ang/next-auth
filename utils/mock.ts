export const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
            <p>Nulla dictum, lectus nec lobortis tristique, quam sapien ultrices neque, quis fermentum ipsum nisl mollis lectus. Duis et placerat massa. Maecenas volutpat non est vitae ultrices. Sed convallis, tellus vitae congue gravida, nisl diam tincidunt est, vel ultrices diam risus non erat. Praesent ultrices lectus lorem, ac iaculis eros dignissim vel. Morbi feugiat purus dui, sed finibus nisi iaculis non. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "11",
      date: "December 9 at 11:43 AM",
      datetime: "2020-12-09T11:43:00",
    },
    {
      id: 2,
      rating: 4,
      content: `
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel libero ut risus efficitur cursus ut ac velit. Nunc scelerisque dapibus mi, at viverra mauris feugiat nec. Quisque eleifend arcu a quam pulvinar, eu venenatis sapien pharetra. Praesent malesuada sollicitudin diam, id dapibus felis semper in.</p>
            `,
      author: "Hector Gibbons",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "1",
      date: "December 9 at 11:43 AM",
      datetime: "2020-12-09T11:43:00",
    },
    {
      id: 3,
      rating: 1,
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel libero ut risus efficitur cursus ut ac velit. Nunc scelerisque dapibus mi, at viverra mauris feugiat nec. Quisque eleifend arcu a quam pulvinar, eu venenatis sapien pharetra. Praesent malesuada sollicitudin diam, id dapibus felis semper in.</p>
    `,
      author: "Lorem Ipsum",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "5",
      date: "December 9 at 11:43 AM",
      datetime: "2020-12-09T11:43:00",
    },
    {
      id: 4,
      rating: 1,
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel libero ut risus efficitur cursus ut ac velit. Nunc scelerisque dapibus mi, at viverra mauris feugiat nec. Quisque eleifend arcu a quam pulvinar, eu venenatis sapien pharetra. Praesent malesuada sollicitudin diam, id dapibus felis semper in.</p>
    `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "2",
      date: "December 9 at 11:43 AM",
      datetime: "2020-12-09T11:43:00",
    },
    {
      id: 5,
      rating: 2,
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel libero ut risus efficitur cursus ut ac velit. Nunc scelerisque dapibus mi, at viverra mauris feugiat nec. Quisque eleifend arcu a quam pulvinar, eu venenatis sapien pharetra. Praesent malesuada sollicitudin diam, id dapibus felis semper in.</p>
    `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "9",

      date: "December 9 at 11:43 AM",
      datetime: "2020-12-09T11:43:00",
    },
  ],
}

export const schools = [
  {
    id: 1,
    name: "Högskolan i Skövde",
    numOfListings: 87,
    numOfReviews: 2487,
    lat: 58.3941248,
    lng: 13.8534906,
  },
  {
    id: 2,
    name: "Linköpings Universitet",
    numOfListings: 230,
    numOfReviews: 2487,
    lat: 58.3978364,
    lng: 15.5760072,
  },
]

export const amenities = [
  {
    type: "kitchen",
    count: 70,
    totalCount: 100,
  },
  {
    type: "bathroom",
    count: 80,
    totalCount: 100,
  },
  {
    type: "washroom",
    count: 37,
    totalCount: 100,
  },
  {
    type: "internet",
    count: 54,
    totalCount: 100,
  },
  // {
  //   type: "location",
  //   count: 43,
  //   totalCount: 100,
  // },
]

export const listings = [
  {
    id: 1,
    street: "Norra Trängallén 3",
    zipCode: 54146,
    city: "Skövde",
    tags: ["1 room", "29 m²"],
    numOfReviews: 23,
    avgRating: 3,
    lat: 58.3977876,
    lng: 13.8561282,
  },
  {
    id: 2,
    street: "Kurortsvägen 16",
    zipCode: 54137,
    city: "Skövde",
    tags: ["2 rooms", "53 m²"],
    numOfReviews: 13,
    avgRating: 3,
    lat: 58.3908667,
    lng: 13.8516649,
  },
  {
    id: 3,
    street: "Regementsgatan 4",
    zipCode: 54146,
    city: "Skövde",
    tags: ["1 room", "24 m²"],
    numOfReviews: 31,
    avgRating: 42,
    lat: 58.3953623,
    lng: 13.8546916,
  },
  {
    id: 4,
    street: "Norra Trängallén 6",
    zipCode: 54146,
    city: "Skövde",
    tags: ["1 room", "21 m²"],
    numOfReviews: 17,
    avgRating: 4,
    lat: 58.397796,
    lng: 13.8538929,
  },
  {
    id: 5,
    street: "Södra Trängallén 3B",
    zipCode: 54146,
    city: "Skövde",
    tags: ["1 room", "17 m²"],
    numOfReviews: 7,
    avgRating: 5,
    lat: 58.396411,
    lng: 13.855372,
  },
  {
    id: 6,
    street: "Torggatan 26",
    zipCode: 54130,
    city: "Skövde",
    tags: ["2 room", "51 m²"],
    numOfReviews: 28,
    avgRating: 4,
    lat: 58.391073,
    lng: 13.842215,
  },
  {
    id: 7,
    street: "Norra Trängallén 6",
    zipCode: 54146,
    city: "Skövde",
    tags: ["1 room", "17 m²"],
    numOfReviews: 4,
    avgRating: 3,
    lat: 58.397796,
    lng: 13.8538929,
  },
  {
    id: 8,
    street: "Norra Trängallén 4B",
    zipCode: 54146,
    city: "Skövde",
    tags: ["2 room", "43 m²"],
    numOfReviews: 4,
    avgRating: 3,
    lat: 58.397633,
    lng: 13.857001,
  },
  {
    id: 9,
    street: "Kurortsvägen 18",
    zipCode: 54137,
    city: "Skövde",
    tags: ["2 room", "45 m²"],
    numOfReviews: 4,
    avgRating: 3,
    lat: 58.391455,
    lng: 13.855537,
  },
  {
    id: 10,
    street: "Kurortsvägen 18",
    zipCode: 54137,
    city: "Skövde",
    tags: ["1 room", "30 m²"],
    numOfReviews: 8,
    avgRating: 3,
    lat: 58.389854,
    lng: 13.854253,
  },
]

export const steps = [
  { name: "Step 1", status: "complete" },
  { name: "Step 2", status: "complete" },
  { name: "Step 3", status: "current" },
  { name: "Step 4", status: "upcoming" },
  { name: "Step 5", status: "upcoming" },
]

export const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
]
