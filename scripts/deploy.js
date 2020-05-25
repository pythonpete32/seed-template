const deployTemplate = require('@aragon/templates-shared/scripts/deploy-template')

const TEMPLATE_NAME = 'metagame-template'
const CONTRACT_NAME = 'MetaGameTemplate'

module.exports = (callback) => {
  deployTemplate(web3, artifacts, TEMPLATE_NAME, CONTRACT_NAME)
    .then(template => {
      console.log("Meta Game Template address: ", template.address)
    })
    .catch(error => console.log(error))
    .finally(callback)
}
