import Link from 'next/link'
import DeviceCard from '@components/DeviceCard'

function DeviceList({ devices }) {
    return (
        <ul>
            {devices.map((device) => (
                <li key={device.id}>
                    <DeviceCard title={device.title} status={device.status} href={`/devices/${encodeURIComponent(device.slug)}`}/>
                </li>
            ))}
        </ul>
    )
}

export default DeviceList