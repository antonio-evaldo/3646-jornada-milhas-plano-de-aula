import { Locator, Page, expect } from "@playwright/test";
import FormBaseCadastroEPerfil from "./FormBaseCadastroEPerfil";

export default class PaginaPerfil {
  private readonly page: Page;
  private readonly formBase: FormBaseCadastroEPerfil;
  private readonly linkPerfil: Locator;
  private readonly botaoDeslogar: Locator;
  private readonly botaoLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formBase = new FormBaseCadastroEPerfil(page);

    this.linkPerfil = page.getByTestId('header-link-perfil');
    this.botaoDeslogar = page.getByTestId('form-base-botao-deslogar');
    this.botaoLogin = page.getByTestId('botao-login');
  }

  async visitar() {
    await this.page.goto('/');
    await this.linkPerfil.click();
    await expect(this.page).toHaveURL('/auth/perfil');
  }
}
