import React, {Component} from "react";
import {connect} from "react-redux";
import {latestNews, otherNews} from "../actions";
import {bindActionCreators} from "redux";

//COMPONENTS
import LatestNews from "../components/home/latest";
import OtherNews from "../components/home/otherNews";

class Home extends Component {

    componentDidMount() {
        this.props.latestNews();
        this.props.otherNews();
    }

    render() {
        return (
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews otherNews={this.props.articles.other}/>
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
    return bindActionCreators({latestNews, otherNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);