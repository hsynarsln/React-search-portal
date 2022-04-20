import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from '../pages/ListPage';
import MainPage from '../pages/MainPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/search-results' element={<ListPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
