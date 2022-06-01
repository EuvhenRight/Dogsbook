const UPDATE_MESSAGE_BODY = "UPDATE_MESSAGE_BODY";
const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";

let initialState = {
        dialogs: [
            { id: 1, name: 'Vasya', avatar: "https://кутята.рф/media/breed/tmpimages/20200520184257894509_697HzeI.jpg.1100x0_q85_crop-scale_upscale.jpg" },
            { id: 2, name: 'Harley', avatar: "https://www.look4dog.com/img/thumbs/crop/w350h350q80/breeds/norwich-terrier-32679.jpeg" },
            { id: 3, name: 'Mira', avatar: "https://tvaryny.com/sites/default/files/styles/1000x1000/public/images/breed/144831/gallery-144831_1.jpg?itok=jyArEa-c" },
            { id: 4, name: 'Richi', avatar:  "https://thumbs.dreamstime.com/b/smiling-shiba-inu-dog-cute-portrait-looking-camera-isolated-yellow-background-206275827.jpg"},
            { id: 5, name: 'Ken' }
        ],
        messages: [
            { id: 1, message: 'How are you?' },
            { id: 2, message: 'Hi' },
            { id: 3, message: 'Yes' },
            { id: 4, message: 'No' },
        ],
        newPostTextMessage: ''
    };

const dialogReducer = (state= initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            return {
                ...state,
            newPostTextMessage: action.body
        };
        case NEW_MESSAGE_BODY:
            let newTextBody = state.newPostTextMessage;
            return {
                ...state,
                newPostTextMessage: '',
                messages: [...state.messages, {id: 5, message: newTextBody}]
         };
        default:
            return state;
    }
};

export const newMessageBodyActionCreator = () => ({ type: NEW_MESSAGE_BODY });
export const updateMessageBodyActionCreator = (body) => ({
    type: UPDATE_MESSAGE_BODY, body: body
});

export default dialogReducer;
