export function GardenList({ removeFunc, list }) {
  return (
    <ol className="list-group list-group-numbered" style={{ marginTop: "2rem" }}>
      {list.map((item) => (
        <li key={item.name} className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.name}</div>
          </div>
          <span className="badge text-bg-primary rounded-pill">{item.amount}</span>
          <button
            onClick={() => removeFunc(item.name)}
            className="badge text-bg-danger rounded-pill"
            style={{ border: "none" }}
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
}
