import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './LandingPage/Home';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';
import Login from './Components/Login';
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard';
import Transfers from './Pages/common/Transfers'



function App() {
  return (
    <Router>
      <Routes>
      
  <Route path="/" element={<Home />} />

  <Route path="/about" element={<AboutUs />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={
          <Layout>
            <>
            <Dashboard/>
            </>
          </Layout>
        } />
          <Route path="/transfers" element={
          <Layout>
            <>
            <Transfers/>
            </>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
