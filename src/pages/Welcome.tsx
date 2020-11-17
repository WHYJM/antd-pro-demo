import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';
import { Card, Alert, Typography, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import HsbcProductDetail from '@/pages/BankProductsCompare/components/HsbcProductDetail';
import styles from './Welcome.less';

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
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

function onclick() {
  history.push('/bank');
}

export default (): React.ReactNode => (
  <PageContainer>
    <Card>
      <Alert
        message="更快更强的重型组件，已经发布。"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        高级表格{' '}
        <a href="https://protable.ant.design/" rel="noopener noreferrer" target="__blank">
          欢迎使用
        </a>
      </Typography.Text>
      <CodePreview>yarn add @ant-design/pro-table</CodePreview>
      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        高级布局{' '}
        <a href="https://prolayout.ant.design/" rel="noopener noreferrer" target="__blank">
          欢迎使用
        </a>
      </Typography.Text>
      <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      <Button type="primary" icon={<PoweroffOutlined />} onClick={onclick}>
        Go to Bank!
      </Button>
    </Card>
    <ComponentPreview />
  </PageContainer>
);
