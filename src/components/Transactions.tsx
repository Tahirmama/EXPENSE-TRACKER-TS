import React, { useContext } from 'react'
import { TransactionType } from '../Types/Types'
// Import the Global State
import { GlobalContext } from './context';

export const Transaction: React.FC<TransactionType> = ({ id, title, amount }) => {


    const { deleteTransaction } = useContext(GlobalContext);

    const sign = amount > 0 ? '+' : '-';

    return (
        <li className={amount > 0 ? 'plus' : 'minus'}>
            {title}
            <span>
                {sign}${Math.abs(amount)}
            </span>
            <button className="delete-btn"
                onClick={() => deleteTransaction(id)}>
                X
            </button>
        </li>
    )
}