const openUpdateModal = (state = false, action) => {
    if (action.type === 'updateModal') {
        const opened = action.open
        return opened
    } else {
        return state
    }
}

export default openUpdateModal