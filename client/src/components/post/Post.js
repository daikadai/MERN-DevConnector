import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../../actions/post'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import { Link } from 'react-router-dom'

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost])
  return loading || post === null ? <Spinner /> : <Fragment>
    <Link to='/posts' className="btn">
      Back To Posts
    </Link>
    <PostItem post={post} showActions={false} />
  </Fragment>
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)
