export default function DataHierarchy() {
    return (
        <div className='page-container'>
            <h1>Data Hierarchy</h1>
            <ol>
                <li>
                    <section>
                        <h1>Washing Machine</h1>
                        <p>Model: WCA030 WCS Active</p>
                        <img src="https://www.miele.de/pmedia/30/Z11/20000185614-000-00_20000185614.png" />
                    </section>
                    <section>
                        <h2>Components</h2>
                        <ol className="components-list">
                            <li>
                                <section>
                                    <h3>Console</h3>
                                    <p>Model: CS-123</p>
                                    <p>Available for replacement</p>
                                    <p>Can be repurposed</p>
                                </section>
                                <section className="material-composition-list">
                                    <h4>Material Composition</h4>
                                    <ul>
                                        <li>
                                            <p>Silicon 45%</p>
                                            <p>Non-recyclable</p>
                                        </li>
                                        <li>
                                            <p>Aluminuin 40%</p>
                                            <p>Recyclable</p>
                                        </li>
                                    </ul>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <h3>Water Pump</h3>
                                    <p>Model: WP-443</p>
                                    <p>Unavailable for replacement - no longer produced</p>
                                    <p>Can be repurposed</p>
                                </section>
                                <section className="material-composition-list">
                                    <h4>Material Composition</h4>
                                    <ul>
                                        <li>
                                            <p>Steel 32%</p>
                                            <p>Recyclable</p>
                                        </li>
                                        <li>
                                            <p>Rubber 50%</p>
                                            <p>Recyclable</p>
                                        </li>
                                    </ul>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <h3>Drain Hose</h3>
                                    <p>Model: DH-234</p>
                                    <p>Unavailable for replacement - no longer produced</p>
                                    <p>Can be repurposed</p>
                                </section>
                                <section className="material-composition-list">
                                    <h4>Material Composition</h4>
                                    <p>Unavailable</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <h3>Inlet Valve</h3>
                                    <p>Model: IV-456</p>
                                    <p>Available for replacement</p>
                                    <p>Can be repurposed</p>
                                </section>
                                <section className="material-composition-list">
                                    <h4>Material Composition</h4>
                                    <p>Unavailable</p>
                                </section>
                            </li>
                        </ol>
                    </section>
                </li>
            </ol>
        </div>
    )
}