'use strict';

//exports.config = {
//		  // The address of a running selenium server.
//		  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
//
//		  // Capabilities to be passed to the webdriver instance.
//		  capabilities: {
//		    'browserName': 'internet explorer',
//		    'browser_version' : '10',
//		    'browserstack.local' : 'true',
//		    'browserstack.debug': 'true',
//		    'browserstack.user' : process.env.BROWSERSTACK_USERNAME,
//		    'browserstack.key': process.env.BROWSERSTACK_KEY
//		  },
//
//		  // Spec patterns are relative to the current working directly when
//		  // protractor is called.
//		  specs: [
//		    'src/test/**/*.spec.js'
//		  ],
//
//		  // Options to be passed to Jasmine-node.
//		  jasmineNodeOpts: {
//		    showColors: true,
//		    defaultTimeoutInterval: 30000
//		  }
//		};


var browserstackUser = process.env.BROWSERSTACK_USERNAME;
var browserstackKey = process.env.BROWSERSTACK_KEY;

exports.config = {
    multiCapabilities: [
        {
            'browserstack.user': browserstackUser,
            'browserstack.key':browserstackKey ,
            'browserstack.local': 'true',
            'browserstack.debug': 'true',
            'browserName': 'internet explorer',
            'browser_version' : '10',
//            'os': 'Windows Phone',
//            'os_version': '8',
            specs: [
                    'src/test/**/*.spec.js'
            ]
        },
        {
            'browserstack.user': browserstackUser,
            'browserstack.key': browserstackKey,
		    'browserName': 'internet explorer',
		    'browser_version' : '11',
            'browserstack.local': 'true',
            'browserstack.debug': 'true',
            specs: [
                    'src/test/**/*.spec.js'
            ]
        },
        {
            'browserstack.user': browserstackUser,
            'browserstack.key': browserstackKey,
		    'browserName': 'safari',
//		    'browser_version' : '11',
            'browserstack.local': 'true',
            'browserstack.debug': 'true',
            specs: [
                    'src/test/**/*.spec.js'
            ]
        }
    ],

    maxSessions: 3,
    allScriptsTimeout: 300000,

    // Browserstack's selenium server address
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3600000
  }

//    framework: 'jasmine',
//
//    allScriptsTimeout: 300000,
//
//    baseUrl: 'http://localhost:9001',
//
//    onPrepare: function () {
//        require('jasmine-reporters');
//        var capsPromise = browser.getCapabilities();
//        capsPromise.then(function (caps) {
//            var browserName = caps.caps_.browserName.toUpperCase();
//            var browserVersion = caps.caps_.version;
//            var prePendStr = browserName + "-" + browserVersion + "-";
//            jasmine.getEnv().addReporter(new
//                jasmine.JUnitXmlReporter("test-results", true, true, prePendStr));
//        });
//    },
//
//    jasmineNodeOpts: {
//        showColors: true,
//        isVerbose: true,
//        includeStackTrace: true,
//        defaultTimeoutInterval: 3600000
//    }
};