import React from "react";
import { Content9 } from "./components/Header2";
import { Layout240 } from "./components/Features";

export default function Page() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <Content9 />
                <Layout240 />
            </div>
        </>
    );
}
