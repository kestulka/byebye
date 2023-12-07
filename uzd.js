"use strict";

// const multiDimensionsArr = [1, [3, [7,6]],8,[[6,[3], 11]],9]

// console.log(threeDimensionsArr.join(' '))

// var newArray = [];
// for(let i=0; i<multiDimensionsArr.length;++i){
//     for(let j=0; j<multiDimensionsArr[i].length; ++j)
//     newArray.push(multiDimensionsArr[i][j])
// }
// console.log(newArray)

// var newArray2 = [].concat(...multiDimensionsArr)
// console.log(newArray2)


// papildoma uzduotis

const questions2 = [
    {
      id: 1,
      question: "HTML tai",
      answers: [
        {
          text: "Programavimo kalba tinklapio interaktyvumui kurti",
          isCorrect: false,
        },
        { text: "Tinklapio apipavidalinimą aprašanti kalba", isCorrect: false },
        { text: "Tinklapio struktūrą aprašanti kalba", isCorrect: true },
      ],
    },
    {
      id: 2,
      question: "Kuris kodas teisingai aprašo HTML lentelės eilutę?",
      answers: [
        {
          text: "<tr><td>Vardas</td><td>Pavardė</td><td>Telefonas></td></tr>",
          isCorrect: true,
        },
        {
          text: "<td><tr>Vardas</tr><tr>Pavardė</tr><tr>Telefonas></tr></td>",
          isCorrect: false,
        },
        {
          text: "<row><cell>Vardas</cell><cell>Pavardė</cell><cell>Telefonas></cell></row>",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      question: "Koks HTML elementas aprašo tinklapio bloką?",
      answers: [
        { text: "<span>", isCorrect: false },
        { text: "<p>", isCorrect: false },
        { text: "<h2>", isCorrect: false },
        { text: "<hr>", isCorrect: false },
        { text: "<div>", isCorrect: true },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 4,
      question:
        "Koks CSS matavimo vienetas naudojamas, kad HTML blokas prisitaikytų prie ekrano pločio?",
      answers: [
        { text: "px", isCorrect: false },
        { text: "em", isCorrect: false },
        { text: "%", isCorrect: true },
      ],
    },
    {
      id: 5,
      question:
        "Kaip priskirti nav bloke sąrašo būdu aprašytas nuorodas kintamajam,kurio pavadinimas nuorodos?",
      answers: [
        {
          text: "var nuorodos = document.querySelector('nav nuorodos');",
          isCorrect: false,
        },
        {
          text: "var nuorodos = document.querySelector('nav li a');",
          isCorrect: true,
        },
        { text: "var nuorodos = .getByElements('nav li a');", isCorrect: false },
        { text: "const nuorodos = querySelector('nav li a');", isCorrect: false },
        { text: "Teisingo atsakymo nėra", isCorrect: false },
      ],
    },
    {
      id: 6,
      question: "Kurie iš kintamųjų yra masyvai?",
      answers: [
        {
          text: "var pastraipos = document.querySelector('p');",
          isCorrect: false,
        },
        { text: "var tekstai = document.getByElements('p');", isCorrect: false },
        {
          text: "var patarimai = document.querySelectorAll('p');",
          isCorrect: true,
        },
        { text: "var pastraipos = document.intoArray('p);", isCorrect: false },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 7,
      question:
        "Kaip sukurti naują li elementą esančiame ul elemente, kuris turi klasę pageidavimai?",
      answers: [
        {
          text: "var list = document.querySelector('ul.pageidavimai'); var listItem = document.create('li'); list.appendChild(listItem);",
          isCorrect: false,
        },
        {
          text: "var list = document.querySelector('ul .pageidavimai'); var listItem = document.createElement('li'); list.appendChild(listItem);",
          isCorrect: true,
        },
        {
          text: "var list = document.querySelector('ul.pageidavimai'); var listItem = document.createElement('li'); list.append(listItem);",
          isCorrect: false,
        },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 8,
      question: "Kas yra preprocesorius?",
      answers: [
        { text: "Naujas CSS dialektas", isCorrect: false },
        { text: "CSS 5 versija", isCorrect: false },
        {
          text: "Skriptų rašymo kalba, kuri išplečia CSS ir leidžia kompiliuoti kodą į standartinį HTML ir CSS kodą",
          isCorrect: false,
        },
        {
          text: "Skriptų rašymo kalba, kuri išplečia CSS ir leidžia kompiliuoti kodą į standartinį CSS kodą",
          isCorrect: true,
        },
      ],
    },
    {
      id: 9,
      question: "Pažymėkite, kuris iš pateiktų variantų nėra TVS",
      answers: [
        { text: "WordPress", isCorrect: false },
        { text: "Drupal", isCorrect: false },
        { text: "Bootstrap", isCorrect: true },
        { text: "ImpressPage", isCorrect: false },
      ],
    },
    {
      id: 10,
      question: "Kuris iš pavyzdžių yra arow funkciją",
      answers: [
        {
          text: "function (a, b){\n" + " return a + b + 100;}\n",
          isCorrect: false,
        },
        {
          text: "function (a, b) => {\n" + " return a + b + 100;}\n",
          isCorrect: false,
        },
        { text: "(a, b) => a + b + 100;", isCorrect: true },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 11,
      question:
        "let kiekis = 10;  \n" +
        "console.log(kiekis++); \n" +
        "Ką išves konsolėje?",
      answers: [
        { text: "10", isCorrect: true },
        { text: "11", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "Nieko", isCorrect: false },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 12,
      question:
        "Ką matysime konsolėje užrašius šį kodą: \n" +
        "let foto = ['Overlay', 'Overlay1', 'Overlay2', 'Overlay3'];\n" +
        "let naujas = foto;\n" +
        "console.log(naujas);",
      answers: [
        { text: "undefined", isCorrect: false },
        { text: "foto", isCorrect: false },
        {
          text: "['Overlay', 'Overlay1', 'Overlay2', 'Overlay3']",
          isCorrect: true,
        },
        { text: "Nieko", isCorrect: false },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 13,
      question:
        "Ką atspausdins konsolėje : \n" +
        "function labas(a) {    \n" +
        "return a;\n" +
        "} \n" +
        "console.log(labas(1))",
      answers: [
        { text: "undefined", isCorrect: false },
        { text: "labas(1)", isCorrect: false },
        { text: "1", isCorrect: true },
        { text: "a", isCorrect: false },
        { text: "Nieko", isCorrect: false },
      ],
    },
  ];
  

questions2.forEach((question) => {
    console.log(`klausimas: ${question.id}: ${question.question}`);
    question.answers.forEach((answer, index) => {
      console.log(`  ${index + 1}. ${answer.text} (ar teisingas?: ${answer.isCorrect})`);
    });
  });



