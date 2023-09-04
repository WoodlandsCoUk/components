import Modal from 'micromodal'

const modalConfig = {
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close',
  openClass: 'modal--is-open',
  disableScroll: true,
  disableFocus: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
  debugMode: false
}

Modal.init(modalConfig)
