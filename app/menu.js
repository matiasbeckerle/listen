import { app, shell } from 'electron';

let template = [{
  label: 'File',
  submenu: [{
    label: 'Exit',
    click: app.quit
  }]
}, {
  label: 'Edit',
  submenu: []
}, {
  label: 'Player',
  submenu: [{
    label: 'Play/Pause',
    click: function () { }
  }, {
    label: 'Stop',
    click: function () { }
  }, {
    label: 'Next',
    click: function () { }
  }, {
    label: 'Previous',
    click: function () { }
  }]
}, {
  label: 'Window',
  role: 'window',
  submenu: []
}, {
  label: 'Help',
  role: 'help',
  submenu: [{
    label: 'About',
    click: function () {
      shell.openExternal('https://github.com/matiasbeckerle/listen');
    }
  }]
}];

export default template;
