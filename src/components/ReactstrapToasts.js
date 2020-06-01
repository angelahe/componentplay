import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ReactstrapToasts = (props) => {
  return (
    <div>
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a white background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a gridded background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a primary background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-secondary my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a secondary background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-success my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a success background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a danger background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-warning my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a warning background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on an info background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-dark my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a dark background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded" style={{ background: 'black' }}>
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a black background — check it out!
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ReactstrapToasts;

/*
Toast.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Controls the transition of the toast fading in and out
  // See Fade for more details
  transition: PropTypes.shape(Fade.propTypes),
}
*/
