import type { AppProps } from "next/app";
import styled from "styled-components";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import setupMSW from "../api/setup";
import Header from "../components/Header";
import { UserProvider } from "../contexts/userContext";
import GlobalStyle from "../styles/GlobalStyle";

const queryClient = new QueryClient();

setupMSW();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <GlobalStyle />
        <S.Background />
        <S.Content>
          <Header />
          <Component {...pageProps} />
        </S.Content>
      </UserProvider>
    </QueryClientProvider>
  );
}

const S = {
  Background: styled.div`
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-color: #f0f0f5;
  `,

  Content: styled.div`
    width: 420px;
    min-height: 100%;
    margin: 0 auto;
    background-color: #fff;
  `,
};

export default MyApp;
