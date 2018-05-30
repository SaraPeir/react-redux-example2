import axios from 'axios'

export const SHOW_USERS = 'SHOW_USERS';
export const CHANGE_INPUT_TEXT = 'CHANGE_INPUT_TEXT';

export function showUsers() {

    return (dispatch, getState) => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch( { type: SHOW_USERS, payload: response.data } )
            })
    }

}

export function changeInputText(event) {
    return (dispatch, getState) => {
                dispatch( { type: CHANGE_INPUT_TEXT, text: event.target.value} )
    }
}
