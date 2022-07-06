export const Diver = ({ checkCoords, coords }) => {
  return (
    <div className="Diver">
      <div>
        <div className="div" onMouseMove={(e) => checkCoords(e)}></div>
        <div className="Coords">{coords}</div>
      </div>
    </div>
  );
};
