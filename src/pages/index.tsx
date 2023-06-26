import React from 'react';
import Layout from '@theme/Layout';
import Pictures from '@site/src/components/Pictures';
import styles from './index.module.css';


export default function Home(): JSX.Element {
    return (
      <Layout title={`Some neat stuff`}>
        <main>
            <iframe 
              width="0"
              height="0" 
              src="https://www.youtube.com/embed/25BkVBgFD9Y?autoplay=1&mute=0" 
              title="YouTube video player" 
              allow="autoplay; encrypted-media; gyroscope;" 
              ></iframe>
            <Pictures />
        </main>
      </Layout>
    );
  }