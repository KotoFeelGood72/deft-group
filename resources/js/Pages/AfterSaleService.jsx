import { Head } from '@inertiajs/react';
import AfterSaleServiceLayout from '@/Layouts/AfterSaleServiceLayout';


export default function OnlineSelectionInfo({category}) {
    return (
        <>
            <Head title='Helpful'/>

            <AfterSaleServiceLayout category={category} />
        </>
    );
}
