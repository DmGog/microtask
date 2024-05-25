import React from "react";
import "./App.css";
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {NewComponent} from "./components/NewComponent";

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    return (
        <>
            <Header title={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            <NewComponent students={students}/>
            <Footer titleForFooter={"New Footer"}/>
        </>
    );
}

export default App;