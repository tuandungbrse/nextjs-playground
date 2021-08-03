import { useRouter } from 'next/router'

export default function CatchAll() {
  const router = useRouter() // get parameters

  console.log(router)

  const { params } = router.query // same name with the file
  console.log(params)

  return <div>Note Details {params}</div>
}

// dynamic routing
