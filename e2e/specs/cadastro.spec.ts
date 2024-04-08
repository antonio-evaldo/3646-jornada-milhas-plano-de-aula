import { test } from '../setup/fixtures';
import { Perfil, gerarPerfil } from 'e2e/operacoes/gerarPerfil';

test.describe("Página de Cadastro", () => {
  let novoUsuario: Perfil;

  test.beforeEach(async ({ paginaCadastro }) => {
    novoUsuario = gerarPerfil();
    await paginaCadastro.visitar();
  });

  test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {
    await paginaCadastro.cadastrarUsuario(novoUsuario);
    await paginaCadastro.cadastroFeitoComSucesso();
  });

  test("Não deve conseguir fazer cadastro com os mesmos dados", async ({ paginaCadastro }) => {
    await paginaCadastro.cadastrarUsuario(novoUsuario);
    await paginaCadastro.cadastroFeitoComSucesso();
    
    await paginaCadastro.visitar();
    await paginaCadastro.cadastrarUsuario(novoUsuario);
    await paginaCadastro.estaMostrandoMensagemDeErro('E-mail já utilizado.');
  });
});
