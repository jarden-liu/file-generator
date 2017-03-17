'use babel';
import { TextEditor } from 'atom';

export default class FileGeneratorView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('file-generator');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'Enter the name for the new module.';
    message.classList.add('editor-title');
    this.element.appendChild(message);

    this.miniEditor = new TextEditor({mini:true});
    this.element.appendChild(this.miniEditor.element);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
