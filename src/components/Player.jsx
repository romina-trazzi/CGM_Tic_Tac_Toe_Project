import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type='text' onChange={handleChange} required value={playerName} />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button className='button' onClick={handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}

/* setIsEditing((editing) => !editing) la funzione anonima serve per avere la certezza che 
lo stato di partenza sia davvero lo stato precedente.
Il parametro editing equivale allo stato precedente (alias prev): 
Updating state based on the previous state https://react.dev/reference/react/useState 

Two-way binding: la funzione di onChange-handleChange per ottenere il valore digitato. */
