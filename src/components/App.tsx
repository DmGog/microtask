import React from "react";
import "../App.css";
import {Filter} from "./Filter/Filter";
import {Input} from "./input/Input";

function App() {

    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]
    //
    // const subscribe = (nameSubscribe: string, countSubscribe: number) => {
    //     alert(`${nameSubscribe} вы подписались, всего подписчиков ${countSubscribe}`)
    // }
    // const share = (nameShare: string, countShare: number) => {
    //     alert(`${nameShare} вы поделились, всего поделилось ${countShare}`)
    // }
    //
    // let [a, setA] = useState(1)
    //
    // const onClickHandler = () => {
    //     setA(++a)
    // }
    // const onClickHandleReset = () => {
    //     setA(a = 1)
    // }

    return (
        <>
            {/*<Header title={"New Header"}/>*/}

            {/*<Body titleForBody={"New Body"}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<Button name={"подписаться"} callBack={() => subscribe("Иван", 20)}/>*/}
            {/*<Button name={"поделиться"} callBack={() => share("Иван", 15)}/>*/}
            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandler}>number</button>*/}
            {/*<button onClick={onClickHandleReset}>reset</button>*/}
            {/*<Footer titleForFooter={"New Footer"}/>*/}
            {/*<Filter/>*/}
            <Input/>

        </>
    );
}

export default App;
