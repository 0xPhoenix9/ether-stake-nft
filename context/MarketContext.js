import React from 'react';

export const MarketContext = React.createContext({});

export default function MarketContextProvider({ children }) {

    const [stakedItems, setStakedItems] = React.useState([]);
    return (
        <MarketContext.Provider
            value={{
                stakedItems,
                setStakedItems
            }}
        >
            {
                children
            }
        </MarketContext.Provider>
    )
}