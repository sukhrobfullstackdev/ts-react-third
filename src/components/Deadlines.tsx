import React from 'react';
import {IDeadline} from "../indeterfaces";

type tDeadlines = {
    deadlines: Array<IDeadline>
    toggleHandler?(id: number): void
    removeHandler?(id: number): void
}
const Deadlines: React.FC<tDeadlines> = ({deadlines, toggleHandler, removeHandler}) => {
    if (deadlines.length === 0) {
        return <p className={"center"}>There is no deadlines!</p>
    }
    const remove = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        if (removeHandler) {
            removeHandler(id);
        }
    }
    return (
        <ul>
            {deadlines && deadlines.map(deadline => {
                    const classes = ["deadline"];
                    if (deadline.completed) {
                        classes.push("completed");
                    }
                    return (
                        <li className={classes.join(" ")} key={deadline.id}>
                            <label>
                                <input type="checkbox" checked={deadline.completed}
                                       onChange={toggleHandler!.bind(null, deadline.id)}/>
                                <span>{deadline.title}</span>
                                <i className={"material-icons red-text"}
                                   onClick={event => remove(event, deadline.id)}>delete</i>
                            </label>
                        </li>
                    )
                }
            )}
        </ul>
    );
};

export default Deadlines;