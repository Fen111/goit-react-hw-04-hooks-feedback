import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onReset,
}) {
  return (
    <>
      <ul className={s.statList}>
        <li className={s.statItem}>good: {good}</li>
        <li className={s.statItem}>neutral: {neutral}</li>
        <li className={s.statItem}>bad: {bad}</li>
        <li className={s.statItem}>Total: {total}</li>
        <li className={s.statItem}>Positive feedback: {positivePercentage}%</li>
      </ul>
      <button className={s.statButton} type="button" onClick={onReset}>
        Clear
      </button>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
