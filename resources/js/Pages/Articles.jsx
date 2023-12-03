import ArticlesLayout from '@/Layouts/ArticlesLayout';
import { Head } from '@inertiajs/react';


export default function Articles({category}) {
    return (
        <>
            <Head title='Articles'/>

            <ArticlesLayout category = {category}/>
        </>
    );
}
