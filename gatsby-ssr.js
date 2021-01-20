import React from "react";
import AppContainer from "./src/components/app-container";
import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({element}) => (
    <AppContainer>{element}</AppContainer>
);