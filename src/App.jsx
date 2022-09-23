import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {ThemeProvider} from 'react-jss';

import Theme from './themes/default';
// import {checkAuth} from './helpers/auth';
import store from './store';

import Navbar from './components/Navbar';
import Main from './pages/Main';
import Contacts from './pages/Contacts';

function App() {
    // const isAuth = checkAuth();
    const isAuth = true;
    
    return (
        <ThemeProvider theme={Theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar isAuth={isAuth}/>
                    <div>
                        <Routes>
                            {isAuth
                                ? (
                                    <>
                                        <Route index element={<Main/>}/>
                                        <Route path="/contacts" element={<Contacts/>}/>
                                        <Route path="*" element={<Navigate replace to="/"/>}/>
                                    </>
                                )
                                : (
                                    <>
                                        <Route path="/auth" element={<Auth/>}/>
                                        <Route path="*" element={<Navigate replace to="/auth"/>}/>
                                    </>
                                )}
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
