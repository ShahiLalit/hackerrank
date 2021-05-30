function countingValleys(steps, path) {
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
  console.log(valleyCount);
  console.log(mountainCount);
}
countingValleys(26, "DDUUDDUUDDUUUUDDUUUDDUUDDD");
