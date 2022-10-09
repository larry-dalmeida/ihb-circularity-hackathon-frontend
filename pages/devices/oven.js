import Link from 'next/link';
import DigitalPassport from '@components/DigitalPassport';
import DeviceStatus from '@components/DeviceStatus';


export default function device() {
  return (
    <div className='page-container'>
      <p>Points: 350</p>
      <h1>Oven</h1>
      <DeviceStatus status="OK" hoursUsed={200} tiny={false} />
      <div>
        <select>
        <option>Programs</option>
          <option>Auto roast</option>
          <option>Conventional heat</option>
          <option>Eco fan heat</option>
          <option>Fan grill</option>
          <option>Fan plus</option>
          <option>Grill</option>
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