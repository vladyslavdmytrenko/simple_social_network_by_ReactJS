const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_DATA = "UPDATE-NEW-POST-DATA";
const initialState =  {
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
};
export const addPostActionCreator = () => ({
    type: ADD_POST,
});
export const updateNewPostDataActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_DATA,
    newText: newText,
});
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            state.dataProfileItems.push({
                name: 'Name 1',
                likes: 3,
                message: state.textNewPostData,
                id: 1,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRovSSDmSPldW50frhQXofGaJOWTN9nWwrDdhrn77Bl0gt75nyv&usqp=CAU'
            });
            return state;
        case UPDATE_NEW_POST_DATA:
            state.textNewPostData = action.newText;
            return state;
        default:
            return state;
    }
};