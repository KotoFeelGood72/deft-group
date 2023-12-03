import CategoryLayout from '@/Layouts/CategoryLayout';
import { Head } from '@inertiajs/react';


export default function Category({category_aparts,category_title,category}) {
    return (
        <>
            <Head title={category_title}/>

            <CategoryLayout category={category} category_aparts={category_aparts} category_title = {category_title} />
        </>
    );
}
