'use babel';

import FileGeneratorView from './file-generator-view';
import {
    CompositeDisposable
} from 'atom';

export default {

    fileGeneratorView: null,
    modalPanel: null,
    subscriptions: null,

    activate(state) {
        this.fileGeneratorView = new FileGeneratorView(state.fileGeneratorViewState);
        this.modalPanel = atom.workspace.addModalPanel({
            item: this.fileGeneratorView.getElement(),
            visible: false
        });

        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'file-generator:show': (e) => this.show(e),
        }));
    },

    deactivate() {
        this.modalPanel.destroy();
        this.subscriptions.dispose();
        this.fileGeneratorView.destroy();
    },

    serialize() {
        return {
            fileGeneratorViewState: this.fileGeneratorView.serialize()
        };
    },

    bindBlur() {
      let vm = this;
      this.fileGeneratorView.miniEditor.element.addEventListener('blur', function() {
          vm.hide();
      });
  },

  hide() {
      this.modalPanel.hide();
      this.setText('');
  },

  editorFocus() {
      this.fileGeneratorView.miniEditor.element.focus();
      this.bindBlur();
  },

  show(event) {

      var projectPath;
      var path = event.target.children[0] ? event.target.children[0].dataset.path : event.target.dataset.path;
      atom.project.getPaths().forEach((v) => {
          path.match(v) ? projectPath = v : undefined;
      });
      var inProjectPath = this.getInProjectPath(path, projectPath);


      this.path = path;
      this.projectPath = projectPath;
      this.inProjectPath = inProjectPath;
      this.customTemplatePath = atom.config.get('file-generator.customTemplatePath');

      this.modalPanel.show();
      this.editorFocus();
      this.setText(inProjectPath);
      this.bindEnterKey();
  },

  bindEnterKey() {
      let vm = this;
      this.fileGeneratorView.miniEditor.getElement().onkeydown = function(e) {
          if ((e.keyCode || e.which) == 13) {
              vm.comfirm();
          }
      };
  },

  comfirm() {
    // console.log(this.path);// console.log(this.projectPath);
    // console.log(this.inProjectPath);
    // console.log(this.customTemplatePath);
      require('./generate-new-file.js')(this.projectPath, this.fileGeneratorView.miniEditor.getText(), this.customTemplatePath);
      this.hide();

  },

  setText(text) {
      this.fileGeneratorView.miniEditor.setText(text);
  },

  getInProjectPath(path, projectPath) {
      if (path == projectPath) return '';
      var newPath = path.split(projectPath)[1];
      newPath = newPath.substring(1, newPath.legth) + newPath[0];
      return newPath;
  },

    toggle() {
        console.log('FileGenerator was toggled!');
        return (
            this.modalPanel.isVisible() ?
            this.modalPanel.hide() :
            this.modalPanel.show()
        );
    }

};
