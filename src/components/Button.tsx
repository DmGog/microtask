import React from "react";

type ButtonPropsType = {  /*тип универсальной кнопки*/
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    /*данные для обычных кнопок*/

    /*   const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
           alert("hello friend")
       }
       const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
           alert("Hello friend, welcome to group")
       }*/

    /*  const onClickHandler = (name: string) => {
          alert(name)
      }

      const foo1 = () => {
          console.log(100200)
      }
      const foo2 = (count: number) => {
          console.log(count)
      }*/

    /*данные для универсальной кнопки*/

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div className={"buttonMe"}>

            {/*обычные кнопки*/}

            {/*  <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("hello friend")}>Click Me</button>
            <button
                onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Hello friend, welcome to group")}>Click
                Me Two
            </button>

            <button onClick={foo1}>1</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => foo2(100200)}>2</button>*/}

            {/*универсальная кнопка*/}

            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

