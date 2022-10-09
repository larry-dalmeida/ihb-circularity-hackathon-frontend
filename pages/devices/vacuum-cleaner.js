import Link from 'next/link';
import DigitalPassport from '@components/DigitalPassport';
import DeviceStatus from '@components/DeviceStatus';
import CareRepair from '@components/CareRepair';

export default function device() {
  return (
    <div className='page-container'>
      <p>Points: 350</p>
      <h1>Vacuum Cleaner</h1>
      <p>Model: VC012 Smart Clean</p>
      <img src="https://www.miele.de/pmedia/30/Z11/20000137065-000-00_20000137065.png" />
      <DeviceStatus status="OK" hoursUsed={50} tiny={false} />
      <CareRepair />
      <DigitalPassport />
    </div>
  );
}