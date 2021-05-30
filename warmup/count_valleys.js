// When valley or mountain is considered after 2 consecutive steps from sea level

function countingValleys1(steps, path) {
  // Write your code here
  let stepsFromSeaLevel = 0;
  let prevStepsFromSeaLevel = 0;
  let valleyPoint = false;
  let mountainPoint = false;
  let valleyCount = 0;
  let mountainCount = 0;
  const stepsArray = path.split("");
  stepsArray.forEach((step, index) => {
    if (index === 0) {
      prevStepsFromSeaLevel = 0;
    } else {
      prevStepsFromSeaLevel = stepsFromSeaLevel;
    }
    if (step === "D") {
      stepsFromSeaLevel--;
    } else if (step === "U") {
      stepsFromSeaLevel++;
    }

    if (stepsFromSeaLevel === -2) {
      valleyPoint = true;
    } else if (stepsFromSeaLevel === 2) {
      mountainPoint = true;
    }
    if (
      stepsFromSeaLevel === 0 &&
      prevStepsFromSeaLevel === -1 &&
      valleyPoint
    ) {
      valleyCount++;
      valleyPoint = false;
    } else if (
      stepsFromSeaLevel === 0 &&
      prevStepsFromSeaLevel === 1 &&
      mountainPoint
    ) {
      mountainCount++;
      mountainPoint = false;
    }
  });
  console.log(
    "valleyCount -> ",
    valleyCount,
    " | ",
    "mountainCount -> ",
    mountainCount
  );
}
countingValleys1(10, "DUDUDUUDUD");

// Case 2 - when the valley and mountain is considered only after a single step from the sea level

function countingValleys2(steps, path) {
  // Write your code here
  let stepsFromSeaLevel = 0;
  let valleyCount = 0;
  let mountainCount = 0;
  for (let i = 0; i < steps; i++) {
    const step = path.charAt(i);
    if (step === "U") {
      stepsFromSeaLevel++;
      if (stepsFromSeaLevel === 0) {
        valleyCount++;
      }
    } else {
      stepsFromSeaLevel--;
      if (stepsFromSeaLevel === 0) {
        mountainCount++;
      }
    }
  }

  console.log(
    "valleyCount -> ",
    valleyCount,
    " | ",
    "mountainCount -> ",
    mountainCount
  );
  return valleyCount;
}
countingValleys2(10, "DUDUDUUDUD");
