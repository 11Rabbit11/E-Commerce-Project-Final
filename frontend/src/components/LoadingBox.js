import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  // Render the loading spinner
  return (
    <Spinner animation="border" role="status">
      {/* Display a visually hidden text for accessibility */}
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}