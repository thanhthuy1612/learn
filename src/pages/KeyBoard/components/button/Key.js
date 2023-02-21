export default function Key({ handleClick, type }) {
  return <button onClick={handleClick}>{type}</button>;
}
