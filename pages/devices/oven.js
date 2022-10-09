import Link from 'next/link';
import DigitalPassport from '@components/DigitalPassport';
import DeviceStatus from '@components/DeviceStatus';
import CareRepair from '@components/CareRepair';

export default function device() {
  return (
    <div className='page-container'>
      <p>Points: 350</p>
      <h1>Oven</h1>
      <p>Model: OV123 Intelligent Heating</p>
      <img src="https://www.miele.de/pmedia/30/Z11/20000150236-000-00_20000150236.png" />
      <DeviceStatus status="OK" hoursUsed={200} tiny={false} />
      <div>
        <select className='select-box'>
        <option>Programs</option>
          <option>Auto roast</option>
          <option>Conventional heat</option>
          <option>Eco fan heat</option>
          <option>Fan grill</option>
          <option>Fan plus</option>
          <option>Grill</option>
        </select>
      </div>
      <CareRepair />
      <DigitalPassport />
    </div>
  );
}