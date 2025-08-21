import { Outlet } from "react-router-dom"

import { Headers } from "../UI/Header"
import { Footers } from "../UI/Footer"

export const AppLayout = () => {
    return (
    <>
    <Headers/> 
     <Outlet/> {/*this will render the matched child route*/}
    <Footers/>
    </>
    )
}