import { useRouter } from 'next/router';
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import { WhiteLayout } from '../components/layouts/WhiteLayout';
import { ReactElement } from 'react';

const AboutPage = () => {

  const {asPath} = useRouter();
  return (
    <>
        <h1>About Page</h1>
          <h1 className={'title'}>
            Ir a <Link href="/" replace>index</Link>
          </h1>

          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages{asPath}.jsx</code>
          </p>

    </>
  )
}

export default AboutPage;

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <WhiteLayout>
        {page}
      </WhiteLayout>
    </MainLayout>
  )
}

