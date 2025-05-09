import Home from './components/Home';
import Person from './components/Person';
import AddPerson from './components/AddPerson';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/person/:id" element={<Person />} />
      <Route path="/add" element={<AddPerson />} />
    </Routes>
  );
}
