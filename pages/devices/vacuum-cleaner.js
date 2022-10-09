import Link from 'next/link';

export default function device() {
  return (
    <>
      <p>Points: 350</p>
      <h1>Vacuum Cleaner</h1>
      <div>
        <p>Total Usage: 40 hours</p>
        <p>Status: OK</p>
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