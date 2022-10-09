import Link from 'next/link'
import DeviceCard from '@components/DeviceCard'

function DeviceList({ devices }) {
    return (
        <ul>
            {devices.map((device) => (
                <li key={device.id}>
                    <DeviceCard {...device} href={`/devices/${encodeURIComponent(device.slug)}`} />
                </li>
            ))}
        </ul>
    )
}

export default DeviceList