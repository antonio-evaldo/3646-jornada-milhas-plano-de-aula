import { test as base } from "@playwright/test";
import PaginaCadastro from "e2e/page-objects/PaginaCadastro";
import PaginaLogin from "e2e/page-objects/PaginaLogin";
import PaginaPrincipal from "e2e/page-objects/PaginaPrincipal";

export const test = base.extend<{
  paginaPrincipal: PaginaPrincipal,
  paginaCadastro: PaginaCadastro,
  paginaLogin: PaginaLogin,
}>({
  paginaPrincipal: async ({ page }, use) => {
    const paginaPrincipal = new PaginaPrincipal(page);
    await use(paginaPrincipal);
  },
  paginaCadastro: async ({ page }, use) => {
    const paginaCadastro = new PaginaCadastro(page);
    await use(paginaCadastro);
  },
  paginaLogin: async ({ page }, use) => {
    const paginaLogin = new PaginaLogin(page);
    await paginaLogin.visitar();
    await use(paginaLogin);
  },
});
