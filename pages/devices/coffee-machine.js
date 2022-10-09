import Link from 'next/link';
import DigitalPassport from '@components/DigitalPassport'
import DeviceStatus from '@components/DeviceStatus';

export default function device() {
  return (
    <div className='page-container'>
      <p>Points: 350</p>
      <h1>Coffee Machine</h1>
      <DeviceStatus status="WARNING" hoursUsed={150} tiny={false} />
      <div>
        <select>
          <option>Programs</option>
          <option>Caffe Latte</option>
          <option>Coffee</option>
          <option>Black tea</option>
          <option>Latte macchiato</option>
          <option>Ristretto</option>
          <option>Caffe Americano</option>
          <option>Espresso</option>
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