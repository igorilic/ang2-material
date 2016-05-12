/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {
};

var _materialPackages: string[] = [
  'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
  'progress-circle', 'radio', 'sidenav'
];

_materialPackages.forEach((_packageName: string) => {
  packages['@angular2-material/' + _packageName] = { main: _packageName}
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/test/test',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
    
  },
  packages: cliSystemConfigPackages
});

var _materialPackages: string[] = [
  'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
  'progress-circle', 'radio', 'sidenav'
];

_materialPackages.forEach((_packageName: string) => {
  packages['@angular2-material/' + _packageName] = { main: _packageName}
});

// _materialPackages.forEach(function(item) {
//   // All Material 2 components are prefixed with  @angular2-material and use
//   // the components name as entry point.
//   cliSystemConfigPackages['@angular2-material/' + item] = { main: item };
// });

// Apply the user's configuration.
System.config({ map, packages });
