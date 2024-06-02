import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {

    let [title, SetTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        SetTitle(event.currentTarget.value)

    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        SetTitle("")
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};

