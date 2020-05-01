import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {friendsReducer} from "./friends-reducer";

let reducers = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogReducer,
    friends: friendsReducer
});
let store = createStore(reducers);

export default store