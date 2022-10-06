const getUsername = (state = { inputValue: '' }, action) => {
    if (action.type === 'username') {
        const username = action.inputValue
        return { ...state, inputValue: username }
    } else {
        return state
    }

}

export default getUsername