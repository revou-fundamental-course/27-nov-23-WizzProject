// Generate copyright text.
const copyright = `© ${new Date().getFullYear()} by Marvin Joseph`;
document.getElementById("foo").innerHTML = copyright;

const luasBtn = document.getElementById("luas-btn");
const kelilingBtn = document.getElementById("keliling-btn");

const infoDescription = document.getElementById("info-description");
const equationFormula = document.getElementById("equation-formula");
const infoLegend = document.getElementById("info-legend");
const infoList = document.getElementById("info-list");

const inputBox = document.getElementsByClassName("input-box")[0];
const resultBox = document.getElementsByClassName("result-box")[0];
const optionH1Display = document.getElementById("option-h1-display");

const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");
const inputC = document.getElementById("input-c");
const inputH = document.getElementById("input-h");

const hitungBtn = document.getElementById("hitung-btn");
const resetBtn = document.getElementById("reset-btn");

const calcResult1 = document.getElementById("calc-result-1");
const calcResult2 = document.getElementById("calc-result-2");
const calcResult3 = document.getElementById("calc-result-3");

const wrapA = document.getElementById("wrap-a");
const wrapB = document.getElementById("wrap-b");
const wrapC = document.getElementById("wrap-c");
const wrapH = document.getElementById("wrap-h");

// Input validation using Regex
const validateInput = (inputValue) => {
  const integerRegex = /^~?\d+$/;
  return integerRegex.test(inputValue);
};

const reset = (code) => {
  variableReset();
  if (code === 1) {
    wrapA.style.display = "none";
    wrapB.style.display = "none";
    wrapC.style.display = "none";
    wrapH.style.display = "none";
  }
};

const variableReset = () => {
  resultBox.style.display = "none";
  inputA.value = "";
  inputB.value = "";
  inputC.value = "";
  inputH.value = "";
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  H = 0;
};

var optionKey = "";
var A = 0,
  B = 0,
  C = 0,
  D = 0,
  H = 0;

// Handle Option Button => Luas
luasBtn.addEventListener("click", () => {
  optionKey = "luas";

  luasBtn.style.border = "2.5px solid #05a95b";
  kelilingBtn.style.border = "1px solid #c9e9f3";

  infoDescription.innerHTML = `Rumus Luas ${shapeItems[2].type}:`;
  equationFormula.innerHTML = shapeItems[2].area.equation;
  infoLegend.innerHTML = `Di mana:`;
  infoList.innerHTML = shapeItems[2].area.info.join(", ");

  inputBox.style.display = "block";
  optionH1Display.innerHTML = `Hitung Luas ${shapeItems[2].type}`;

  reset(1);

  wrapB.style.display = "block";
  wrapH.style.display = "block";
});

// Handle Option Button => Keliling
kelilingBtn.addEventListener("click", () => {
  optionKey = "keliling";

  luasBtn.style.border = "1px solid #c9e9f3";
  kelilingBtn.style.border = "2.5px solid #05a95b";

  infoDescription.innerHTML = `Rumus Keliling ${shapeItems[2].type}:`;
  equationFormula.innerHTML = shapeItems[2].perimeter.equation;
  infoLegend.innerHTML = `Di mana:`;
  infoList.innerHTML = shapeItems[2].perimeter.info.join(", ");

  inputBox.style.display = "block";
  resultBox.style.display = "none";
  optionH1Display.innerHTML = `Hitung Keliling ${shapeItems[2].type}`;

  reset(1);

  wrapA.style.display = "block";
  wrapB.style.display = "block";
  wrapC.style.display = "block";
});

// Handle Input Form => A
inputA.addEventListener("input", () => {
  if (inputA.value == "" || inputA.value == "NaN") {
    variableReset();
  } else {
    A = parseInt(inputA.value.trim());

    if (validateInput(A)) {
      hitungBtn.disabled = false;
    } else {
      hitungBtn.disabled = true;
    }
  }
});

// Handle Input Form => B
inputB.addEventListener("input", () => {
  if (inputB.value == "" || inputB.value == "NaN") {
    variableReset();
  } else {
    B = parseInt(inputB.value.trim());

    if (validateInput(B)) {
      hitungBtn.disabled = false;
    } else {
      hitungBtn.disabled = true;
    }
  }
});

// Handle Input Form => C
inputC.addEventListener("input", () => {
  if (inputC.value == "" || inputC.value == "NaN") {
    variableReset();
  } else {
    C = parseInt(inputC.value.trim());

    if (validateInput(C)) {
      hitungBtn.disabled = false;
    } else {
      hitungBtn.disabled = true;
    }
  }
});

// Handle Input Form => H
inputH.addEventListener("input", () => {
  if (inputH.value == "" || inputH.value == "NaN") {
    variableReset();
  } else {
    H = parseInt(inputH.value.trim());

    if (validateInput(H)) {
      hitungBtn.disabled = false;
    } else {
      hitungBtn.disabled = true;
    }
  }
});

// Handle Button Click => Hitung
hitungBtn.addEventListener("click", () => {
  resultBox.style.display = "block";

  switch (optionKey) {
    case "luas":
      calcResult1.innerHTML = shapeItems[2].area.equation;
      calcResult2.innerHTML = shapeItems[2].area.calculation(B, H);
      calcResult3.innerHTML = "L = " + shapeItems[2].area.result(B, H);
      break;

    case "keliling":
      calcResult1.innerHTML = shapeItems[2].perimeter.equation;
      calcResult2.innerHTML = shapeItems[2].perimeter.calculation(A, B, C);
      calcResult3.innerHTML = "K = " + shapeItems[2].perimeter.result(A, B, C);
      break;

    default:
      break;
  }
});

// Handle Button Click => Reset
resetBtn.addEventListener("click", () => {
  reset(0);
});

const shapeItems = [
  {
    id: 1,
    type: "Persegi",
  },
  {
    id: 2,
    type: "Persegi Panjang",
  },
  {
    id: 3,
    type: "Segitiga",
    image: { path: "asset/triangle.png", alt: "gambar bangun segitiga" },
    area: {
      equation: "L = 1/2 x Alas x Tinggi",
      info: ["L = Luas", "b = Panjang alas", "h = Tinggi"],
      calculation: (b, h) => `L = (1 / 2) * ${b} * ${h}`,
      result: (b, h) => (1 / 2) * b * h,
    },
    perimeter: {
      equation: "K = S1 + S2 + S3",
      info: ["K = Keliling", "S1 = Sisi a", "S2 = Sisi b", "S3 = Sisi c"],
      calculation: (a, b, c) => `K = ${a} + ${b} + ${c}`,
      result: (a, b, c) => a + b + c,
    },
  },
  {
    id: 4,
    type: "Jajar Genjang",
  },
  {
    id: 5,
    type: "Trapesium",
  },
  {
    id: 6,
    type: "Belah Ketupat",
  },
];
