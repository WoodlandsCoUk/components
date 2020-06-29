import Modal from 'micromodal'

const modalConfig = {
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close',
  openClass: 'modal--is-open',
  disableScroll: false,
  disableFocus: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
  debugMode: false
}

Modal.init(modalConfig)
