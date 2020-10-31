import React from 'react';
import ReactJson from 'react-json-view'

import { useRequest } from 'umi';
import GetBusinessIntegratedAccounts from '@/services/hsbc';

const YourComponent: React.FC = () => {
  const { data, loading } = useRequest(() => {
    return GetBusinessIntegratedAccounts();
  });
  if (loading) {
    return <>Loading...</>;
  }
  return <ReactJson src={data} enableClipboard={false} displayDataTypes={false} />;
};

export default YourComponent;