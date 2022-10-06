export const getUsername = (value) => {
    return {
        type: "username",
        inputValue: value
    }
}

export const getPostTitle = (value) => {
    return {
        type: "title",
        inputValue: value
    }
}

export const getPostContent = (value) => {
    return {
        type: "content",
        inputValue: value
    }
}

export const openUpdateModal = (value) => {
    return {
        type: "updateModal",
        open: value
    }
}
