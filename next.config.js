module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/perguntas',
            destination: '/faq',
            permanent: true,
          },
       
        ]
      },
  }