import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProfileById } from '../../actions/profile'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const Profile = ({ getProfileById, match, auth, profile: { profile, loading } }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById])
  return (
    <Fragment>
      {profile === null || loading ? <Spinner /> : <Fragment>
        <Link to='/profiles' className="btn btn-light">
          Back To Profile
        </Link>
        {
          auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (
            <Link to='/edit-profile' className="btn btn-dark">
              Edit Profile
            </Link>
          )
        }
      </Fragment>}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile)
