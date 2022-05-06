import { EmailValidatorAdapter } from './validations/email-validator-adapter';
import { EmailValidatorProtocol } from './validations/email-validator-protocol';

function validaEmail(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('è valido');
  } else {
    console.log('invalido');
  }
}

validaEmail(new EmailValidatorAdapter(), 'teste@teste.com');
