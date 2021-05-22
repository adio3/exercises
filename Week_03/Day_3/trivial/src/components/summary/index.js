import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

class Summary extends Component{
    constructor(props) {
        super(props);
    }

    
}

const mapStateToProps = state => {return { questions: state} }

export default connect(mapStateToProps)(Summary)