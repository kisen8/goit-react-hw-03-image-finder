import { Overlay, ModalStyled } from 'components/Modal/ModalStyled';
import PropTypes from 'prop-types';

export const Modal = ({ largeImg, about, onModalClose }) => {
  return (
    <Overlay>
      <ModalStyled onClick={onModalClose}>
        <img src={largeImg} alt={about} />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
