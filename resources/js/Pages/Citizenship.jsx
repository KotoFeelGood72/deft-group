import { Head } from '@inertiajs/react';
import CitizenshipLayout from '@/Layouts/CitizenshipLayout';


export default function Citizenship({category}) {
    return (
        <>
            <Head title='Citizenship'/>

            <CitizenshipLayout category={category} />
        </>
    );
}
