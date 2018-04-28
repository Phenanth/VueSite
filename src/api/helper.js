const _newPage = [
  '/',
  '/Note',
  '/Dairy',
  '/Essay',
  '/Report'
]

export default {
  alterPage (cb) {
    setTimeout(() => cb(_newPage), 100)
  }
}
