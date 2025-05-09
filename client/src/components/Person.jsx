import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Person() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/people/${id}`)
      .then(response => setPerson(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!person) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{person.first_name} {person.last_name}</h2>
      <p>Email : {person.email}</p>
    </div>
  );
}
