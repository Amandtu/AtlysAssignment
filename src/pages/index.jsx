import { connect } from "react-redux";

import Login from "./Login";
import Feed from "./Feed/Feed";

function Home({ isLoggedIn }) {
  return <div>{isLoggedIn ? <Feed /> : <Login />}</div>;
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Home);
