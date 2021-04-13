import React, { useState } from 'react';
import FullLoader from '../components/FullLoader';

const useFullLoader = (): any => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <FullLoader /> : null,
    () => setLoading(true),
    () => setLoading(false),
  ];
};

export default useFullLoader;
