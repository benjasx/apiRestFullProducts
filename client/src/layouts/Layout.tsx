import { Outlet } from "react-router-dom"


export default function layout() {
  return (
    <>
        <div>
            Desde Layout
        </div>
        <Outlet/>
    </>
  )
}
