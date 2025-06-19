export function GardenSummary({ list }) {
  const sortedList = [...list].sort((a, b) => a.amount - b.amount);
  return (
    <div>
      <p>Skirtingos prekes: {list.length}</p>
      <p>Bendras kiekis: {list.reduce((t, n) => t + n.amount, 0)}</p>
      <p>Preke su maziausiu kiekiu: {sortedList.at(0) ? sortedList.at(0).name : "-"}</p>
      <p>Preke su didziausiu kiekiu: {sortedList.at(-1) ? sortedList.at(-1).name : "-"}</p>
    </div>
  );
}
