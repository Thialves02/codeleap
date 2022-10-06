import getUsername from './getUsername'
import getPostContent from './getPostContent'
import getPostTitle from './getPostTitle'
import openUpdateModal from './openUpdateModal'
import { combineReducers } from 'redux'

const AllRedducers = combineReducers({
    getUsername,
    getPostContent,
    getPostTitle,
    openUpdateModal
})

export default AllRedducers;