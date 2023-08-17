import PropTypes from "prop-types";
import './TransactionHistory.css';


function TransactionHistory ({ items }) {
        return <table className="TransactionHistoryTable">
                <thead className="TableHead">
                    <tr className="TableHeadTr">
                        <th className='TableHeadTh'>Type</th>
                        <th className='TableHeadTh'>Amount</th>
                        <th className='TableHeadTh'>Currency</th>
                    </tr>
                </thead>
                <tbody className="TableBody">
                    {items.map((item) => ( 
                        <tr className="TableBodyTr" key={item.id}>
                            <td className="TableBodyTh">{item.type}</td>
                            <td className="TableBodyTh">{item.amount}</td>
                            <td className="TableBodyTh">{item.currency}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default TransactionHistory;