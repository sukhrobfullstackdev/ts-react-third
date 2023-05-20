import React, {useRef} from 'react';
interface IPropsDeadline {
    addDeadline(title: string): void
}
const DeadlineForm: React.FC<IPropsDeadline> = ({addDeadline}) => {
    // const [title, setTitle] = useState<string>("");
    //
    // const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // }
    const ref = useRef<HTMLInputElement>(null);
    const keyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            addDeadline(ref.current!.value);
            ref.current!.value = "";
            // console.log(title);
            // setTitle("");
        }
    }

    return (
        <div className={"input-field"}>
            <input
                // value={title}
                onKeyPress={keyPress}
                ref={ref}
                //onChange={changeTitle}
                type={"text"} id={"title"}/>
            <label htmlFor={"title"} className={"active"}>The title of deadline:</label>
        </div>
    );
};

export default DeadlineForm;