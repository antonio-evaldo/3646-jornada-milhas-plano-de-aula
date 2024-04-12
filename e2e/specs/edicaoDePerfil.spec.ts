import { gerarPerfil } from "e2e/operacoes/gerarPerfil";
import { testeLogado } from "e2e/setup/testeLogado";

testeLogado.describe("Página de perfil", () => {
  testeLogado.beforeEach(async ({ paginaPerfil }) => {
    await paginaPerfil.visitar();
  });

  testeLogado("Deve conseguir editar o perfil", async ({ paginaPerfil }) => {
    const novosDados = gerarPerfil();
    const emailAtual = await paginaPerfil.formBase.obterValorInputEmail();

    await paginaPerfil.atualizarUsuario({ ...novosDados, email: emailAtual });
    await paginaPerfil.atualizadoComSucesso();

    await paginaPerfil.visitar();
    await paginaPerfil.dadosEstaoCorretos({ ...novosDados, email: emailAtual });
  });

  testeLogado("Deve conseguir fazer logout", async ({ paginaPerfil }) => {
    await paginaPerfil.deslogar();
    await paginaPerfil.deslogadoComSucesso();
  });
});
