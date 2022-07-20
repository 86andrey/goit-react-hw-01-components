import StatisticsList from './StatisticsList';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <StatisticsList items={stats} />
    </section>
  );
};

export default Statistics;
