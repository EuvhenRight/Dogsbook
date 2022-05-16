const UPDATE_MESSAGE_BODY = "UPDATE_MESSAGE_BODY";
const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";

const dialogReduser = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            state.newPostTextMessage = action.body;
            return state;
        case NEW_MESSAGE_BODY:
            let newTextBody = state.newPostTextMessage;
            state.newPostTextMessage = '';
            state.messages.push({ id: 5, message: newTextBody });
            return state;
        default:
            return state;
    };
};

export const newMessageBodyActionCreator = () => ({ type: NEW_MESSAGE_BODY });
export const updateMessageBodyActionCreator = (body) => ({
    type: UPDATE_MESSAGE_BODY, body: body
});

export default dialogReduser;
