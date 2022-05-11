import { DeviceImplementation } from './device-implementations';

export class Radio implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = 'Tv';

  getName(): string {
    return this.name;
  }

  setPower(porwerStatus: boolean): void {
    this.power = porwerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }
}
