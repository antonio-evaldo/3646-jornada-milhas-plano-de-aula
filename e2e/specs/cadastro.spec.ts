import { test } from '../setup/fixtures';
import { gerarPerfil } from 'e2e/operacoes/gerarPerfil';

test.describe("Página de Cadastro", () => {
  test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {
    const novoUsuario = gerarPerfil();

    await paginaCadastro.visitar();
    await paginaCadastro.definirNome(novoUsuario.nome);
    await paginaCadastro.definirGenero(novoUsuario.genero);
    await paginaCadastro.definirDataNascimento(novoUsuario.dataNascimento);
    await paginaCadastro.definirCPF(novoUsuario.cpf);
    await paginaCadastro.definirTelefone(novoUsuario.telefone);
    await paginaCadastro.definirCidade(novoUsuario.cidade);
    await paginaCadastro.definirEstado(novoUsuario.estado);
    await paginaCadastro.definirEmail(novoUsuario.email);
    await paginaCadastro.confirmarEmail(novoUsuario.email);
    await paginaCadastro.definirSenha(novoUsuario.senha);
    await paginaCadastro.confirmarSenha(novoUsuario.senha);
    await paginaCadastro.confirmarTermos();
    await paginaCadastro.submeterForm();
    await paginaCadastro.cadastroFeitoComSucesso();
  });
});
