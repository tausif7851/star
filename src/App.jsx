import React from 'react';
import Sidebar from './SideBar'; // Import the Sidebar component
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Charts from './Charts';
import Section from './Section';

const App = () => {
  return (
    <div>

      {/* <ThemeProvider>
        <Sidebar />

      </ThemeProvider> */}


      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route path="/" element={<Section />} />
              <Route path="/charts" element={<Charts />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
