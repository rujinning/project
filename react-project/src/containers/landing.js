import { connect } from "react-redux";
import { postordertag } from '../actions/app'
import Landing from "../components/landing";
const mapStateToProps = (state) => ({
    response: state.app.responsePostOrderTag
});
const LandingContainer = connect(
    mapStateToProps,
    {
        postordertag
    }
)(Landing);
export default LandingContainer;