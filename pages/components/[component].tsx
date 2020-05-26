import React from 'react';
import { useRouter } from 'next/router';

import TitleBar from '../../components/TitleBar';

const Component: React.FC = () => {
  const router = useRouter();
  const { component } = router.query;
  return (
    <>
      <TitleBar />
      <div>{component}</div>
    </>
  );
};

export default Component;
