import { expect } from 'chai';
import { Canvas } from '../../packages/pipeline-editor';
import { ServiceManager } from '@jupyterlab/services';
import { Message } from '@lumino/messaging';
import { createFileContext } from '@jupyterlab/testutils';
import {
  Context,
  DocumentRegistry
} from '@jupyterlab/docregistry';

class LogPipeline extends Canvas {
  methods: string[] = [];

  protected onUpdateRequest(msg: Message): void {
    super.onUpdateRequest(msg);
    this.methods.push('onUpdateRequest');
  }

  protected onActivateRequest(msg: Message): void {
    super.onActivateRequest(msg);
    this.methods.push('onActivateRequest');
  }
}

describe('PipelineEditor', () => {
  let context: Context<DocumentRegistry.IModel>;
  let manager: ServiceManager.IManager;
  let widget: LogPipeline;

  beforeAll(async () => {
    manager = new ServiceManager({ standby: 'never' });
    await manager.ready;
    return manager.contents.get("/Users/martha.cryanibm.com/gitrepos/elyra/test.pipeline");
  });

  beforeEach(() => {
    context = createFileContext();
    widget = new LogPipeline(context);
    return context.initialize(false);
  });

  // afterEach(() => {
  //   widget.dispose();
  // });

  describe('#constructor()', () => {
    it('should create a pipeline editor', () => {
      expect(widget).to.be.an.instanceof(Canvas);
    });
  });
});