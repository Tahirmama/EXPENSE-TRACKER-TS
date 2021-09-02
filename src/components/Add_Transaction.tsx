import React, { useState, useContext } from 'react';

// Import the Global State
import { GlobalContext } from './context';


export const AddTransaction = () => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    
  const onSubmit = (e: { preventDefault: () => void;}) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            title,
            amount: +amount
        };
        addTransaction(newTransaction);
    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">
                        Transaction Detail
                    </label>
                    <input  type="text" 
                            id="description"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Detail of Transaction" 
                           
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionamount"
                            value={amount}
                            onChange={e => setAmount(Number(e.target.value))}
                            placeholder="Dollar Value of Transaction"
            
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}