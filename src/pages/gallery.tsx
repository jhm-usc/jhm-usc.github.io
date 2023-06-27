import React from "react";
import Layout from '@theme/Layout';
import Gallery from "../components/Gallery/Gallery";

export default function GalleryPage() {
    return (
        <Layout title={`Some neat stuff`}>
            <Gallery />
        </Layout>
    )
}