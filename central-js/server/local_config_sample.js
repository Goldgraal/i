var _ = require('lodash');

var config = {
  'server': {
    'protocol': 'http',
    'key': '/sybase/cert/server.key',
    'cert': '/sybase/cert/server.crt',
    'port': '8443',
    'debug': 'false',
    'session': {
      'secret': 'put yor session secret here',
      'key': ['solt for session 1', 'solt for session 2'],
      'secure': false
    }
  },
  'activiti': {
    'protocol': 'https',
    'hostname': 'poligon.igov.org.ua',
    'port': '8443',
    'path': '/wf-central/service',
    'username': 'activiti-master',
    'password': 'UjhtJnEvf!'
  },
  'bankid': {
    //'protocol': 'https',
    //'hostname': 'bankid.privatbank.ua',
    //'port': null,
    'sProtocol_AccessService_BankID': 'https', //Test
    'sHost_AccessService_BankID': 'bankid.privatbank.ua', //Test
    'sProtocol_ResourceService_BankID': 'https', //Test
    'sHost_ResourceService_BankID': 'bankid.privatbank.ua', //Test
    //'sProtocol_AccessService_BankID': 'https', //Prod
    //'sHost_AccessService_BankID': 'bankid.org.ua', //Prod
    //'sProtocol_ResourceService_BankID': 'https', //Prod
    //'sHost_ResourceService_BankID': 'biprocessing.org.ua', //Prod
    'client_id': 'testIgov',
    'client_secret': 'testIgovSecret'
  }
};

//try {
//	var local_config = require('local_config');
//	_.extend(config, local_config);
//} catch (e) {
//	if (e.code === 'MODULE_NOT_FOUND') {
//		// do nothing
//	}
//}

// use local_config.js if you need to locally change some of the settings
// as described in README
module.exports = config;   