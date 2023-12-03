import { Head } from '@inertiajs/react';
import ContactLayout from '@/Layouts/ContactsLayout';


export default function Contacts({category}) {
    return (
        <>
            <Head title='About'/>
            <ContactLayout category = {category} />
        </>
    )
}
