import {
  StatisticsWrapper,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';
import { PropTypes } from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <StatisticsWrapper>
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {totalFeedback}</StatisticsItem>
        <StatisticsItem>
          Positive Feedback: {good === 0 ? 0 : positiveFeedbackPercentage}%
        </StatisticsItem>
      </StatisticsList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
