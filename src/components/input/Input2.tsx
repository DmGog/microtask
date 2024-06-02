import React, {ChangeEvent} from "react";

type Input2PropsType = {
    title: string
    SetTitle: (title: string) => void
}

export const Input2 = (props: Input2PropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.SetTitle(event.currentTarget.value)
    }
    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    );
};

