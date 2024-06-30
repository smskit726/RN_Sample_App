import { ReactNode, createContext, useContext, useState } from "react";

interface OtherProps {}

type CommonProps = OtherProps;

const DataContext = createContext<CommonProps | null>(null);

export const DataProvider = ({children} : {children: ReactNode}) => {
    return (
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )
}

export const useContextProps = () =>{
    const context = useContext(DataContext)
    if(!context) {
        throw new Error('DataContext is null or undefined');
    }
    return context;
};