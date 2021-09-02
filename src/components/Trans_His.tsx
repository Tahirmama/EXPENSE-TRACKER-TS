import React, { useContext } from 'react';

// Import Transaction Component
import { Transaction } from './Transactions';

// Import the Global State
import { GlobalContext } from './context'

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id}
            id={transaction.id}
            title={transaction.title}
            amount={transaction.amount} />))} 
            </ul>
        </div>
    )
}