import { Locator, Page, expect } from "@playwright/test";
import { Perfil } from "e2e/operacoes/gerarPerfil";
import FormBaseCadastroEPerfil from "./FormBaseCadastroEPerfil";

export default class PaginaCadastro {
  private readonly page: Page;
  private readonly formBase: FormBaseCadastroEPerfil;

  private readonly botaoVisitarPaginaCadastro: Locator;

  private readonly checkboxTermos: Locator;

  constructor(page: Page) {
    this.formBase = new FormBaseCadastroEPerfil(page);

    this.page = page;
    this.botaoVisitarPaginaCadastro = page.getByTestId('header-botao-cadastre-se');
    
    this.checkboxTermos = page
      .getByTestId('form-base-checkbox-termos')
      .getByLabel('Li e aceito os termos e condições deste cadastro');
  }

  async visitar() {
    await this.page.goto('/');
    await this.botaoVisitarPaginaCadastro.click();
    await expect(this.page).toHaveURL('/auth/cadastro');
  }

  async confirmarTermos() {
    await this.checkboxTermos.check();
  }

  async cadastrarUsuario(novoUsuario: Perfil) {
    await this.formBase.definirNome(novoUsuario.nome);
    await this.formBase.definirGenero(novoUsuario.genero);
    await this.formBase.definirDataNascimento(novoUsuario.dataNascimento);
    await this.formBase.definirCPF(novoUsuario.cpf);
    await this.formBase.definirTelefone(novoUsuario.telefone);
    await this.formBase.definirCidade(novoUsuario.cidade);
    await this.formBase.definirEstado(novoUsuario.estado);
    await this.formBase.definirEmail(novoUsuario.email);
    await this.formBase.confirmarEmail(novoUsuario.email);
    await this.formBase.definirSenha(novoUsuario.senha);
    await this.formBase.confirmarSenha(novoUsuario.senha);
    await this.confirmarTermos();
    await this.formBase.submeterForm();
  }

  async cadastroFeitoComSucesso() {
    await expect(this.page).toHaveURL('/auth/login');
  }

  async estaMostrandoMensagemDeErro(mensagem: string) {
    const elementoErro = this.page.getByText(mensagem);
    await expect(elementoErro).toBeVisible();
  }
}
