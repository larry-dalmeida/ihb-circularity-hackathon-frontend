import Link from 'next/link';
import DigitalPassport from '@components/DigitalPassport'
import DeviceStatus from '@components/DeviceStatus';
import CareRepair from '@components/CareRepair';

export default function device() {
  return (
    <div className='page-container'>
      <p>Points: 350</p>
      <h1>Coffee Machine</h1>
      <p>Model: CM332 Bean Maker</p>
      <img src="https://www.miele.de/pmedia/06/Z13/20000190313-000-00_20000190313.jpg" />
      <DeviceStatus status="WARNING" hoursUsed={150} tiny={false} />
      <div className='select-box'>
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
      <CareRepair />
      <DigitalPassport />
    </div>
  );
}