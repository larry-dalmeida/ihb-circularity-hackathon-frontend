import Link from 'next/link'

export default function CareRepair() {
    return (
        <section className='link-list'>
            <h2>Care & Repair</h2>
            <ul>
                <li><Link href="/posts/care-instructions">Care Instructions</Link></li>
                <li><Link href="/posts/manual">Manual</Link></li>
                <li><Link href="/posts/faq">FAQ</Link></li>
                <li><Link href="/posts/troubleshoot">Troubleshoot</Link></li>
            </ul>
        </section>
    )
}