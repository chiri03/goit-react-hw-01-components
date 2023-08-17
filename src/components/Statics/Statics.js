import './Statics.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
    return (
        <div className='StatisticsSection'>
        {title && <div className='StatisticsTitle'>{title}</div>}
                <div className ='StatisticsList'>
                    {stats.map((stat) => ( 
                        <div className='StatisticsItem' key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
                            <div className='StatisticsLabel'>{ stat.label}</div>
                            <span>{ stat.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
    );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}
export default Statistics;