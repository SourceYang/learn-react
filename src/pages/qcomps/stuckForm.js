import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState(''); // Use state for firstName
  const [lastName, setLastName] = useState(''); // Use state for lastName

  function handleFirstNameChange(e) {
    setFirstName(e.target.value); // Update state
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value); // Update state
  }

  function handleReset() {
    setFirstName(''); // Reset state
    setLastName(''); // Reset state
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
