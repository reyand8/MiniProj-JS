import React from 'react';
import {Route, Routes} from 'react-router-dom';
import UserList from './UserList';
import UserForm from './UserForm';
import NotFound from './NotFound';

export default function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<UserList/>} />
            <Route path="/:id/edit" element={<UserForm/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}