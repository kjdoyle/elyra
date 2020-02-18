import { expect } from 'chai';
import { PipelineEditorFactory } from '../../packages/pipeline-editor';
import {ABCWidgetFactory, DocumentWidget} from '@jupyterlab/docregistry';
import {createSessionContext} from "@jupyterlab/testutils";

describe('PipelineEditor', () => {
  let extension: DocumentWidget;
  let extensionFactory: PipelineEditorFactory;

  beforeEach(() => {
    extensionFactory = new PipelineEditorFactory(createSessionContext({}));
    extension = extensionFactory.createNewWidget();
  });

  // afterEach(() => {
  //   extension.dispose();
  // });

  describe('#constructor', () => {
    it('should create a new extension', () => {
      expect(extension).to.be.an.instanceof(DocumentWidget);
    });
  });
});
