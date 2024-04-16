import { g, config } from '@grafbase/sdk';

// @ts-ignore
const User = g.model('User', {
  username: g.string().length({ min: 2, max: 30 }).unique(),
  email: g.string().unique(),
  password: g.string().optional(),
  image: g.url().optional(),
  isAdmin: g.boolean().default(false),
  createdAt: g.datetime().default(new Date()),
  posts: g.relation(() => Post).list().optional(),
})//.auth((rules) => {
//   rules.public().read()
// })

// @ts-ignore
const Post = g.model('Post', {
  title: g.string().length({ min: 3 }),
  desc: g.string(), 
  image: g.url(),
  slug: g.string().unique(),
  createdAt: g.datetime().default(new Date()),
  userId: g.relation(() => User),
 })//.auth((rules) => {
//   rules.public().read()
//   rules.private().create().delete().update()
// })

// const jwt = auth.JWT({
//   issuer: 'grafbase',
//   secret:  g.env('NEXTAUTH_SECRET')
// })

export default config({
  schema: g,
  // auth: {
  //   providers: [jwt],
  //   rules: (rules) => rules.private()
  // },
})

