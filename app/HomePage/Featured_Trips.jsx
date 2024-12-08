'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Container from '../componenets/container/Container';


export default function Featured_Trips() {
    const tours = [
        { name: 'Centipede Tour - Guided Arizona Desert Tour by ATV', location: 'Paris, France', rating: '4.8 (243)', days: '4', packagePrice: '$189.25', image: assets.f1 },
        { name: 'Molokini and Turtle Town Snorkeling Adventure Aboard', location: 'New York, USA', rating: '4.8 (243)', days: '4', packagePrice: '$225', image: assets.f2 },
        { name: 'Westminster Walking Tour & Westminster Abbey Entry', location: 'London, UK', rating: '4.8 (243)', days: '4', packagePrice: '$943', image: assets.f3 },
        { name: 'All Inclusive Ultimate Circle Island Day Tour with Lunch', location: 'New York, USA', rating: '4.8 (243)', days: '4', packagePrice: '$771', image: assets.f4 },
    ];

    return (
        <Container>
            <div className='flex justify-between items-center mt-10 mb-10'>
                <h1 className='text-2xl font-bold text-[#05073C]'>Featured Trips</h1>
                <p className='btn px-4 py-2 border hover:bg-[#05073C] hover:text-white border-[#E7E6E6] text-xs text-center'>By Travel Style</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {tours.map((tour, index) => (
                    <Card key={index} className='relative shadow-lg border border-[#E7E6E6] rounded-lg'>
                        {/* Card image with relative positioning */}
                        <div className='relative'>
                            <Image src={tour.image} alt={tour.name} className='h-48 w-full object-cover rounded-t-lg' />
                            <div className='absolute -bottom-4 right-2'>
                                <Image src={assets.circle} alt='circle' className='h-10 w-10 rounded-full border-4 bg-white border-white shadow-lg' />
                            </div>
                        </div>
                        <CardHeader className='p-4'>
                            <CardDescription className='text-xs ml-4 text-[#717171]'>{tour.location}</CardDescription>
                            <CardTitle className='text-base font-semibold text-[#05073C]'>{tour.name}</CardTitle>
                        </CardHeader>
                        <CardContent className='flex justify-center '>
                                <p className='text-sm text-[#05073C]'>{tour.rating}</p>
                        </CardContent>
                        <p className="divider border-[#E7E6E6] px-4 my-0"></p>
                        <CardFooter className='flex justify-between mt-4'>
                            <p className='text-sm text-[#05073C]'>{tour.days} days</p>
                            <p className='font-semibold text-[#05073C]'>
                                <span className='text-md mr-1 text-[#05073C]'>From</span> {tour.packagePrice}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Container>
    );
}
