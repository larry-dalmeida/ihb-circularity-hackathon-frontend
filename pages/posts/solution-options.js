import React, { useState } from 'react';

export default function SolutionOptions() {
    const [showMap, setShowMap] = useState(false);

    const handleMapClick = () => setShowMap(!showMap);

    return (
        <div className='page-container'>
            <h1>Motor Failure</h1>
            <p>Our sensors have detected that the motor of your appliance is malfunctioning.</p>
            <div>
                <ul>
                    <li>
                        <button onClick={handleMapClick}>Find the nearest service center or repair cafe</button>
                    </li>
                    <li>
                        <button>Resell appliance to Miele for 100 points</button>
                    </li>
                    <li>
                        <button>Resell parts via Miele for 200 points</button>
                    </li>
                    <li>
                        <button>Call a Technician</button>
                    </li>
                </ul>
                {showMap && <div className='map'>
                    <div className='img-container'><img src="/map.png" /></div>
                    <ul>
                        <li>
                            <h4>Neumann Hausgeräte Service</h4>
                            <p>Warschauer Str. 80, 10243 Berlin</p>
                            <p>🟡 Closes Soon | 5 minutes away</p>
                        </li>
                        <li>
                            <h4>Express Waschmaschinen Reparatur Berlin</h4>
                            <p>Landsberger Allee 89, 10407 Berlin</p>
                            <p>🟢 Open | 9 minutes away</p>
                        </li>
                        <li>
                            <h4>Ruder Küchen und Hausgeräte GmbH</h4>
                            <p>Pfarrstraße 124, 10317 Berlin</p>
                            <p>🟢 Open | 11 minutes away</p>
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}