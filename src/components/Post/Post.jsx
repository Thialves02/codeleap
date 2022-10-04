import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { PostContainer, PostContent, PostInfo } from './style'
import PropTypes from 'prop-types'
import moment from 'moment'

export default function Post({ post }) {
    const [postTime, setPostTime] = useState('')

    useEffect(() => {
        setPostTime(timeDifference())
    }, [])

    const timeDifference = () => {
        //Variables of Date now and created post
        var now = new Date().toLocaleString();
        var created = post.created_datetime.substring(0, 19).replace("T", " ")

        //Moment Lib calc to get time difference between post creation and now
        var msDifference = moment(now, "DD/MM/YYYY HH:mm:ss").diff(moment(created, "YYYY-MM-DD HH:mm:ss"));
        var duration = moment.duration(msDifference);
        var timeDifference = Math.floor(duration.asHours()) + moment.utc(msDifference).format(":mm:ss");

        //Variables to store each part of date difference
        var hoursDifference = timeDifference.split(":")[0]
        var daysDifference = (hoursDifference / 24).toFixed(0)
        var minutesDifference = timeDifference.split(":")[1]
        var secondsDifference = timeDifference.split(":")[2]

        //Logic to return the difference
        if (daysDifference > 0) {
            return `${daysDifference} ${daysDifference === '1' ? 'day' : 'days'} `
        } else if (hoursDifference > 0) {
            return `${hoursDifference} ${hoursDifference === '1' ? 'hour' : 'hours'}`
        } else if (minutesDifference > 0) {
            return `${minutesDifference} ${minutesDifference === '1' ? 'minute' : 'minutes'}`
        } else if (secondsDifference > 0) {
            return `${secondsDifference} ${minutesDifference === '1' ? 'second' : 'seconds'}`
        }
    }

    return (
        <PostContainer>
            <Header
                title={post.title}
                className="post"
            />
            <PostInfo>
                <p>@{post.username}</p>
                <p>{postTime} ago</p>
            </PostInfo>
            <PostContent>
                <p>{post.content}</p>
            </PostContent>
        </PostContainer>
    )
}

Post.propTypes = {
    user: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

Post.defaultProps = {
    user: 'Thiago',
    time: '25 minutes ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada, urna eu consectetur fermentum, quam mi luctus neque, vitae convallis ipsum magna et turpis. Quisque vitae mi porta, vulputate nunc in, cursus lectus. Curabitur ut interdum orci. Suspendisse tristique quam in sem lobortis pellentesque. Vivamus id rhoncus tellus, aliquet fringilla dui. Integer pharetra diam nec justo commodo, ac ullamcorper urna malesuada. Ut tincidunt sagittis quam, in varius ipsum lobortis et. Nam ac est finibus tortor iaculis tincidunt. Cras massa risus, suscipit eu tellus id, venenatis tristique elit. Suspendisse lacus nunc, maximus in sodales varius, convallis ut augue.'
}
