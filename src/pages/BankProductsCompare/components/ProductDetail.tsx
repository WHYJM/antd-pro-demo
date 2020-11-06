import React from 'react';
import ReactJson from 'react-json-view';

import { useRequest } from 'umi';
import hsbcApi from '@/services/hsbc';
import hengshengApi from '@/services/hengsheng';
import HsbcProductDetail from '@/pages/BankProductsCompare/components/HsbcProductDetail';

export interface ProductProps {
  type?: string;
  default?: string;
}

const BankProductsCompare: React.FC<ProductProps> = (props: any) => {
  const { data, loading } = useRequest<any>(
    () => {
      switch (props.type) {
        case 'hsbc,allInOne':
          return hsbcApi.GetAllInOneAccount();
        case 'hengsheng,saving':
          return hengshengApi.GetCurrentAccount();
        case 'hengsheng,current':
          return hengshengApi.GetSavingAccount();
        default:
          return hsbcApi.GetBusinessIntegratedAccounts();
      }
    },
    {
      formatResult: (res) => {
        return res.data[0];
      },
    },
  );
  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <HsbcProductDetail data={data} />
      <ReactJson src={data} enableClipboard={false} displayDataTypes={false} />
    </>
  );
};

export default BankProductsCompare;
