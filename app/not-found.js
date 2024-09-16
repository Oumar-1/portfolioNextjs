import Link from 'next/link';
import SuperLink from './components/SuperLink';

export default function Custom404() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='mb-4 text-4xl font-bold'>404 - Page Not Found</h1>
      <p className='mb-4'>Oops! The page you're looking for doesn't exist.</p>
      <SuperLink href='/' className='px-8 py-1 text-2xl'>
        HOME
      </SuperLink>
    </div>
  );
}
