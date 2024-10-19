'use client'

import store from "@/lib/store";
import MainHeader from "./MainHeader";
import { Provider } from "react-redux";

export default function Main({ children }) {

    return (
        <>
            <Provider store={store}>
                <div className="flex flex-col h-screen">
                    <MainHeader />
                    <div className="grow bg-gradient-to-r from-[#eab308] to-[#1faed942]">
                        {children}
                    </div>
                </div>
            </Provider>
        </>
    )
}