import Link from 'next/link';

export default function device() {
  return (
    <>
      <p>Points: 350</p>
      <h1>Washing Machine</h1>
      <div>
          <p>Total Usage: 600 hours</p>
          <p>Status: Error</p>
        </div>
      <div>
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
      <ul>
        <li><Link href="/posts/care-instructions">Care Instructions</Link></li>
        <li><Link href="/posts/manual">Manual</Link></li>
        <li><Link href="/posts/faq">FAQ</Link></li>
        <li><Link href="/posts/troubleshoot">Troubleshoot</Link></li>
      </ul>

      <section>
        <h2>Digital Pass</h2>
        <ul>
        <li><Link href="/posts/history">Digital History</Link></li>
        <li><Link href="/posts/hierarchy">Data Hierarchy</Link></li>
        <li><Link href="/posts/composition">Material Composition</Link></li>
        <li><Link href="/posts/sustainability">Sustainability</Link></li>
        </ul>
      </section>
    </>
  );
}