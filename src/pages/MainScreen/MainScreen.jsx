import React, { useContext, useEffect, useState } from 'react'
import { Actions } from '../../actions/Actions'
import Header from '../../components/Header/Header'
import InfoContainer from '../../components/InfoContainer/InfoContainer'
import Post from '../../components/Post/Post'
import { Context } from '../../context/CtxApp'
import { MainScreenContainer, MainScreenContent } from './style'

export default function MainScreen() {
    const { username, postTitle, postContent } = useContext(Context)
    const [posts, setPosts] = useState([])
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        getAllPosts()
    }, [rerender])

    const getAllPosts = async () => {
        const getAll = await Actions.getAll()
        setPosts(getAll)
    }

    const createPost = async () => {
        const body = {
            "username": username,
            "title": postTitle,
            "content": postContent,
        }

        const create = await Actions.post(body)
        setRerender(true)
        console.log(create)
    }

    return (
        <MainScreenContainer>
            <MainScreenContent>
                <Header
                    className="main"
                    type="main"
                    title="CodeLeap Network"
                />
                <InfoContainer
                    className="main"
                    title="What's on your mind?"
                    inputLabel="Title"
                    inputName="postTitle"
                    inputPlaceholder="Hello World"
                    textareaLabel="Content"
                    textareaName="postContent"
                    textareaPlaceholder="Content here"
                    buttonLabel="CREATE"
                    onClickBtn={createPost}
                />
                {posts?.map((post, index) =>
                    <Post
                        key={index}
                        post={post}
                    />
                )}
            </MainScreenContent>
        </MainScreenContainer>
    )
}
