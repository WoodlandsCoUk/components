import Sortable from 'sortablejs'

const sortableGalleries = document.querySelectorAll('.gallery__sortable')

sortableGalleries.forEach((sortableGallery) => {
  Sortable.create(sortableGallery)
})
