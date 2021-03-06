import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


//
// const SidebarContainer = (props) => {
//
//     let state = props.store.getState().sideBar;
//
//     return (
//         <Sidebar sideBar={state}/>
//     )
// }

let mapStateToProps =(state)=>{
    return {
        friends:state.sideBar.friends
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;