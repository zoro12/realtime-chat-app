import Button from "@/components/ui/Button"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

interface pageProps {}

const page = async ({}) => {
  const session = getServerSession(authOptions)

  return <pre>{JSON.stringify(session)}</pre>
}

export default page
