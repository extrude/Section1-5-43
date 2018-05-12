import ReactModal from 'react-modal';

<ReactModal
  /*
    Boolean describing if the modal should be shown or not.
  */
  isOpen={false}
  /*
    Function that will be run after the modal has opened.
  */
  onAfterOpen={handleAfterOpenFunc}
  /*
    Function that will be run when the modal is requested to be closed (either by clicking on overlay or pressing ESC)
    Note: It is not called if isOpen is changed by other means.
  */
  onRequestClose={handleRequestCloseFunc}
  /*
    Number indicating the milliseconds to wait before closing the modal.
  */
  closeTimeoutMS={0}
  /*
    Object indicating styles to be used for the modal.
    It has two keys, `overlay` and `content`.  See the `Styles` section for more details.
  */
  style={{ overlay: {}, content: {} }}
  /*
    String indicating how the content container should be announced to screenreaders
  */
  contentLabel="Example Modal"
  /*
     String className to be applied to the portal.
     See the `Styles` section for more details.
  */
  portalClassName="ReactModalPortal"
  /*
     String className to be applied to the overlay.
     See the `Styles` section for more details.
  */
  overlayClassName="ReactModal__Overlay"
  /*
     String className to be applied to the modal content.
     See the `Styles` section for more details.
  */
  className="ReactModal__Content"
  /*
     String className to be applied to the document.body (must be a constant string).
     See the `Styles` section for more details.
  */
  bodyOpenClassName="ReactModal__Body--open"
  /*
     String className to be applied to the document.html (must be a constant string).
     This attribute is `null` by default.
     See the `Styles` section for more details.
  */
  htmlOpenClassName="ReactModal__Html--open"
  /*
    Boolean indicating if the appElement should be hidden
  */
  ariaHideApp={true}
  /*
    Boolean indicating if the modal should be focused after render
  */
  shouldFocusAfterRender={true}
  /*
    Boolean indicating if the overlay should close the modal
  */
  shouldCloseOnOverlayClick={true}
  /*
    Boolean indicating if pressing the esc key should close the modal
    Note: By disabling the esc key from closing the modal you may introduce an accessibility issue.
  */
  shouldCloseOnEsc={true}
  /*
    Boolean indicating if the modal should restore focus to the element that
    had focus prior to its display.
  */
  shouldReturnFocusAfterClose={true}
  /*
    String indicating the role of the modal, allowing the 'dialog' role to be applied if desired.
  */
  role="dialog"
  /*
    Function that will be called to get the parent element that the modal will be attached to.
  */
  parentSelector={() => document.body}
  /*
    Additional aria attributes (optional).
  */
  aria={{
    labelledby: "heading",
    describedby: "full_description"
  }}
  /*
    Overlay ref callback.
  */
  overlayRef={setOverlayRef}
  /*
    Content ref callback.
  */
  contentRef={setContentRef}
/>