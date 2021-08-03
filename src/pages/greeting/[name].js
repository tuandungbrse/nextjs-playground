import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

export default function Naming({ person }) {
  const router = useRouter()
  const { name } = router.query

  return (
    <div>
      <Head>
        <title>
          {person
            ? `${person.id} ${person.nickName || ''} ${person.name}`
            : name}
        </title>
      </Head>
      <span
        className={styles['cursor--p']}
        onClick={() => router.push('/greeting')}
      >
        Click here to go back
      </span>
      <h1>Hello {name}</h1>
      <div className={styles['img-container']}>
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            layout="fill"
            objectFit="contain"
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

// export async function getServerSideProps({params}) {
//   console.log(param);
//   const req = await fetch(`http://localhost:3000/dummy/${params.name}.json`);
//   console.log(req.json());
//   const data = await req.json();

//   return {
//     props: {person: data}
//   };
// }

export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/dummy/${params.name}.json`)
  const data = await req.json()

  return {
    props: { person: data }
  }
}

export async function getStaticPaths() {
  const req = await fetch(`http://localhost:3000/dummy/persons.json`)
  const data = await req.json()
  const paths = data.map((person) => ({
    params: { name: person }
  }))

  return {
    paths,
    fallback: false
  }
}
