
import Link from 'next/link';
import { ReactElement } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { WhiteLayout } from '../components/layouts/WhiteLayout';

const index = () => {

  console.log('Home');
  return (
    <>
      <h1>Home Page</h1>

      <h1 className='title'>
      {/* Ir a <a href="/about">About</a> */}
      Ir a <Link href={'/about'} replace>About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>{`pages/index.jsx`}</code>
      </p>
    </>
  )
}

export default index;

index.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <WhiteLayout>
        {page}
      </WhiteLayout>
    </MainLayout>
  )
}
