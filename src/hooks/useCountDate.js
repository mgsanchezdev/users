/* eslint-disable operator-assignment */
import moment from 'moment';

const useCountDate = (arrayData) => {
  const DIFFDAY = 7;
  const date = moment();
  date.subtract(7);
  const countDate = arrayData.reduce((acc, el) => {
    const day = moment(el.date);

    const diffDay = date.diff(day, 'days');
    if (diffDay <= DIFFDAY) {
      if (acc[el.date]) {
        acc[el.date] = acc[el.date] + 1;
      } else {
        acc[el.date] = 1;
      }
    }
    return acc;
  }, {});
  const resultado = Object.entries(countDate);
  const arrayDate = resultado.map((element) => element[0]);
  const arrayDataCount = resultado.map((element) => element[1]);
  return [arrayDate, arrayDataCount];
};
export default useCountDate;
