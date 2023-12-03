import { Head } from '@inertiajs/react';

import VacanciesLayout from '@/Layouts/VacanciesLayout';


export default function Vacancies({vacancy,category}) {



    return (
        <>
            <Head title='Vacancies'/>
            
            <VacanciesLayout vacancy = {vacancy} category={category}/>
        </>
    );
}
