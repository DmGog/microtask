import React, {ChangeEvent, useState} from "react";
import {FullInput} from "./FullInput";
import {Input2} from "./Input2";
import {Button} from "./Button";

export const Input = () => {
    const [message, setMessage] = useState([
            {message: "message1"},
            {message: "message2"},
            {message: "message3"},
            {message: "message4"},
            {message: "message5"}
        ]
    )

    let [title, SetTitle] = useState("")

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callbackButtonHandler = () => {
        addMessage(title)
        SetTitle("")
    }


    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input2 SetTitle={SetTitle} title={title}/>
            <Button name={"+"} callback={callbackButtonHandler}/>
            <>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </>
        </div>
    );
};
