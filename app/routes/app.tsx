import type {HeadersFunction, LoaderFunctionArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import {Link, Outlet, useLoaderData, useRouteError} from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import {boundary} from "@shopify/shopify-app-remix/server";
import {AppProvider} from "@shopify/shopify-app-remix/react";
import {authenticate} from "~/shopify.server";
import {Routes} from "~/constants/routes";
import {useEffect, useState} from "react";
import {Provider} from "@shopify/app-bridge-react";

export const links = () => [{rel: "stylesheet", href: polarisStyles}];

export const loader = async ({request}: LoaderFunctionArgs) => {
    await authenticate.admin(request);

    return json({apiKey: process.env.SHOPIFY_API_KEY || ""});
};

export default function App() {
    const {apiKey} = useLoaderData<typeof loader>();
    const [appProviderLoad, setAppProviderLoad] = useState(false);

    useEffect(() => {
        setAppProviderLoad(true);
    }, []);

    return (
        <AppProvider isEmbeddedApp apiKey={apiKey}>
            {appProviderLoad && (
                <Provider config={shopify.config}>
                    <ui-nav-menu>
                        <Link to={Routes.ROOT} rel="home">
                            Home
                        </Link>
                        <Link to={Routes.COMPARISON}>Comparison</Link>
                    </ui-nav-menu>
                    <Outlet/>
                </Provider>
            )}
        </AppProvider>
    );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
    return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
    return boundary.headers(headersArgs);
};
