import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import StartPage from './pages/StartPage';
import NewsList from './pages/NewsList';
import NewsItem from './pages/NewsItem';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>

        <Route path='private' element={<Navigate to='/private/news' />} />

        <Route index element={<StartPage />} />

        <Route
          path='private/news'
          element={<NewsList />}
        />

          <Route
            path='private/news/:id'
            element={<NewsItem />}
          />


        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
