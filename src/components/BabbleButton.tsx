import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; // Positioning for the border line
`;

const Button = styled.button`
  background: rgba(144, 238, 144, 0.2); // Light green with glass effect
  border: 2px solid #90ee90; // Light green
  border-radius: 50%;
  width: 150px;
  height: 150px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const BorderLine = styled.div`
  position: absolute;
  top: -10px; // Adjust as needed
  left: -10px; // Adjust as needed
  right: -10px; // Adjust as needed
  bottom: -10px; // Adjust as needed
  border: 2px solid rgba(144, 238, 144, 0.8); // Adjust color and transparency
  border-radius: 50%; // Make it circular to match the button
  pointer-events: none; // Prevent interference with button clicks
`;

const BabbleButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <ButtonContainer>
            <BorderLine />
            <Button onClick={onClick}>Babble</Button>
        </ButtonContainer>
    );
};

export default BabbleButton;
