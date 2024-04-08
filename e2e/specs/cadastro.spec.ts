import { test } from '../setup/fixtures';
import { gerarPerfil } from 'e2e/operacoes/gerarPerfil';

test.describe("Página de Cadastro", () => {
  test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {
    const novoUsuario = gerarPerfil();

    console.log(novoUsuario);
    
    await paginaCadastro.visitar();
  });
});
