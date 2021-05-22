import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

class Questions extends Component {
    constructor(props) {
        super(props);
    }

    shuffle(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    renderAnswers(element) {
        let answerArray = [];
        answerArray.push({ right: element.correct_answer });
        console.log(answerArray);
        element.incorrect_answers.map(element => answerArray.push({ wrong: element }));
        const newArray = this.shuffle(answerArray);
        return newArray;
    }

    lastQuestion(index) {
        console.log('this.props.questions.questions.length');
        if (index < this.props.questions.questions.length - 1) {
            return <Link to={'/questions/' + (index + 1)}>Next Question</Link>;
        } else return <Link to="/summary/">Show result</Link>;
    }

    dispatchAnswer() {
        console.log('submit');
    }

    render() {
        return (
            <>
                <h2>Questions</h2>
                {this.props.questions.questions.map((element, index) => {
                    return (
                        <Route exact path={'/questions/' + index} component={Questions}>
                            <div>{element.question}</div>
                            <ul>
                                {this.renderAnswers(element).map(element => (
                                    <li>
                                        <input type="radio" id={Object.keys(element)} onSubmit={this.dispatchAnswer} />
                                        {element.right ? element.right : element.wrong}
                                    </li>
                                ))}
                            </ul>

                            <button type="submit">{this.lastQuestion(index)}</button>
                        </Route>
                    );
                })}
            </>
        );
    }
}

const mapStateToProps = state => {
    return { questions: state };
};

export default connect(mapStateToProps)(Questions);
