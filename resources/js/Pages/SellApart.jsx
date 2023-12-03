import { Head } from '@inertiajs/react';
import SellApartLayout from '@/Layouts/SellApartLayout';


export default function SellApart({category}) {
    return (
        <>
            <Head title='SellApart'/>

            <SellApartLayout  category={category}/>
        </>
    );
}
