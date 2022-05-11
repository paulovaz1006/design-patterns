import { LightIntensityCommand } from './light-intesity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

const bedRoomLight = new SmartHouseLight('Luz quarto');
const lightPowerCommand = new LightPowerCommand(bedRoomLight);

const bathRoomLight = new SmartHouseLight('Luz quarto');
const bathroomLightPowerCommand = new LightPowerCommand(bathRoomLight);
const bathroomIntensityCommand = new LightIntensityCommand(
  bathroomLightPowerCommand,
);

const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', lightPowerCommand);
smartHouseApp.executeCommand('btn-1');

smartHouseApp.addCommand('btn-2', bathroomIntensityCommand);
smartHouseApp.executeCommand('btn-2');

smartHouseApp.addCommand('btn-3', bathroomIntensityCommand);

for (let i = 0; i < 200; i++) {
  smartHouseApp.executeCommand('btn-3');
}
