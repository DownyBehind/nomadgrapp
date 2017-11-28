import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    username: user.username
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: username => {
      dispatch(photoActions.getFeed());
      dispatch(photoActions.getSearch());
      dispatch(userActions.getNotifications());
      // dispatch(userActions.getUserProfile(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
