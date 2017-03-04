'use strict';

import footerModule from './components/footer/footer.module';
import cardModule from './components/card/card.module';

export default angular.module('index.components', [
	footerModule.name,
	cardModule.name
]);
