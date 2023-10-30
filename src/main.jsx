import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from './components/Create/Create.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import CrewView from './components/Gallery/CrewView.jsx';
import Sidebar from './components/Sidebar.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Sidebar />}>
        <Route index={true} path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route index={true} path=":id" element={<CrewView />} />
        <Route path=":id/edit" element={<Create />} />
       </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
