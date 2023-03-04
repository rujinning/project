import { connect } from "react-redux";
import { postordertag } from '../actions/app'
import OrderStatus from "../components/orderStatus";
const mapStateToProps = (state) => ({
    response: state.app.responsePostOrderTag
});
const LandingContainer = connect(
    mapStateToProps,
    {
        postordertag
    }
)(OrderStatus);
export default LandingContainer;