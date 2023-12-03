import NewsLayout from '@/Layouts/NewsLayout';
import { Head } from '@inertiajs/react';


export default function News({news,category}) {
    return (
        <>
            <Head title='News'/>

            <NewsLayout news = {news}  category={category}/>
        </>
    );
}
