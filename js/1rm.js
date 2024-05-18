// to set localstorage
function saveSelection(selection) {
  localStorage.setItem("weightUnits", selection);
  updateUI(selection);
}

// on load, set default to lbs
document.addEventListener("DOMContentLoaded", function () {
  const savedSelection = localStorage.getItem("weightUnits");
  if (savedSelection) {
    updateUI(savedSelection);
  } else {
    saveSelection("lbs");
  }

  const lbsRadio = document.getElementById("lbs");
  const kgRadio = document.getElementById("kg");

  lbsRadio.addEventListener("change", function () {
    saveSelection("lbs");
  });

  kgRadio.addEventListener("change", function () {
    saveSelection("kg");
  });
});

// update UI when another radio is checked
function updateUI(selection) {
  const lbsRadio = document.getElementById("lbs");
  const kgRadio = document.getElementById("kg");
  lbsRadio.checked = selection === "lbs";
  kgRadio.checked = selection === "kg";

  const current1RMValue = parseFloat(
    document.getElementById("current1RM").innerText
  );
  document.getElementById("current1RM").innerText = `${current1RMValue.toFixed(
    0
  )} ${selection}`;

  let currentExtraWeight = document.getElementById("weightedOnly").innerText;
  currentExtraWeight =
    selection === "lbs"
      ? currentExtraWeight.replace("kg", "lbs")
      : currentExtraWeight.replace("lbs", "kg");
  document.getElementById("weightedOnly").innerText = currentExtraWeight;
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// calculate percentages for charts
function generatePercentages(oneRM) {
  let percentages = [];
  for (let i = 50; i <= 100; i += 5) {
    percentages.push({
      percentage: i,
      value: Math.round((i / 100) * oneRM),
    });
  }
  return percentages;
}

function calculateOneRM(bodyweight, extraweight, reps) {
  if (isNaN(bodyweight) || isNaN(extraweight) || isNaN(reps)) {
    throw new Error("Invalid input. Please enter valid numbers.");
  }

  const weightLifted = bodyweight + extraweight;
  const oneRM = weightLifted * (1 + reps / 30);
  const extraWeight = oneRM - bodyweight;
  return { oneRM, extraWeight };
}

const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", function () {
  const bodyweight = parseFloat(document.getElementById("bodyweight").value);
  const extraweight = parseFloat(document.getElementById("extraweight").value);
  const reps = parseFloat(document.getElementById("reps").value);
  const selection = localStorage.getItem("weightUnits");

  try {
    const { oneRM, extraWeight } = calculateOneRM(
      bodyweight,
      extraweight,
      reps
    );
    document.getElementById("current1RM").innerText = `${oneRM.toFixed(
      0
    )} ${selection}`;
    document.getElementById(
      "weightedOnly"
    ).innerText = `Added weight: ${extraWeight.toFixed(0)} ${selection}`;

    // setTimeout(() => {
    //   confetti({
    //     angle: randomInRange(55, 125),
    //     spread: randomInRange(50, 70),
    //     particleCount: randomInRange(50, 100),
    //     origin: { x: 0.73, y: 0.7 },
    //   });
    // }, 1000);

    // Extract percentages
    const percentages = generatePercentages(oneRM);

    // Generate the table
    const table = generateTable(percentages, selection);

    // Display the table in a div with id "tableContainer"
    document.getElementById("tableContainer").innerHTML = table;
  } catch (error) {
    console.error(error.message);
    // Display error message to the user
  }
});

// Function to generate a table from an object
function generateTable(data, selection) {
  let table = "<table class='full-width-table'><thead><tr>";

  // Generate table headers from object keys
  Object.keys(data[0]).forEach((key) => {
    if (key === "percentage") {
      table += "<th>Percentages</th>";
    } else if (key === "value") {
      table += `<th>Weight (${selection})</th>`;
    } else {
      table += `<th>${key}</th>`;
    }
  });

  table += "</tr></thead><tbody>";

  // Generate table rows from object values
  data.forEach((item) => {
    table += "<tr>";
    Object.entries(item).forEach(([key, value]) => {
      if (key === "percentage") {
        table += `<td>${value}%</td>`;
      } else if (key === "value") {
        table += `<td>${value} ${selection}</td>`;
      } else {
        table += `<td>${value}</td>`;
      }
    });
    table += "</tr>";
  });

  table += "</tbody></table>";
  return table;
}
