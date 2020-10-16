"use strict";
const text = document.querySelector(".text1");
const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "journalist",
  run: function (phrase) {
    console.log("Estoy corriendo");
  },
  runAMarathon: function (distance) {
    console.log(`Estoy corriendo una maratón de ${distance} kilómetros`);
  },
  showBio: function () {
    console.log(
      "Mi nombre es " +
        this.name +
        "tengo " +
        this.age +
        "años y soy " +
        this.job
    );
  },
};

adalaber1.run();
adalaber1.runAMarathon(50);
adalaber1.showBio();

//console.log(`Mi nombre es ${adalaber1.name} , tengo ${adalaber1.age} años y soy ${adalaber1.job}`);

text.innerHTML = `Mi nombre es ${adalaber1.name} , tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

const text1 = document.querySelector(".text2");
const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
  showBio: function () {
    console.log(
      "Mi nombre es " +
        this.name +
        "tengo " +
        this.age +
        "años y soy " +
        this.job
    );
  },
};
adalaber2.showBio();

text1.innerHTML = `Mi nombre es ${adalaber2.name} , tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
