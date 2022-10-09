import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import DevicesList from '@components/DeviceList'

const devices = [
  { title: "Vacuum Cleaner", status: "OK", slug: "vacuum-cleaner" },
  { title: "Oven", status: "OK", slug: "oven" },
  { title: "Coffee Machine", status: "WARNING", slug: "coffee-machine" },
  { title: "Washing Machine", status: "ERROR", slug: "washing-machine" },
]

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Miele Smart App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Your Appliances" />
        <DevicesList devices={devices} />
      </main>

      <Footer />
    </div>
  )
}
