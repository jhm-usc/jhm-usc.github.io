import React from 'react';
import Layout from '@theme/Layout';
import Pictures from '@site/src/components/Pictures';
import styles from './index.module.css';


export default function Home(): JSX.Element {
    return (
      <Layout title={`Some neat stuff`}>
        <main>
            <Pictures />
        </main>
      </Layout>
    );
  }