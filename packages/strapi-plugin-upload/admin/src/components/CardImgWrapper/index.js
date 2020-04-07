import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${({ small }) => (small ? '62.8%' : '63.8%')};
  margin-bottom: 6px;
  border-radius: 2px;
  background-color: #f6f6f6;

  .card-control-wrapper {
    display: none;
  }

  &:hover {
    .card-control-wrapper {
      display: flex;
      z-index: 1045;
    }
  }

  ${({ checked }) =>
    checked &&
    `
      .card-control-wrapper {
        display: flex;
      }
  `}
`;

CardImgWrapper.defaultProps = {
  checked: false,
  hasError: false,
};

CardImgWrapper.propTypes = {
  checked: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default CardImgWrapper;
