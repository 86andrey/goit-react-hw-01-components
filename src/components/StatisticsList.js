function StatisticsList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <li className="item">
          <span className="label">{item.lable}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
}
export default StatisticsList;
