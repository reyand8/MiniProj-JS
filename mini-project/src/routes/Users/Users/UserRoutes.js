import React from 'react';
import {Route, Routes} from 'react-router-dom';
import UserList from './UserList';
import UserForm from './UserForm';

export default function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<UserList/>} />
            <Route path="/:id/edit" element={<UserForm/>}/>
        </Routes>
    );
}