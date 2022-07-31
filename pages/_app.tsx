import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { apolloClient } from '../graphql';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Layout from '../components/Layout';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import '../localization/i18n';
import { useEffect, useState } from 'react';
import { Button, ConfigProvider } from 'antd';

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <Provider store={store}>
      <ConfigProvider direction={lang === 'ar' ? 'rtl' : 'ltr'}>
        <ApolloProvider client={apolloClient}>
          <Layout lang={lang} setLang={setLang}>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
