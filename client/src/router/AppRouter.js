import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddLinkPage from '../pages/AddLinkPage';
import ListPage from '../pages/ListPage';
import MainPage from '../pages/MainPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search-results' element={<ListPage />} />
        <Route path='/add-link' element={<AddLinkPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
