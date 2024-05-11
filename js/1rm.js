function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

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

function saveSelection(selection) {
  const savedSelection = localStorage.getItem("weightUnits");
  if (!savedSelection) {
    localStorage.setItem("weightUnits", "lbs");
    updateUI("lbs");
  } else {
    updateUI(selection);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedSelection = localStorage.getItem("weightUnits");
  if (savedSelection) {
    updateUI(savedSelection);
  }

  const lbsRadio = document.getElementById("lbs");
  const kgRadio = document.getElementById("kg");

  lbsRadio.addEventListener("change", function () {
    saveSelection("lbs");
  });

  kgRadio.addEventListener("change", function () {
    saveSelection("kg");
  });

  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", function () {
    const bodyweight = parseFloat(document.getElementById("bodyweight").value);
    const extraweight = parseFloat(
      document.getElementById("extraweight").value
    );
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
    } catch (error) {
      console.error(error.message);
      // Display error message to the user
    }

    setTimeout(() => {
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { x: 0.73, y: 0.7 },
      });
    }, 1000);
  });
});

function calculateOneRM(bodyweight, extraweight, reps) {
  if (isNaN(bodyweight) || isNaN(extraweight) || isNaN(reps)) {
    throw new Error("Invalid input. Please enter valid numbers.");
  }

  const weightLifted = bodyweight + extraweight;
  const oneRM = weightLifted * (1 + reps / 30);
  const extraWeight = oneRM - bodyweight;
  return { oneRM, extraWeight };
}
