const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_DATA = "UPDATE-NEW-MESSAGE-DATA";
const initialState = {
    textNewMessageData: '',
    dialogItems: [
        {
            name: 'Name 1',
            id: 1,
            img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'
        },
        {
            name: 'Name 2',
            id: 2,
            img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'
        },
        {
            name: 'Name 3',
            id: 3,
            img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'
        },
        {
            name: 'Name 4',
            id: 4,
            img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'
        },
    ],
    messageItems: [
        {massage: 'Massage 1', id: 1, interlocutor: true},
        {massage: 'Massage 2', id: 2, interlocutor: true},
        {massage: 'Massage 3', id: 3, interlocutor: false},
        {massage: 'Massage 4', id: 4, interlocutor: true}
    ]
};
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});
export const updateNewMessageDataActionCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_DATA,
    newText: newText,
});
export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messageItems.push({
                massage: state.textNewMessageData,
                id: 4,
                interlocutor: false
            });
            return state;
        case UPDATE_NEW_MESSAGE_DATA:
            state.textNewMessageData = action.newText;
            return state;
        default:
            return state;
    }
};