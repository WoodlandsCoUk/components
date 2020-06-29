import Modal from 'micromodal'

const modalConfig = {
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close',
  openClass: 'modal--is-open',
  disableScroll: false,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: false
}

Modal.init(modalConfig)
