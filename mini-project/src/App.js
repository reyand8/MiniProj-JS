import React from 'react';
import {Layout, Menu} from 'antd';
import {menu} from './menu.js';
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home/index';
import Counter from './routes/Counter/index';
import Quiz from './routes/Quiz';
import './App.css';
import './index.css';
import UserRoutes from './routes/Users/Users/UserRoutes';
import Gallery from './routes/Gallery/Gallery';

function App() {
    return (
        <Layout>
            <Layout.Header>
                <Menu mode="horizontal" items={menu}/>
            </Layout.Header>
            <Layout>
                <Layout.Content className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/counter/" element={<Counter />}/>
                        <Route path="/quiz/" element={<Quiz />}/>
                        <Route path="/users/*" element={<UserRoutes/>}/>
                        <Route path="/gallery/" element={<Gallery/>}/>
                        {/*<Route path='/*' element={<NotFound/>}/>*/}
                    </Routes>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default App;
