'use client'
import { useState } from 'react';

export default function Home() {
  const [inputName, setInputName] = useState('');
  const [postedNames, setPostedNames] =  useState<string[]>([]);

  const add = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputName }),

      });

      if (response.ok) {

        setPostedNames([...postedNames, inputName]); console.log(inputName);

        setInputName('');
      } else {
        console.error('Error:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main>
      <article className="py-20 mt-10">
      <input  placeholder="Type here"
        className="input input-bordered input-secondary w-450 mr-8"
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button className="btn btn-outline btn-success shadow-lg shadow-indigo-500/50" onClick={add}>legg til bruker</button>
      {postedNames.map((text, name) => (
        <p className='m-8' key={name}>Ny bruker {name + 1}: {text}</p>
      ))}
      </article>
    </main>
  );
}