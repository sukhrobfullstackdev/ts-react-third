import React, {useEffect, useState} from 'react';
import DeadlineForm from "../components/DeadlineForm";
import Deadlines from "../components/Deadlines";
import {IDeadline} from "../indeterfaces";

declare var confirm: (question: string) => boolean
export const DeadlinesPage: React.FC = () => {
    const [deadlines, setDeadlines] = useState<Array<IDeadline>>([]);
    useEffect(() => {
        let saved: Array<IDeadline> = [];
        if (localStorage.getItem('deadlines')) {
            saved = JSON.parse(localStorage.getItem('deadlines') || '[]') as Array<IDeadline>;
        }
        setDeadlines(saved);
    }, []);
    useEffect(() => {
        localStorage.setItem('deadlines', JSON.stringify(deadlines));
    }, [deadlines]);
    const addDeadline = (title: string) => {
        const newDeadline: IDeadline = {
            title,
            id: Date.now(),
            completed: false
        }
        // setDeadlines([newDeadline,...deadlines]);
        setDeadlines(deadlines => [newDeadline, ...deadlines]);
    }
    const toggleHandler = (id: number) => {
        setDeadlines(prevState => prevState.map(pre => {
            if (pre.id === id) {
                pre.completed = !pre.completed
            }
            return pre;
        }))
    }
    const removeHandler = (id: number) => {
        const shouldDelete = confirm("Do you really want to delete?");
        if (shouldDelete) {
            setDeadlines(deadlines => deadlines.filter(deadline => deadline.id !== id))
        }
    }
    return (
        <>
            <DeadlineForm addDeadline={addDeadline}/>
            <Deadlines toggleHandler={toggleHandler} removeHandler={removeHandler} deadlines={deadlines}/>
        </>
    );
};