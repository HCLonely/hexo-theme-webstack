hexo.on('generateBefore', function () {
  const rootConfig = hexo.config
  if (hexo.locals.get) {
    const data = hexo.locals.get('data')
    data && data.webstack && (hexo.theme.config = data.webstack)
  }
  hexo.theme.config.rootConfig = rootConfig
})
