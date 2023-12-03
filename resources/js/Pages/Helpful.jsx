import { Head } from '@inertiajs/react';
import HelpfulLayout from '@/Layouts/HelpfulLayout';


export default function Helpful({category}) {
    return (
        <>
            <Head title='Helpful'/>

            <HelpfulLayout category={category} />
        </>
    );
}
