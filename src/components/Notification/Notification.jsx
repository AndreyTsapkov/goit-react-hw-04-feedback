import { Note } from './Notification.styled';
import { PropTypes } from 'prop-types';

export const Notification = ({ note }) => <Note>{note}</Note>;

Notification.propTypes = {
  note: PropTypes.string,
};
