import React, { useContext, useEffect, useState } from 'react'
import { Actions } from '../../actions/Actions'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import InfoContainer from '../../components/InfoContainer/InfoContainer'
import Modal from '../../components/Modal/Modal'
import { ModalContainer } from '../../components/Modal/style'
import Post from '../../components/Post/Post'
import { Context } from '../../context/CtxApp'
import { MainScreenContainer, MainScreenContent } from './style'

export default function MainScreen() {
    const { username, postTitle, postContent } = useContext(Context)
    const [posts, setPosts] = useState([])
    const [rerender, setRerender] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const [currentId, setCurrentId] = useState('')

    useEffect(() => {
        getAllPosts()
    }, [rerender])

    const getAllPosts = async () => {
        const getAll = await Actions.getAll()

        //Check if the request was successfully completed
        if (getAll) {
            setPosts(getAll)
        } else {
            alert(getAll)
        }
    }

    const createPost = async () => {
        const body = {
            "username": username,
            "title": postTitle,
            "content": postContent,
        }

        const created = await Actions.post(body)

        //Check if the request was successfully completed
        if (created) {
            setRerender(!rerender)
        } else {
            alert(created)
        }
    }

    const deletePost = async () => {
        const deleted = await Actions.delete(currentId)

        //Check if the request was successfully completed
        if (deleted) {
            setOpenDeleteModal(false)
            setRerender(!rerender)
        } else {
            alert(deleted)
        }
    }

    const editPost = async () => {
        const body = {
            "title": postTitle,
            "content": postContent,
        }

        const updated = await Actions.update(currentId, body)

        //Check if the request was successfully completed
        if (updated) {
            setOpenUpdateModal(false)
            setRerender(!rerender)
        } else {
            alert(updated)
        }
    }

    //Open the delet or update modal
    const openModal = (id, type) => {
        type === "delete" ? setOpenDeleteModal(true) : setOpenUpdateModal(true)
        setCurrentId(id)
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
                        deletePost={() => openModal(post.id, "delete")}
                        updatePost={() => openModal(post.id, "update")}
                    />
                )}
            </MainScreenContent>
            {
                openDeleteModal === true &&
                <Modal
                    label="Are you sure you want to delete this post?"
                    closeModal={() => setOpenDeleteModal(false)}
                    deletePost={deletePost}
                />
            }
            {
                openUpdateModal === true &&
                <ModalContainer>
                    <InfoContainer
                        className="main"
                        title="Edit Item"
                        inputLabel="Title"
                        inputName="postTitle"
                        inputPlaceholder="Hello World"
                        textareaLabel="Content"
                        textareaName="postContent"
                        textareaPlaceholder="Content here"
                        buttonLabel="SAVE"
                        onClickBtn={editPost}
                    />
                    {/* <Button
                            label={"teste"}
                        /> */}
                </ModalContainer>
            }
        </MainScreenContainer>
    )
}
