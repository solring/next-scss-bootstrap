import PropTypes from 'prop-types';
const Icon = ({ name, ...props}) => (
  <span className={`material-icons ${props.className}`}>
    {name}
  </span>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon;