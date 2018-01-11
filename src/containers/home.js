import React, {Component} from "react";
import {connect} from "react-redux";
import {latestNews} from "../actions";
import {bindActionCreators} from "redux";

//COMPONENTS
import LatestNews from "../components/home/latest";

class Home extends Component {

    render() {
        return (
            <div>
                <LatestNews/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({latestNews},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);