import Link from 'next/link'

export default function Notes() {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }))

  return (
    <div>
      <h1>Notes</h1>

      {notes.map((note) => (
        <div key={note.id}>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

// create a new route by creating a folder
