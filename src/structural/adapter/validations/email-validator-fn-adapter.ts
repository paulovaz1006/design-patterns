import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './email-validator-protocol';

export const EmailValidatorFnAdapter = (
  value: string,
): EmailValidatorProtocol => {
  return isEmail(value);
};
