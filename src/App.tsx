import type { Component } from "solid-js";

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
  return <div>Hello world I am {myself.firstName} {myself.lastName} born the {myself.birthDate.toISOString()} </div>;
};

export default App;
