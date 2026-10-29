import { Controller, Get, Param } from '@nestjs/common';

@Controller('usuarios')

export class UsuariosController {
  private usuarios = [
    { id: 1, nome: 'Ana Paula Crippa', email: 'ana@uem.br' },
    { id: 2, nome: 'Josh Dun', email: 'josh@uem.br' },
    { id: 3, nome: 'Anderson Silva', email: 'chocaomundo@uem.br' },
  ];

  @Get()
  listar() {
    return this.usuarios;
  }

  @Get(':id')
  buscar(@Param('id') id: string) {
    return { idRecebido: id };
  }

}