import Link from 'next/link'

export default function UseLess() {
  return (
    <main>
      <h1> Name speaking: Hello All</h1>
      <ul>
        <li>
          <Link href="/greeting/dung">
            <a>Dung</a>
          </Link>
        </li>
        <li>
          <Link href="/greeting/khai">
            <a>Khai</a>
          </Link>
        </li>
      </ul>
    </main>
  )
}
