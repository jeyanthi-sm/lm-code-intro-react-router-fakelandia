import { MISDEMEANOURS,MisdemeanourKind, Misdemeanour } from '../types/misdemeanours.types';
import { createContext } from 'react';

/*export interface FakelandiaContextProps {
        citizenId: number;
        misdemeanour: MisdemeanourKind;
        date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
   
}

*/
export interface FakelandiaContextProps {
    misdemeanours: Misdemeanour[];
}

export const FakelandiaContext = createContext('default value');
export const MisdemeanourContext = createContext('ALL');

//export const FakelandiaContext:React.Context<FakelandiaContextProps> = createContext({misdemeanours:[]}); 


