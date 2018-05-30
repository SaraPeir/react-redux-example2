import { CHANGE_INPUT_TEXT } from '../actions'

const initialState = {
    inputValue: 'Ciaooo'
}

export function changeInputText(state = initialState, action) {

    switch (action.type) {
        case CHANGE_INPUT_TEXT:
            return Object.assign({}, state, {inputValue: action.text})
        default:
            return state
    }

}
