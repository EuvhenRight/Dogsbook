import Sidebar from "../components/Sidebar/Sidebar";


let Appstate = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, my famos dog!', likesCount: 100 },
            { id: 2, message: 'I love you!', likesCount: 150 },
            // { id: 3, message: 'I love you!', likesCount: 150 },
            // { id: 4, message: 'I love you!', likesCount: 150 }
        ]
    },
    dialogPage: {
        dialogs: [
            { id: 1, name: 'Vasya', avatar: "img" },
            { id: 2, name: 'Harley' },
            { id: 3, name: 'Mira' },
            { id: 4, name: 'Richi' },
            { id: 5, name: 'Ken' }
        ],
        messages: [
            { id: 1, message: 'How are you?' },
            { id: 2, message: 'Hi' },
            { id: 3, message: 'You the best!' },
            { id: 4, message: 'Nice' },
            { id: 5, message: 'Beautyfull!' }
        ]
    },
    sideBar: {
        friends: [
            { id: 1, name: 'Vasya', avatar: "img" },
            { id: 2, name: 'Harley', avatar: "img" },
            { id: 3, name: 'Mira', avatar: "img" }
        ]
    }
}

export default Appstate;