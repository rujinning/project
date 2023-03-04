import { connect } from "react-redux";
import { IntlProvider } from 'react-intl';
const mapStateToProps = (state) => {
    const { local, message } = state.intl;
    return { local, message };
};
export default connect(mapStateToProps)(IntlProvider);
// 需加切换语言的logic