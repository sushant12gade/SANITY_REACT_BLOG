import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '5ynhj7gc',
  dataset: 'production',
  apiVersion: '2022-08-30', // use a UTC date string
  token: process.env.SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

 