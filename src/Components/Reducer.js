export let simulationObjects = [];

let date = new Date();
let current_date =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

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

      if (i !== 0 && i === toDeathDays) {
        newDay.pi = (lastDay.pi - indicatorM) * indicatorR;
        newDay.pm = indicatorM;
        newDay.pv = populationSize - newDay.pi - newDay.pm;
      } else if (i > toDeathDays) {
        newDay.pi = (lastDay.pi - indicatorM) * indicatorR;
        newDay.pm = lastDay.pm + indicatorM;
        newDay.pv = populationSize - newDay.pi - newDay.pm;
      } else {
        newDay.pi = lastDay.pi * indicatorR;
        newDay.pv = populationSize - newDay.pi;
      }
      simulationObjects.push(newDay);
      lastDay = newDay;
    }
  }
};
