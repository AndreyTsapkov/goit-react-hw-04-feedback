import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const { name } = event.currentTarget;
    console.log(event.currentTarget);

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <AppContainer>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleIncrement}
            />
          </Section>
          {this.countTotalFeedback() === 0 ? (
            <Notification note={'There is no feedback'} />
          ) : (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                totalFeedback={this.countTotalFeedback()}
                positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          )}
        </AppContainer>
      </>
    );
  }
}
