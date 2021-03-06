import { MmjsTestCase } from '../mmjs-test-case';
import { CombineMp4sToMovFlow } from '../../src/flows/combine-mp4s-to-mov.flow';
import { FlowCompletionResult, FlowState } from '../../src/core/flow';

export class RemixMovieSoundtrack extends MmjsTestCase {

  private _flow: CombineMp4sToMovFlow = null;

  setup(done: () => void) {

    // FIXME: use file-chooser socket instead
    const audioFileInput = document.createElement('input');
    const videoFileInput = document.createElement('input');

    audioFileInput.type = 'file';
    audioFileInput.id = 'audioFileInput';
    audioFileInput.accept = 'audio/mp4,audio/mpeg';

    videoFileInput.type = 'file';
    videoFileInput.id = 'videoFileInput';
    videoFileInput.accept = 'video/mp4,video/quicktime';

    this.domMountPoint.appendChild(document.createElement('br'))
    this.domMountPoint.appendChild(document.createTextNode('Audio file: '))
    this.domMountPoint.appendChild(audioFileInput);
    this.domMountPoint.appendChild(document.createElement('br'))
    this.domMountPoint.appendChild(document.createElement('br'))
    this.domMountPoint.appendChild(document.createTextNode('Video file: '))
    this.domMountPoint.appendChild(videoFileInput);

    this.domMountPoint.appendChild(document.createElement('br'))
    const processButton = document.createElement('button');
    processButton.innerText = 'Process'

    // TODO: use the bootstrap grid
    this.domMountPoint.appendChild(document.createElement('br'))
    this.domMountPoint.appendChild(processButton);
    this.domMountPoint.appendChild(document.createElement('br'))
    this.domMountPoint.appendChild(document.createElement('br'))

    const videoEl = document.createElement('video');
    videoEl.controls = true;
    videoEl.addEventListener('error', () => {
      console.error(videoEl.error);
    });

    this.domMountPoint.appendChild(videoEl);

    processButton.onclick = () => {

      const audioFile: File = audioFileInput.files[0];
      const videoFile: File = videoFileInput.files[0];

      console.log('selected audio file:', audioFile)
      console.log('selected video file:', videoFile)

      /**
       *
       * SampleVideo_1280x720_5mb.mp4
       *
       * v-0576p-1400k-libx264.mov
       *
       */

      const videoUrl = videoFile ? URL.createObjectURL(videoFile) : '/test-data/mp4/SampleVideo_1280x720_5mb.mp4';
      const audioUrl = audioFile ? URL.createObjectURL(audioFile) : '/test-data/mp3/shalafon.mp3';

      // "good guess"
      const isMp3Audio = audioUrl.endsWith('.mp3');

      this._flow = new CombineMp4sToMovFlow(
        videoUrl,
        audioUrl,
        false, // call saveAs when done
        null,
        isMp3Audio
      );

      this._flow.whenCompleted().then((result: FlowCompletionResult) => {

        videoEl.src = URL.createObjectURL(result.data);

        videoEl.play()

        console.log('flow completed with result:', result);

      });

      this._flow.state = FlowState.WAITING;
      this._flow.state = FlowState.FLOWING;

    }

  }

  run() {}
}
