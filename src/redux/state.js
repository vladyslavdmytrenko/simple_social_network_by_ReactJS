import {rerender} from '../render';

const state = {
    friends:[
        {name:'Name 1', id:1, img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'},
        {name:'Name 2', id:2, img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'},
        {name:'Name 3', id:3, img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'},
        {name:'Name 4', id:4, img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'},
    ],
    dataProfile:{
        textNewPostData:'',
        dataProfileItems:[
        {name:'Name 1', likes: 3, message:'Hello', id:1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'},
        {name:'Name 2', likes: 5, message:'Hello', id:2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'},
        {name:'Name 3', likes: 0, message:'Hello', id:3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'},
    ]},
    dataDialogs:[
        {name:'Name 1', id:1, img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'},
        {name:'Name 2', id:2, img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'},
        {name:'Name 3', id:3, img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'},
        {name:'Name 4', id:4, img: 'https://image.shutterstock.com/image-vector/user-sign-icon-person-symbol-260nw-229318795.jpg'},
    ],
    dataMessages:{
        textNewMessageData: '',
        dataMessagesItems:[
            {massage:'Massage 1', id:1, interlocutor: true},
            {massage:'Massage 2', id:2, interlocutor: true},
            {massage:'Massage 3', id:3, interlocutor: false},
            {massage:'Massage 4', id:4, interlocutor: true}
        ]}
};

export let addPost = () => {
    state.dataProfile.dataProfileItems.push({name:'Name 1', likes: 3, message:state.dataProfile.textNewPostData, id:1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'});
    state.dataProfile.textNewPostData = '';
    rerender(state)
};
export let updateNewPostData= (newText) => {
    state.dataProfile.textNewPostData = newText;
    rerender(state);
};

export let addMessage = () => {
    state.dataMessages.dataMessagesItems.push({massage:state.dataMessages.textNewMessageData, id:1, interlocutor: false});
    state.dataMessages.textNewMessageData = '';
    rerender(state);
};
export let updateNewMessageData = (newText) => {
    state.dataMessages.textNewMessageData = newText;
    rerender(state);
};
export default state