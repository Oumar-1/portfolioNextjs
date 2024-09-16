import React from 'react';
import Image from 'next/image';

const showcaseItems = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of project 1',
    imageUrl: '/project1.jpg',
    previewUrl: '',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of project 2',
    imageUrl: '/project2.jpg',

    previewUrl: '',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of project 3',
    imageUrl: '/project3.jpg',
    previewUrl: '',
  },
];

export default function Showcase() {
  return (
    <main className='px-4 py-20 blur-md'>
      <h1 className='mb-12 text-center text-3xl font-bold'>My Showcase</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {showcaseItems.map((item) => (
          <div
            key={item.id}
            className='bg-white overflow-hidden rounded-lg shadow-md'
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={300}
              className='h-48 w-full object-cover'
            />
            <div className='p-4'>
              <h2 className='mb-2 text-xl font-semibold'>{item.title}</h2>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
