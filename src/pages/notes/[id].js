import { useRouter } from 'next/router'
import Link from 'next/link'
export default function NoteDetail() {
  const router = useRouter() // get parameters

  console.log(router)

  const { id } = router.query // same name with the file

  return (
    <div>
      <h1>Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  )
}

// dynamic routing
