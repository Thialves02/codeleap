import React, { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "react-use";

const Context = createContext();
export default function CtxApp({ children }) {
    const [username, setUsername, userNameRemove] = useLocalStorage('username', null)
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    return (
        <Context.Provider
            value={{ username, setUsername, userNameRemove, postTitle, setPostTitle, postContent, setPostContent, openUpdateModal, setOpenUpdateModal }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, CtxApp };
