import { Button, FeedbackWrapper } from './FeedbackOptions.styled';
import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapper>
      {options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        );
      })}
    </FeedbackWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
