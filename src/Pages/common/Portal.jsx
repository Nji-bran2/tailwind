 
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const portalRoot = document.createElement('div');
  portalRoot.id = 'portal-root';
  document.body.appendChild(portalRoot);

  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
