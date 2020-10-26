module.exports = {
  async rewrites () {
    return [
      {
        source: '/studio/(.*)',
        destination: '/studio/index.html'
      }
    ]
  }
}
