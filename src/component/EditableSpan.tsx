import React, {ChangeEvent, useState} from 'react';


type PropsType = {
    title:string
}

const EditableSpan = (props: PropsType) => {

    let [edit, setEdit] = useState(false)
    let [title, setTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onDoubleClickHandler =() => {
        setEdit(!edit)
    }
    return (

        edit
       ? <input value={props.title}/>
       : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>

    );
};

export default EditableSpan;