import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (
    <div>
        <h1>HOME</h1>
        <p>Welcome home!</p>
        <button onClick={() => props.changePage()}>Go to about page via Redux</button>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)