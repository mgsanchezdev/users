import ClipLoader from 'react-spinners/ClipLoader';
import './loading.css';

const Loading = () => (
  <div className="loader-wrapper">
    <ClipLoader color="black" size={150} />
  </div>
);

export default Loading;
