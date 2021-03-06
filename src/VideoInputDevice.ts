/**
 * Video input device metadata containing the id and label of the device if available.
 */
export class VideoInputDevice {
    /**
     * Creates an instance of VideoInputDevice.
     *
     * @param deviceId the video input device id
     * @param label the label of the device if available
     */
    public constructor(public deviceId: string, public label: string) { }
}
