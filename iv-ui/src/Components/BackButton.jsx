import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the left arrow icon from React Icons
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      variant="outline-primary" 
      className="d-flex align-items-center custom-button" 
      onClick={() => navigate(-1)}
      style={{ borderRadius: '25px', padding: '10px 20px', margin: '10px' }} // Custom styles for rounded corners and padding
    >
      <FaArrowLeft style={{ marginRight: '8px' }} /> {/* Space between icon and text */}
      Back
    </Button>
  );
}

export default BackButton;
