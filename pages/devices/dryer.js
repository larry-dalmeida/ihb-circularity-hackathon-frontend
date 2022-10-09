import Link from 'next/link';
import DigitalPassport from '@components/DigitalPassport';
import DeviceStatus from '@components/DeviceStatus';
import CareRepair from '@components/CareRepair';

export default function device() {
  return (
    <div className='page-container'>
      <p>Points: 350</p>
      <h1>Dryer</h1>
      <p>Model: DRY One Active</p>
      <img src="https://www.miele.de/pmedia/30/Z11/20000186967-000-00_20000186967.png" />
      <DeviceStatus status="OK" hoursUsed={30} failureDetected={false} tiny={false}/>
      <div className='select-box'>
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
      <CareRepair />
      <DigitalPassport />
    </div>
  );
}