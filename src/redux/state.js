const NEW_POST = "NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


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
            ]
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
        }
    }
}

export const addPostActionCreator = () => ({ type: NEW_POST });
export const addTextAreaActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});



export default store;