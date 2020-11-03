import React, { useState, useCallback } from 'react';
import { Cascader } from 'antd';
import ProductDetail from '@/pages/BankProductsCompare/components/ProductDetail';

const options = [
  {
    value: 'hsbc',
    label: 'HSBC Account',
    children: [
      {
        value: 'business',
        label: 'Business',
      },
      {
        value: 'allInOne',
        label: 'All in One',
      },
    ],
  },
  {
    value: 'hengsheng',
    label: 'Heng Sheng Account',
    children: [
      {
        value: 'saving',
        label: 'Saving',
      },
      {
        value: 'current',
        label: 'Current',
      },
    ],
  },
];

const BankProductsCompare: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState('');

  const renderProductDetail = useCallback(() => {
    return <ProductDetail key={currentProduct} type={currentProduct} default="hsbc,business" />;
  }, [currentProduct]);

  return (
    <>
      <Cascader
        options={options}
        defaultValue={['hsbc', 'business']}
        style={{ width: '100%' }}
        onChange={(value) => setCurrentProduct(value.toString())}
      />
      {renderProductDetail()}
    </>
  );
};

export default BankProductsCompare;
