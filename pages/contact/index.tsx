import Link from 'next/link';
import { ReactElement } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import { WhiteLayout } from '../../components/layouts/WhiteLayout';

const index = () => {
  return (
    <>
      <h1>Contact Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/" replace>index</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact/index.jsx</code>
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

