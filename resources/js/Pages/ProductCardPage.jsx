import { Head } from '@inertiajs/react';
import CardPageLayout from '@/Layouts/CardPageLayout';

export default function Welcome(props) {
    return (
        <>
            <Head title="Product" />
            <CardPageLayout {...props}/>
        </>
    );
}
