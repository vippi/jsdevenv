//выполнить transpile перед запуском текстов
require('babel-register')();

// выключить то что Mocha не поймет
require.extensions['.css'] = function() {};