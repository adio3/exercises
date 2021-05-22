
import { connect } from 'react-redux';

const fetching = amount => {
    console.log('in da fetch');
    const url = 'https://opentdb.com/api.php?amount=' + amount;
    console.log(url);
    fetch(url)
        .then(res => res.json())

        .then(questions => {
            this.setState( {questions: questions.results})
        });
};

const mapStateToProps = state => {
    return { questions: state };
};

export default connect(mapStateToProps)(fetching);