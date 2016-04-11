
require('core-js');

require('zone.js/dist/zone.js');
// require('zone.js/dist/long-stack-trace-zone.js');
require('zone.js/dist/jasmine-patch.js');

var testContext = require.context('./app', true, /\.spec\.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);
