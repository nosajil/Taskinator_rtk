import React from 'react';
import { Button } from './Button';

export const Todo = ({ item, checkboxAction, buttonAction }) => {
    let textStyle = item.complete ? "complete" : "";

    return (
        <div className="todo" >
            <div className="todoLeft">
                <input
                    type="checkbox"
                    checked={item.complete}
                    onChange={checkboxAction}
                />
                <span className={`todoText ${textStyle}`}>
                    {item.text}
                </span>
            </div>
            <Button
                className="btn btn-danger"
                action={buttonAction}
            >
                Supprimer la tâche
            </Button>
        </div>
    )
}
