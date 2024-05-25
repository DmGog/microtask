import React from "react";

type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}
export const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        {manufacturer: "BMW", model: "m5cs"},
        {manufacturer: "Mercedes", model: "e63s"},
        {manufacturer: "Audi", model: "rs6"}
    ]


    return (<>
            <ul>
                {props.students.map((e, index) => {
                    return <li key={e.id}>
                        <span>{e.name}</span>
                        <span> ,age: {e.age}</span>
                    </li>
                })}
            </ul>
            <table>

                {topCars.map((e, index) => {
                    return (<tr key={index}>
                            <th>
                                <span>{e.manufacturer}</span>

                            </th>
                            <th><span>{e.model}</span></th>
                        </tr>
                    )
                })}


            </table>
        </>
    );
};

