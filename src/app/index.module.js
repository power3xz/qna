'use strict';

import components from './index.components';
import config from './index.config';
import run from './index.run';

import uiRouter from 'angular-ui-router';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';
import composeModule from './pages/compose/compose.module';
import articleModule from './pages/article/article.module';


const App = angular.module(
  "qna-front", [
    // plugins
    uiRouter,
    "ngSanitize",
    "ngMessages",
    "ngResource",

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name,
    composeModule.name,
    articleModule.name

  ]
);

App
  .config(config)
  .run(run);



export default App;