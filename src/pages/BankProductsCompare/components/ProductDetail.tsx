import React, { useState } from 'react';
import ReactJson from 'react-json-view';

import { Card, Typography, Button } from 'antd';
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
        return res.data[0].Brand;
      },
    },
  );
  if (loading) {
    return <>Loading...</>;
  }

  const CodePreview: React.FC<{}> = ({ children }) => (
    <pre>
      <code>
        <Typography.Text copyable>{children}</Typography.Text>
      </code>
    </pre>
  );

  const ComponentPreview: React.FC = () => {
    const [currentProduct, setCurrentProduct] = useState(<CodePreview>1</CodePreview>);

    return (
      <Card>
        <p> some testing here</p>
        <Button onClick={() => setCurrentProduct(<CodePreview>1</CodePreview>)}>btn1</Button>
        <Button onClick={() => setCurrentProduct(<CodePreview>2</CodePreview>)}>btn2</Button>
        <Button onClick={() => setCurrentProduct(<HsbcProductDetail />)}>btn3</Button>
        {currentProduct}
      </Card>
    );
  };

  function renderingFn() {
    switch (props.type) {
      case 'hsbc,allInOne':
        return <ComponentPreview />;
      case 'hengsheng,saving':
        return <HsbcProductDetail />;
      case 'hengsheng,current':
        return <HsbcProductDetail />;
      default:
        return <HsbcProductDetail />;
    }
  }

  return (
    <>
      {/* <HsbcProductDetail data={data} /> */}
      {renderingFn()}
      <ReactJson src={data} enableClipboard={false} displayDataTypes={false} />
    </>
  );
};

export default BankProductsCompare;
