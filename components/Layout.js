import Head from "next/head"
import Link from 'next/Link'
import Image from 'next/image'


export default function Layout({ children, page }) {
  return (

    <div className="bg-indigo-100 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1 className="text-4xl mt-6 mb-3">CRYPTO MONAIE</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-5">
          <Link href="/">
            <button className="bg-green-100 p-3 m-2 rounded-3xl hover:shadow-md
                   border-2 border-blue-300">
              Accueil
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-green-100 p-4 m-2 rounded-3xl hover:shadow-md
                   border-2 border-blue-300">
              À propos
            </button>
          </Link>
        </div>
        <div className="pt-7">
          <Image
            src="/btc.jpg"
            alt="header-pic"
            width="400"
            height="25"
            className="rounded-3xl object-cover"
            quality={100} />
        </div>
      </header>
      <main className="pt-4 mx-20">{children}</main>

      <footer className="p-2">
        <div className="">
        <Image
          src="/btc.jpg"
          alt="footer-pic"
          width="1000"
          height="30"
          className="rounded-3xl object-cover"
          quality={100} />
          </div>
          <ul className="pt-10 pb-4 flex justify-around">
            <li>À propos</li>
            <li>Qui sommes-nous</li>
            <li>By Peter --2021--</li>
          </ul>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Labore minus aliquam perferendis, nemo provident porro quaerat 
            aperiam similique dolorem vero.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Labore minus aliquam perferendis, nemo provident porro quaerat 
            aperiam similique dolorem vero</p>
      </footer>
      <style jsx>{`
        p {
          color: grey;
        }
      `}</style>
    </div>

  )
}