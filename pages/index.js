import Head from 'next/head'
import Header from '@components/Header'
import DevicesList from '@components/DeviceList'

const devices = [
  { title: "Coffee Machine", status: "WARNING", slug: "coffee-machine", hoursUsed: 150 },
  { title: "Washing Machine", status: "ERROR", slug: "washing-machine", hoursUsed: 600 },
  { title: "Dryer", status: "OK", slug: "dryer", hoursUsed: 30 },
  { title: "Vacuum Cleaner", status: "OK", slug: "vacuum-cleaner", hoursUsed: 50 },
  { title: "Oven", status: "OK", slug: "oven", hoursUsed: 200 }
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
    </div>
  )
}
