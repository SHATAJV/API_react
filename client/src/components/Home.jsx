import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/people')
      .then(response => setPeople(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Liste des personnes</h1>
      <Link to="/add">Ajouter une personne</Link>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <Link to={`/person/${person.id}`}>
              {person.first_name} {person.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
