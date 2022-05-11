export interface DeviceImplementation {
  getName(): string;
  setPower(porwerStatus: boolean): void;
  getPower(): boolean;
  setVolume(voulme: number): void;
  getVolume(voulme: number): void;
}
