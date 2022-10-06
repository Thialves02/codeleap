const getPostTitle = (state = { inputValue: '' }, action) => {
    if (action.type === 'title') {
        const postTitle = action.inputValue
        return { ...state, inputValue: postTitle }
    } else {
        return state
    }
}

export default getPostTitle