import "./Screen.css";
export default function Screen({ list }) {
  return (
    <>
      <div className="screen">
        {list.map((list, index) => (
          <div key={index}>{list}</div>
        ))}
      </div>
    </>
  );
}
