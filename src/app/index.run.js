(function() {
  'use strict';

  angular
    .module('exp01')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
