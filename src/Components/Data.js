export const reducer = (props) => {
  const { N, P, I, R, M, Ti, Tm, Ts } = props;

  let dataNow = {
    Pi: Number(I),
    Pv: P - I,
    Pm: 0,
    Pr: 0,
    S: 0,
    D: 1,
  };
  let results = [dataNow];

  for (let i = 1; i <= Ts - 1; i++) {
    // dane z poprzedniej iteracji

    let currentData = {
      ...dataNow,
    };

    if (i - Tm >= 0 && currentData.Pi > 0 && Tm < Ti) {
      console.log("jestem mniejszy");
    }

    if (currentData.Pv) {
      currentData.Pi += Math.round(currentData.Pi * R);
      currentData.Pi = Math.min(P - currentData.Pr, currentData.Pi);
      currentData.Pv = P - currentData.Pi - currentData.Pr;
      currentData.Pv = Math.max(0, currentData.Pv);
    }

    if (i - Ti >= 0) {
      let day = results[i - Ti];
      currentData.Pi -= day.Pi;
      currentData.Pi = Math.max(0, currentData.Pi);
      currentData.Pr = Math.max(0, currentData.Pr);
      currentData.Pr += day.Pi;
      currentData.Pr = Math.min(currentData.Pr, P);
    }

    results[i] = currentData;
    currentData.S =
      currentData.Pi + currentData.Pv + currentData.Pm + currentData.Pr;
    currentData.D = i + 1;
    dataNow = currentData;
  }
  console.log(results);
  return results;
};
