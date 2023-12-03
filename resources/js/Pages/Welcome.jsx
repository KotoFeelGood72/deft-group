import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Welcome({category,apartments}) {
    return (
        <>
            <Head title="Home" />
            <MainLayout category = {category} apartments ={apartments} />
        </>
    );
}
