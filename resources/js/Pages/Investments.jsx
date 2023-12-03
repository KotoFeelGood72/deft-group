import { Head } from '@inertiajs/react';
import InvestmentsLayout from '@/Layouts/InvestmentsLayout';


export default function Investments({category}) {
    return (
        <>
            <Head title='Investments'/>

            <InvestmentsLayout category={category} />
        </>
    );
}
