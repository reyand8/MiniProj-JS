import {Route, Routes} from "react-router-dom";
import UserList from "./UserList";


export default function UserRoutes() {
    return (
        <Routes>
            <Route path='/' element={<UserList/>}></Route>
            {/*<Route></Route>*/}
            {/*<Route></Route>*/}
        </Routes>
    )
}