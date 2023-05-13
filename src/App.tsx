import { Component, Show, createEffect, createSignal } from "solid-js";

type HumanBeing = {
  type: "human";
  firstName: string;
  lastName: string;
  birthDate: Date;
};

type AlienBeing = {
  type: "alien";
  planet: string;
  birthNumber: number;
};

type Being = HumanBeing | AlienBeing;

const myself: HumanBeing = {
  type: "human",
  firstName: "Sébastien",
  lastName: "Barbieri",
  birthDate: new Date(1977, 10, 20),
};

const logBeingData = (being: Being) => {
  if (being.type === "human") {
    console.log("The being is a human");
    console.log("First name " + being.firstName);
    console.log("Last name " + being.lastName);
    console.log("Birth date " + being.birthDate);
  } else {
    console.log("Planet " + being.planet);
    console.log("Birth number " + being.birthNumber);
  }
};

logBeingData({
  type: "human",
  firstName: "Sébastien",
  lastName: "Barbieri",
  birthDate: new Date(1977, 10, 20),
});

const App: Component = () => {
  // happens only a single time
  const [getCount, setCount] = createSignal(0);
  createEffect( () => {
    // getCount Must be called because it sets the next callback
    console.log("This is called all the time ", getCount());
  });
  return (
    <Show when={getCount() < 10 } fallback={<h1>the count is too big</h1>}>
      <div>The count is {getCount()}
      <br/>
      <button onClick={() => setCount(getCount() +1)}>Increment</button>
      </div>
    </Show>
  );
  return <div>Hello world I am {myself.firstName} {myself.lastName} born the {myself.birthDate.toISOString()} </div>;
};

export default App;
