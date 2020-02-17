import { expect } from 'chai';
import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import { PipelineExtension } from './index';

describe('PipelineEditor', () => {
  let extension: JupyterFrontEndPlugin<void>;

  beforeEach(() => {
    extension = new PipelineExtension() as JupyterFrontEndPlugin<void>;
  });

  afterEach(() => {
    extension.dispose();
  });

  describe('#constructor', () => {
    it('should create a new extension', () => {
      expect(extension).to.be.an.instanceof(PipelineExtension);
    });
  });
});
