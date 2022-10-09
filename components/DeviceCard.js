import styles from './DeviceCard.module.css'
import Link from 'next/link'

export default function DeviceCard({ title, status, href }) {
  return (
    <>
      <section className={styles.device}>
        <Link href={href}><h2>{title}</h2></Link>
        <p>{status}</p>
      </section>
    </>
  )
}
