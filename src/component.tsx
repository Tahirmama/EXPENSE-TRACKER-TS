import React from 'react';
import Header from './components/Header';
import {Balance} from './components/Balance';
import {AccountSummary} from './components/Acc_Details';
import {TransactionHistory} from './components/Trans_His';
import { AddTransaction } from './components/Add_Transaction';
import {GlobalProvider } from './components/context';



const Components = () => {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <AccountSummary />
                <TransactionHistory />
                <AddTransaction />
            </div>
        </GlobalProvider>
    )
}

export default Components