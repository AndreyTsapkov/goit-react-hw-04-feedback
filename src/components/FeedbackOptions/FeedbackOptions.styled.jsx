import styled from '@emotion/styled';

export const FeedbackWrapper = styled.div`
  margin-bottom: 25px;
`;

export const Button = styled.button`
  width: 75px;
  height: 35px;
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover,
  :focus {
    background-color: #c300ff;
    color: #fff;
  }
`;
