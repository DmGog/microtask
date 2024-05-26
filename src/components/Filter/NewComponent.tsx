import React from "react";
import {FilterType} from "./Filter";


type NewComponentType = {
    currentMoney: Array<MoneyType>
    callBack: (filter: FilterType) => void
}

type MoneyType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((obj, index) => {
                    return (
                        <li key={index}>
                            <span>{obj.banknots}</span>
                            <span>: {obj.value}</span>
                            <span>- {obj.number}</span>
                        </li>
                    )
                })}

            </ul>
            <button onClick={() => props.callBack("All")}>All</button>
            <button onClick={() => props.callBack("Dollars")}>Dollars</button>
            <button onClick={() => props.callBack("RUBLS")}>RUBLS</button>
        </>
    );
};

