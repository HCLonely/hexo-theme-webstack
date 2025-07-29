const fs = require('fs')

if (fs.existsSync('../hexo/package.json')){
  const version = JSON.parse(fs.readFileSync('../hexo/package.json')).version
  if (parseInt(version.split('.')[0] || '7', 10) >= 5) {
    const oldConfigPath = '../../source/_data/webstack.yml'
    const configPath = '../../_config.webstack.yml'
    if (!fs.existsSync(configPath) && !fs.existsSync(oldConfigPath)) {
      fs.writeFileSync(configPath, fs.readFileSync('./_config.example.yml'))
    }
  }
}
