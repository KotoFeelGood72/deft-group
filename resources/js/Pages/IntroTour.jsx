import { Head } from '@inertiajs/react';
import IntroTourLayout from '@/Layouts/IntroTourLayout';


export default function IntroTour({category}) {
    return (
        <>
            <Head title='IntroTour'/>

            <IntroTourLayout category={category} />
        </>
    );
}
