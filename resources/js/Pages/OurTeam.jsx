import { Head } from '@inertiajs/react';
import OurTeamLayout from '@/Layouts/OurTeamLayout';


export default function OurTeam({category}) {
    return (
        <>
            <Head title='OurTeam'/>

            <OurTeamLayout category={category} />
        </>
    );
}
