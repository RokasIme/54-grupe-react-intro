import { useState } from "react";
import { GardenForm } from "../components/garden/GardenForm";
import { GardenList } from "../components/garden/GardenList";
import { GardenSummary } from "../components/garden/GardenSummary";

export function PageGarden() {
  const [list, setList] = useState([]);

  function addNewItem(name, amount) {
    if (list.some((item) => item.name === name)) {
      setList((currentList) =>
        currentList.map((item) => (item.name === name ? { ...item, amount: item.amount + amount } : item))
      );
    } else {
      setList((currentList) => [...currentList, { name, amount }]);
    }
  }

  function removeItem(name) {
    setList((currentList) => [...currentList].filter((item) => item.name !== name));
  }

  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <GardenForm addNewItem={addNewItem} />
          <GardenList removeFunc={removeItem} list={list} />
        </div>
        <div className="col-12 col-md-6">
          <GardenSummary list={list} />
        </div>
      </div>
    </section>
  );
}
