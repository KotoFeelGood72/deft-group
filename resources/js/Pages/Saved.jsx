import SavedLayout from '@/Layouts/SavedLayout';
import { Head } from '@inertiajs/react';


export default function Search({category}) {
    return (
        <>
            <Head title='Saved'/>

            <SavedLayout category={category} />
        </>
    );
}
