export let simulationObjects = [];

export const reducer = (props) => {
  const {
    indicatorR,
    indicatorM,
    infectedPeople,
    populationSize,
    toDeathDays,
    toRecoveryDays,
    simulationDays,
  } = props;

  let lastDay = {
    pi: infectedPeople,
    pv: populationSize - infectedPeople,
    pm: 0,
    pr: 0,
  };

  for (let i = 0; i < simulationDays; i++) {
    if (lastDay.pv > 0) {
      let newDay = {
        pi: 0,
        pv: 0,
        pm: 0,
        pr: 0,
      };
      if (i !== 0 && i === toRecoveryDays) {
        console.log(lastDay);
        newDay.pr = simulationObjects[i - toRecoveryDays].pi;
        newDay.pi -= newDay.pr;
      } else if (i > toRecoveryDays && i > toDeathDays) {
        lastDay.pr =
          lastDay.pr + (simulationObjects[i - toRecoveryDays].pi - indicatorM);
        lastDay.pi -= lastDay.pr;
      } else {
        console.log(simulationObjects);
        // lastDay.pr = simulationObjects[i - toRecoveryDays].pi;
        // lastDay.pi -= lastDay.pr;
      }

      if (i !== 0 && i === toDeathDays) {
        newDay.pi = (lastDay.pi - indicatorM) * indicatorR;
        newDay.pm = indicatorM;
        newDay.pv = populationSize - newDay.pi - newDay.pm;
        newDay.pr += lastDay.pr;
      } else if (i > toDeathDays) {
        newDay.pi = (lastDay.pi - indicatorM) * indicatorR;
        newDay.pm = lastDay.pm + indicatorM;
        newDay.pv = populationSize - newDay.pi - newDay.pm;
        newDay.pr += lastDay.pr;
      } else {
        newDay.pi = lastDay.pi * indicatorR;
        newDay.pv = populationSize - newDay.pi;
        newDay.pr += lastDay.pr;
      }
      simulationObjects.push(newDay);
      lastDay = newDay;
    }
  }
};
