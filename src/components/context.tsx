import React, { createContext, useReducer } from 'react';

// Import the Reducer

import {TransactionType} from '../Types/Types'
import AppReducer from './AppReducer';


const startingState = {
    transactions : [
        {id:1, title:"IPhone", amount:450}
    ],
    deleteTransaction : (id: number) => {},
    addTransaction : (transaction: TransactionType) => {}

}
// Create the Global Context
export const GlobalContext = createContext(startingState);

// Create a Provider for the Global Context
//Creating a provider for context so it can send the data overall 
//through this provider we give acces to our transactions
 //using children here to give access to all our component like header,balance,etc
export const GlobalProvider : React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, startingState);

    // Actions for Transactions
//Action will be sent to reducer
        // Delete Existing Transaction Action
        function deleteTransaction(id: number) {
            dispatch({
              type: 'delete',
              id
            })
          }
      
          function addTransaction(transaction: TransactionType) {
            dispatch({
              type: 'add',
              transaction
            })
          }
      
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}