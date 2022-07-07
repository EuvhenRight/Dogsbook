import React, {useEffect, useState} from 'react';
import classes from './Profile.module.css';


// class ProfileStatus extends React.Component {
//     state = { // локальный стейт, чтобы не делать изменения на основном стейте, делает их в компоненте
//         editMode: false
//     };
//
//     activateEditMode() {
//         debugger
//         this.setState({ // Хук setState - ассихронный, обновляет локальный стейт
//             editMode: true
//         })
//     }
//
//     deactivateEditMode() {
//         this.setState({
//             editMode: false
//         })
//     }
//
//     render() {
//
//         return (
//             <div>
//                 {!this.state.editMode &&
//                     <div>
//                         <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
//                         {/* bind - Метод bind() создаёт новую функцию, которая при вызове устанавливает в
//                         качестве контекста выполнения this предоставленное значение. В метод также передаётся
//                         набор аргументов, которые будут установлены перед переданными в
//                         привязанную функцию аргументами при её вызове.*/}
//                     </div>
//                 }
//                 {this.state.editMode &&
//                     <div>
//                         <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
//                                value={this.props.status}></input>
//                     </div>     // autoFocus - убирает автофокус с данного елемента
//                     // onBlur - убираешь наведение мишью и editMode становиться false,
//                 }
//             </div>
//         )
//     }
// }


const ProfileStatus = (props) => {

    let [editMode, setActivateEditMode] = useState(false);

    let [status, setUpdateStatus] = useState(props.status);

    useEffect(() => {
        setUpdateStatus(props.status)
    }, [props.status]);


    const activateMode = () => {
        setActivateEditMode(true);
    };

    const deActivateMode = () => {
        setActivateEditMode(false);
        props.updateStatusThunk(status)

    };
    const updateStatus = (e) => {
        setUpdateStatus(e.currentTarget.value)
    };


    return (
    
        <div>
            {!editMode ? (
                <div><b>Status:</b>
                    <span  className={classes.profileStatus}
                        onDoubleClick={activateMode}>{status === "" ? "----" : status}</span>
                    {/* Зробив на хуке, треба тільки на обработчик кидати ффункцію, та добавляти булево значення */}
                </div>
            ) : (<div>
                    <input onChange={updateStatus}
                           autoFocus={true}
                           onBlur={deActivateMode}
                           value={status}></input>
                </div>     // autoFocus - убирает автофокус с данного елемента
                // onBlur - убираешь наведение мишью и editMode становиться false,
            )}
        </div>
    )
}

export default ProfileStatus;