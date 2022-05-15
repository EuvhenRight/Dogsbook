const NEW_POST = "NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_MESSAGE_BODY = "UPDATE_MESSAGE_BODY";
const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";


let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, my famos dog!', likesCount: 100 },
                { id: 2, message: 'I love you!', likesCount: 150 },
                // { id: 3, message: 'I love you!', likesCount: 150 },
                // { id: 4, message: 'I love you!', likesCount: 150 }
            ],
            newPostText: ''
        },

        dialogPage: {
            dialogs: [
                { id: 1, name: 'Vasya', avatar: "https://кутята.рф/media/breed/tmpimages/20200520184257894509_697HzeI.jpg.1100x0_q85_crop-scale_upscale.jpg" },
                { id: 2, name: 'Harley', avatar: "https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/norwich-terrier-32679.jpeg" },
                { id: 3, name: 'Mira', avatar: "https://tvaryny.com/sites/default/files/styles/1000x1000/public/images/breed/144831/gallery-144831_1.jpg?itok=jyArEa-c" },
                { id: 4, name: 'Richi' },
                { id: 5, name: 'Ken' }
            ],
            messages: [
                { id: 1, message: 'How are you?' },
                { id: 2, message: 'Hi' },
                { id: 3, message: 'Yes' },
                { id: 4, message: 'No' },
            ],
            newPostTextMessage: ''
        },
        sideBar: {
            friends: [
                { id: 1, name: 'Vasya', avatar: "https://кутята.рф/media/breed/tmpimages/20200520184257894509_697HzeI.jpg.1100x0_q85_crop-scale_upscale.jpg" },
                { id: 2, name: 'Harley', avatar: "https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/norwich-terrier-32679.jpeg" },
                { id: 3, name: 'Mira', avatar: "https://tvaryny.com/sites/default/files/styles/1000x1000/public/images/breed/144831/gallery-144831_1.jpg?itok=jyArEa-c" }
            ]
        }
    },

    _callSubcriber() {

    },

    getstate() {
        return this._state;
    },

    subscriber(observer) {
        this._callSubcriber = observer;
    },



    newPost() {
        let newPostmessage = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPostmessage);
        this._state.profilePage.newPostText = '';
        this._callSubcriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubcriber(this._state);
    },

    dispatch(action) {
        if (action.type === NEW_POST) {
            let newPostmessage = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPostmessage);
            this._state.profilePage.newPostText = '';
            this._callSubcriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubcriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_BODY) {
            this._state.dialogPage.newPostTextMessage = action.body;
            this._callSubcriber(this._state);
        } else if (action.type === NEW_MESSAGE_BODY) {
            let newTextBody = this._state.dialogPage.newPostTextMessage;
            this._state.dialogPage.newPostTextMessage = '';
            this._state.dialogPage.messages.push({ id: 5, message: newTextBody });
            this._callSubcriber(this._state);

        }
    }
}

export const addPostActionCreator = () => ({ type: NEW_POST });
export const addTextAreaActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const newMessageBodyActionCreator = () => ({ type: NEW_MESSAGE_BODY });
export const updateMessageBodyActionCreator = (body) => ({
    type: UPDATE_MESSAGE_BODY, body: body
});


export default store;