import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import OrganizeEvent from './pages/organize/OrganizeEvent.jsx';
import SearchEvents from './pages/searchEvents/SearchEvents.jsx';
import MyEvents from './pages/myEvents/MyEvents.jsx';
import EventDetails from './pages/eventDetails/EventDetails.jsx';
import OtherEvents from './pages/otherEvents/OtherEvents.jsx';
import Places from './pages/places/Places.jsx';
import News from './pages/news/News.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organize" element={<OrganizeEvent />} />
        <Route path="/searchEvents" element={<SearchEvents />} />
        <Route path="/myEvents" element={<MyEvents />} />
        <Route path="/otherEvents" element={<EventDetails />} />
        <Route path="/eventDetails/:id" element={<OtherEvents />} />
        <Route path="/places" element={<Places />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
