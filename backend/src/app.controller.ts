import { Controller, Get } from '@nestjs/common';
import InternalException from './error/internal.expection';
import ValidationException from './error/validation.exception';

@Controller()
export class AppController {
  @Get()
  async success(): Promise<any> {
    await this.esperar(3000);
    return { data: 'Olá mundo!' };
  }

  @Get('/error-500')
  async error500(): Promise<any> {
    await this.esperar(3000);
    throw InternalException.fromMessage('Erro de conexão com o banco de dados');
  }

  @Get('/error-400')
  async error400(): Promise<any> {
    await this.esperar(3000);
    throw ValidationException.fromErrors(
      {
        message: 'E-mail inválido',
        meta: { attribute: 'email', object: 'User', value: 'usuario@' },
      },
      {
        message: 'Senha precisa ter no mínimo 8 caracteres',
        meta: { object: 'User', attribute: 'password' },
      },
      {
        message: 'Senha precisa ter caracteres especiais',
        meta: { object: 'User', attribute: 'password' },
      },
    );
  }

  esperar(tempo: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, tempo);
    });
  }
}
