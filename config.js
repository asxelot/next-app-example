const config = {
  development: {
    host: 'http://localhost:3000'
  },
  production: {
    host: 'https://somehost.com'
  }
}

config.test = config.development

export default config[process.env.NODE_ENV]
