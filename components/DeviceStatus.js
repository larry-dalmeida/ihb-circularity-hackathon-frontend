import Link from "next/link";

export default function DeviceStatus({ hoursUsed, status, failureDetected, serviceMessage = 'Dustbin needs emptying', tiny = true }) {
    const showServicingNeededMessage = status === "WARNING";
    let icon;
    switch (status) {
        case 'OK':
            icon = '🟢';
            break;
        case 'WARNING':
            icon = '🟡';
            break;
        case 'ERROR':
            icon = '🔴';
            break;
        default:
            icon = '❓'

    }
    const statusMessage = `${icon} ${status}`
    return (
        <section>
            <p>Total Usage: {hoursUsed} hours</p>
            <p>{statusMessage}</p>
            {!tiny && <Messages showServicingNeededMessage={showServicingNeededMessage} serviceMessage={serviceMessage} failureDetected={failureDetected} />}
        </section>
    );
}

const Messages = ({ showServicingNeededMessage, failureDetected, serviceMessage }) => (
    <>
        {showServicingNeededMessage && <p>{serviceMessage}</p>}
        {!failureDetected && <p><Link href="/posts/troubleshoot">Having trouble?</Link></p>}
        {failureDetected && <p>Our sensors have detected a failure! <Link href="/posts/solution-options">Here are the solutions we can offer</Link></p>}
    </>
)