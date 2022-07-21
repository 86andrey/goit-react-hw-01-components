import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({data}) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>

      <ul className={style.statList}>
        {data.map(({ id, label, percentage }) => (
          <li className={style.item} key={id}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
  </ul>
</section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;