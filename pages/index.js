import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AvengersDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="row text-center middle">
          <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12">
            <img src="images/marvel-logo.png" width="200" height="60" alt="Marvel logo"></img>
            <h1>Welcome to AvengersDB!</h1>
            <p>
              <Link href="/search"><a>Start exploring your favorite superheroes -> </a></Link>
            </p>
          </div>
        </div>
        
      </main>
    </Layout>
  )
}
