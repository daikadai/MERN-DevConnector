import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/post'
import Spinner from '../layout/Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'

const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts])

  return loading ? <Spinner /> : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <div className="lead">
        <i className="fas fa-user"></i> Welcome to the comunity
      </div>
      <PostForm />
      <div className="posts">
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts);
