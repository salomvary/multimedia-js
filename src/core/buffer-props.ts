import { PayloadDescriptor, UNKNOWN_MIMETYPE } from './payload-description';

/**
 * @class
 * Describes the payload of a buffer, how many samples it contains of that, and time-contextual information
 * for decrypting/decoding/presentation of the buffer.
 *
 * Generic media-key and parameters can be included as metadata around the buffer.
 *
 * Many buffer "slices" can (but must not) share one buffer-properties object instance, where that has advantages.
 *
 */
export class BufferProperties extends PayloadDescriptor {
  static clone (props: BufferProperties) {
    const newProps = new BufferProperties(
      props.mimeType,
      props.sampleRateInteger,
      props.sampleDepth,
      props.sampleDurationNumerator,
      props.samplesCount,
      props.isBitstreamHeader,
      props.isKeyframe,
      props.timestampDelta,
      props.mediaKey,
      props.tags);

    newProps.elementaryStreamId = props.elementaryStreamId;
    newProps.details = props.details;
    newProps.codec = props.codec;
    return newProps;
  }

  static fromTransferable (props: BufferProperties) {
    return BufferProperties.clone(props);
  }

  constructor (
    mimeType = UNKNOWN_MIMETYPE,
    sampleRateInteger = 0,
    sampleDepth = 0,
    sampleDurationNumerator = 1,
      public samplesCount: number = 0,
      public isBitstreamHeader: boolean = false,
      public isKeyframe: boolean = false,
      public timestampDelta: number = 0,
      public mediaKey: any = null,
      public tags: Set<string> = new Set()
  ) {
    super(mimeType, sampleRateInteger, sampleDepth, sampleDurationNumerator);
    this.samplesCount = samplesCount;
  }

  clone (): BufferProperties {
    const newProps = BufferProperties.clone(this);
    return newProps;
  }

  /**
   * Normal units [s]
   */
  getSliceDuration () {
    return this.samplesCount * this.getSampleDuration();
  }

  toString () {
    const payloadToString = super.toString();
    return `[[#${this.samplesCount} x ${this.isKeyframe ? 'KEY' : 'P/B'}-${this.isBitstreamHeader ? 'HEADER(s)' : 'FRAME(s)'} => ${payloadToString}]]`;
  }
}
