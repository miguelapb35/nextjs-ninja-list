import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam eos, culpa provident pariatur deleniti, saepe quia similique, labore natus sunt dignissimos quaerat quae nostrum hic veniam enim qui facere!
        Optio harum, quibusdam perferendis tempore iure blanditiis. Voluptatibus optio adipisci dicta nemo saepe magni quaerat neque officiis quasi corrupti? Voluptate laudantium enim reprehenderit molestiae soluta neque, omnis blanditiis. Officia, tenetur!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam eos, culpa provident pariatur deleniti, saepe quia similique, labore natus sunt dignissimos quaerat quae nostrum hic veniam enim qui facere!
        Optio harum, quibusdam perferendis tempore iure blanditiis. Voluptatibus optio adipisci dicta nemo saepe magni quaerat neque officiis quasi corrupti? Voluptate laudantium enim reprehenderit molestiae soluta neque, omnis blanditiis. Officia, tenetur!</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
