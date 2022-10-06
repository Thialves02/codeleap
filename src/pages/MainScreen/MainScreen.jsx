import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsername, openUpdateModal } from '../../actions/Actions'
import { Actions } from '../../actions/Api'
import Header from '../../components/Header/Header'
import InfoContainer from '../../components/InfoContainer/InfoContainer'
import Loading from '../../components/Loading/Loading'
import Modal from '../../components/Modal/Modal'
import { ModalContainer } from '../../components/Modal/style'
import Post from '../../components/Post/Post'
import { MainScreenContainer, MainScreenContent } from './style'

export default function MainScreen() {
    const dispatch = useDispatch()
    const [posts, setPosts] = useState(false)
    const [rerender, setRerender] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [currentId, setCurrentId] = useState('')

    //Redux variables
    const updateModalState = useSelector(state => state.openUpdateModal)
    const username = useSelector(state => state.getUsername.inputValue)
    const postTitle = useSelector(state => state.getPostTitle.inputValue)
    const postContent = useSelector(state => state.getPostContent.inputValue)

    useEffect(() => {
        getAllPosts()

        //Set the redux username to the localStorage username
        const username = localStorage.getItem("username");
        dispatch(getUsername(username))
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
            dispatch(openUpdateModal(false))
            setRerender(!rerender)
        } else {
            alert(updated)
        }
    }

    //Open the delet or update modal
    const openModal = (id, type) => {
        type === "delete" ? setOpenDeleteModal(true) : dispatch(openUpdateModal(true))
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
                {
                    posts ?
                        posts?.map((post, index) =>
                            <Post
                                key={index}
                                post={post}
                                deletePost={() => openModal(post.id, "delete")}
                                updatePost={() => openModal(post.id, "update")}
                            />
                        )
                        : <Loading />
                }
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
                updateModalState === true &&
                <ModalContainer>
                    <InfoContainer
                        className="modal"
                        type="modal"
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
                </ModalContainer>
            }
        </MainScreenContainer>
    )
}
