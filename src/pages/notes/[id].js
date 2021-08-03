import { useRouter } from 'next/router'

export default function NoteDetail() {
  const router = useRouter() // get parameters

  console.log(router)

  const { id } = router.query // same name with the file

  return <div>Note Details {id}</div>
}

// dynamic routing
