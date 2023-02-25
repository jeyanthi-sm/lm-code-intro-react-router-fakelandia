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

//export const FakelandiaContext = createContext('default value');
//export const MisdemeanourContext5 = createContext('ALL');
//export const MisdemeanourContext = createContext<string>('ALL');
export const MisdemeanourContext = createContext<number>(4);

export const FakelandiaContext:React.Context<FakelandiaContextProps> = createContext<FakelandiaContextProps>({misdemeanours:[]}); 
//createContext<TypeForMyContextGoesHere>(defaultValueWhichMustMatchThatTypeGoesHere)

