import React, { useEffect, useState } from 'react'
import { Actions } from '../../actions/Actions'
import Header from '../../components/Header/Header'
import InfoContainer from '../../components/InfoContainer/InfoContainer'
import Post from '../../components/Post/Post'
import { MainScreenContainer, MainScreenContent } from './style'

export default function MainScreen() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getAllPosts()
    }, [])

    const getAllPosts = async () => {
        const getAll = await Actions.getAll()
        setPosts(getAll)
    }

    return (
        <MainScreenContainer>
            <MainScreenContent>
                <Header
                    className="main"
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
                    onClickBtn=""
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
