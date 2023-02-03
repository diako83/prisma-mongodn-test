import { getUserById } from '../../../lib/prisma/users'
import User from './user'



const Page = async ({ params }) => {

  console.log("id in page ",params.userid)
  const user = await getUserById(params.userid.toString())
  if (!user) {
    throw new Error('Failed to fetch data')
  }

  return <User user={user} />
}


export default Page