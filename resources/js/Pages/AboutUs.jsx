import { Head } from '@inertiajs/react';
import AboutUsLayout from '@/Layouts/AboutUsLayout';


export default function About({category}) {
    return (
        <>
            <Head title='About'/>
            <AboutUsLayout category={category}/>
        </>
    )
}
