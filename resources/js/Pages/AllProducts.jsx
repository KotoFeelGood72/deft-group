import AllProductsLayout from '@/Layouts/AllProductsLayout';
import { Head } from '@inertiajs/react';


export default function AllProduct({apartments,category}) {
    return (
        <>
            <Head title= 'Все продукты'/>

            <AllProductsLayout category={category} apartments={apartments}  />
        </>
    );
}
