const fs = require('fs')

if (fs.existsSync('../hexo/package.json')){
  const version = JSON.parse(fs.readFileSync('../hexo/package.json')).version
  if (version.split('.')[0].imcludes('5')) {
    const oldConfigPath = '../../source/_data/webstack.yml'
    const configPath = '../../_config.webstack.yml'
    if (!fs.existsSync(configPath) && !fs.existsSync(oldConfigPath)) {
      fs.writeFileSync(configPath, fs.readFileSync('./_config.example.yml'))
    }
  }
}
