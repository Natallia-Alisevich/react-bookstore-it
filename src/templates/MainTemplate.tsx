// import { Footer, Header } from "components"
import React from "react"
import { Outlet } from "react-router-dom"

export const MainTemplate = () => {
    return (
        <div>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}
