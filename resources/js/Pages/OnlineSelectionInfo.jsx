import { Head } from '@inertiajs/react';
import OnlineSelectionInfoLayout from '@/Layouts/OnlineSelectionInfoLayout';


export default function OnlineSelectionInfo({category}) {
    return (
        <>
            <Head title='Helpful'/>

            <OnlineSelectionInfoLayout category={category} />
        </>
    );
}
