import Link from 'next/link'

export default function DigitalPassport() {
  return (
    <section>
        <h2>Digital Pass</h2>
        <ul>
          <li><Link href="/posts/digital-history">Digital History</Link></li>
          <li><Link href="/posts/data-hierarchy">Data Hierarchy</Link></li>
          <li><Link href="/posts/sustainability">Sustainability</Link></li>
        </ul>
      </section>
  )
}
