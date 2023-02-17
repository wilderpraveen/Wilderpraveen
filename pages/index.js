import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Wilder Praveen!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Wilder Praveen!" />
        <p className="description">
          Website in Development phase! 
          "coming shoon stay tuned"
        </p>
      </main>

      <Footer />
    </div>
  )
}
