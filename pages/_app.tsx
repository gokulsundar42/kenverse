import { ApolloProvider } from "@apollo/client";
import { RootStoreProvider } from "@mobx";
import { initializeApollo } from "@services/graphql";
import "@styles/global.scss";
import "antd/dist/antd.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    return (
        <ApolloProvider client={apolloClient}>
            <RootStoreProvider>
                <Component {...pageProps} />
            </RootStoreProvider>
        </ApolloProvider>
    );
}

export default MyApp;
