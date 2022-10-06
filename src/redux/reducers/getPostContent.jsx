const getPostContent = (state = { inputValue: '' }, action) => {
    if (action.type === 'content') {
        const postContent = action.inputValue
        return { ...state, inputValue: postContent }
    } else {
        return state
    }
}

export default getPostContent