import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ActiveNotesPage } from './pages/activeNotes/ActiveNotesPage';
import { ArchivedNotesPage } from './pages/archivedNotes/ArchivedNotesPage';
import { SummaryPage } from './pages/summary/SummaryPage';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="active-notes" element={<ActiveNotesPage />} />
        <Route path="archived-notes" element={<ArchivedNotesPage />} />
        <Route path="summary" element={<SummaryPage />} />
        <Route path="*" element={<Navigate to="/active-notes" replace />} />
      </Routes>
    </Router>
  )
}

export default App;
