// 1. Functional Javascript

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const filterList = (year) => {
  filteredArray = [];
  for (i in inventors) {
    if (
      inventors[i].year.toString().substring(0, 2) ===
      year.toString().substring(0, 2)
    )
      filteredArray.push(inventors[i]);
  }
  console.log(filteredArray);
};

const onlyFirstLast = () => {
  filteredArray = [];
  for (i in inventors) {
    const picked = (({ first, last }) => ({ first, last }))(inventors[i]); // from stack overflow, don't understand
    filteredArray.push(picked);
  }
  console.log(filteredArray);
};

const sortDescending = () => {
  function compareDescending(a, b) {
    if (a.year < b.year) {
      return 1;
    }
    if (a.year > b.year) {
      return -1;
    }
    return 0;
  }

  filteredArray = inventors.sort(compareDescending);
  console.log(filteredArray);
};

inventors.reduce((accumulator, nextValue) => {
  nextValue.lived = nextValue.passed - nextValue.year;
  return accumulator + 1;
}, 0);

const sortByLived = () => {
  function compare(a, b) {
    if (a.lived < b.lived) {
      return -1;
    }
    if (a.lived > b.lived) {
      return 1;
    }
    return 0;
  }

  filteredArray = inventors.sort(compare);
  console.log(filteredArray);
};

const sortByLastName = () => {
  function compare(a, b) {
    if (a.last < b.last) {
      return -1;
    }
    if (a.last > b.last) {
      return 1;
    }
    return 0;
  }

  filteredArray = inventors.sort(compare);
  console.log(filteredArray);
};

// filterList(1500)
// onlyFirstLast()
// sortDescending()
// sortByLived()
// sortByLastName()

// 2. Object.keys

const obj = {
  keyCode: "JS",
  2: "Program Paradigm",
  Target: "Browser",
};

function objectKeys(obj) {
  let keysArray = [];
  for (let i in obj) {
    keysArray.push(i);
  }
  console.log(keysArray);
}

objectKeys(obj); // ['2', 'keyCode', 'Target']

// 3. Object.values

function objectValues(obj) {
  let valuessArray = [];
  for (let i in obj) {
    valuessArray.push(obj[i]);
  }
  console.log(valuessArray);
}

objectValues(obj); // ['Program Paradigm', 'JS', 'Browser']
