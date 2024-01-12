function Log({ activeTurn }) {
  return (
    <>
      <ol id='log'>
        {activeTurn.map((turn, id) => (
          <li key={`${turn.square.row} ${turn.square.col}`}>
            {turn.player} declares {turn.square.row}, {turn.square.col}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Log;
