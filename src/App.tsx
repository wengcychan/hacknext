import EventPage from './components/EventPage'
import BusinessPage from './components/BusinessPage'
import NoPage from './components/NoPage'
import HomePage from './components/HomePage'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Router basename="/hacknext">
        <Navigation />
        <main>
          <section className="container">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/event" element={<EventPage/>} />
              <Route path="business" element={<BusinessPage />} />
              <Route path="*" element={<NoPage />}/>
            </Routes>
          </section>
        </main>
      </Router>
    </div>
  )
}

export default App
