import { Head } from '@inertiajs/react';

import ReviewsLayout from '@/Layouts/ReviewsLayout';


export default function ReviewsPage({reviews,category}) {
    return (
        <>
            <Head title='Reviews'/>

            <ReviewsLayout reviews = {reviews} category={category}/>
        </>
    );
}
