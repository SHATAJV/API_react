import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddPerson() {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/people', form)
      .then(() => {
        alert("Personne ajoutée !");
        navigate('/');
      })
      .catch(err => {
        console.error("Erreur lors de l'ajout :", err);
        alert("Erreur lors de l'ajout");
      });
  };

  return (
    <div>
      <h2>Ajouter une personne</h2>
      <form onSubmit={handleSubmit}>
        <input name="first_name" placeholder="Prénom" value={form.first_name} onChange={handleChange} required />
        <input name="last_name" placeholder="Nom" value={form.last_name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
