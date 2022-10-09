import Link from 'next/link';
import DigitalPassport from '@components/DigitalPassport';
import DeviceStatus from '@components/DeviceStatus';

export default function device() {
  return (
    <div className='page-container'>
      <p>Points: 350</p>
      <h1>Washing Machine</h1>
      <p>Model: WCA030 WCS Active</p>
      <img src="https://www.miele.de/pmedia/30/Z11/20000185614-000-00_20000185614.png" />
      <DeviceStatus status="ERROR" hoursUsed={600} failureDetected={true} tiny={false}/>
      <div>
        <select>
          <option>Programs</option>
          <option>Cottons</option>
          <option>Dark garments/Denim</option>
          <option>ECO 40-60</option>
          <option>Express 20</option>
          <option>Minimum iron</option>
          <option>Proofing</option>
          <option>Shirts</option>
          <option>Woollens</option>
        </select>
      </div>
      <ul>
        <li><Link href="/posts/care-instructions">Care Instructions</Link></li>
        <li><Link href="/posts/manual">Manual</Link></li>
        <li><Link href="/posts/faq">FAQ</Link></li>
        <li><Link href="/posts/troubleshoot">Troubleshoot</Link></li>
      </ul>

      <DigitalPassport />
    </div>
  );
}