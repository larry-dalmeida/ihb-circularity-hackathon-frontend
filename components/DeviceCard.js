import styles from './DeviceCard.module.css'
import Link from 'next/link'
import DeviceStatus from '@components/DeviceStatus';

export default function DeviceCard({ title, status, href, hoursUsed, failureDetected }) {
  return (
    <>
      <section className={styles.deviceCard}>
        <Link href={href}><h2>{title}</h2></Link>
        <DeviceStatus status={status} hoursUsed={hoursUsed} failureDetected={failureDetected} />
      </section>
    </>
  )
}
