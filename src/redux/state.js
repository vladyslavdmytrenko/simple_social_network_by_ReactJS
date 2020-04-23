const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_DATA = "UPDATE-NEW-POST-DATA";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_DATA = "UPDATE-NEW-MESSAGE-DATA";

export const addPost = () => ({
    type: 'ADD-POST',
});
export const updateNewPostData = (newText) => ({
    type: 'UPDATE-NEW-POST-DATA',
    newText: newText,
});
export const addMessage = () => ({
    type: 'ADD-MESSAGE',
});
export const updateNewMessageData = (newText) => ({
    type: 'UPDATE-NEW-MESSAGE-DATA',
    newText: newText,
});

const store = {
    _state: {
        friends: [
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
        dataProfile: {
            textNewPostData: '',
            dataProfileItems: [
                {
                    name: 'Name 1',
                    likes: 3,
                    message: 'Hello',
                    id: 1,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'
                },
                {
                    name: 'Name 2',
                    likes: 5,
                    message: 'Hello',
                    id: 2,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'
                },
                {
                    name: 'Name 3',
                    likes: 0,
                    message: 'Hello',
                    id: 3,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'
                },
            ]
        },
        dataDialogs: [
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
        dataMessages: {
            textNewMessageData: '',
            dataMessagesItems: [
                {massage: 'Massage 1', id: 1, interlocutor: true},
                {massage: 'Massage 2', id: 2, interlocutor: true},
                {massage: 'Massage 3', id: 3, interlocutor: false},
                {massage: 'Massage 4', id: 4, interlocutor: true}
            ]
        }
    },
    getState() {
      return this._state;
    },
    _rerender(state) {
        console.log(state);
    },
    addPost() {
        this._state.dataProfile.dataProfileItems.push({
            name:'Name 1', likes: 3,
            message:this._state.dataProfile.textNewPostData,
            id:1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'
        });
        this._state.dataProfile.textNewPostData = '';
        this._rerender(this._state);
    },
    updateNewPostData(newText) {
        this._state.dataProfile.textNewPostData = newText;
        this._rerender(this._state);
    },
    addMessage() {
        this._state.dataMessages.dataMessagesItems.push({massage:this._state.dataMessages.textNewMessageData, id:1, interlocutor: false});
        this._state.dataMessages.textNewMessageData = '';
        this._rerender(this._state);
    },
    updateNewMessageData(newText) {
        this._state.dataMessages.textNewMessageData = newText;
        this._rerender(this._state);
    },
    subscribe(observer) {
        this._rerender = observer;
    },
    dispatch(action) {
        if  (ADD_POST === action.type) {
            this.addPost();
        }else if (UPDATE_NEW_POST_DATA === action.type){
            this.updateNewPostData(action.newText);
        }else if (ADD_MESSAGE === action.type) {
            this.addMessage();
        }else if (UPDATE_NEW_MESSAGE_DATA === action.type) {
            this.updateNewMessageData(action.newText);
        }
    }
};

export default store