import Sortable from 'sortablejs'

const sortableGalleries = document.querySelectorAll('.gallery__sortable')

// TODO: this is a bit tightly coupled to the laravel app for my taste rn -
// plz refactor
sortableGalleries.forEach(sortableGallery => {
  if (
    sortableGallery.dataset.callback &&
    sortableGallery.dataset.callback === 'photo'
  ) {
    Sortable.create(sortableGallery, {
      onUpdate: function (e) {
        console.log('move photo', e.oldIndex, 'to', e.newIndex)
        const req = new XMLHttpRequest() // eslint-disable-line
        req.open(
          'POST',
          '/admin_new/wood_photos/move/' +
            e.to.dataset.woodid +
            '/' +
            e.oldIndex +
            '/' +
            e.newIndex
        )
        req.setRequestHeader('x-csrf-token', sortableGallery.dataset.csrf)
        req.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
        req.setRequestHeader('Accept', 'application/json')
        req.send()
      }
    })
  } else {
    Sortable.create(sortableGallery, {
      onUpdate: function (e) {
        console.log(e.oldIndex, e.newIndex)
      }
    })
  }
})
