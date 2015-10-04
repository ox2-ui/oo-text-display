Package.describe({
  name: 'ox2:text-display',
  summary: 'TESTING_DO_NOT_USE Components for displaying formated text',
  version: '1.1.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3','mquandalle:jade@0.4.1'
    ]);
  api.addFiles('lib/oo-text-display.jade', C);
  api.addFiles('lib/oo-text-display.js', C);
  api.addFiles('lib/oo-text-display.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:text-display');
  api.addFiles('tests/oo-text-display-tests.js');
});
