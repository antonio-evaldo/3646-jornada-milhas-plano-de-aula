import { test as base } from "@playwright/test";
import PaginaLogin from "e2e/page-objects/PaginaLogin";
import PaginaPrincipal from "e2e/page-objects/PaginaPrincipal";

export const test = base.extend<{
  paginaPrincipal: PaginaPrincipal,
  paginaLogin: PaginaLogin
}>({
  paginaPrincipal: async ({ page }, use) => {
    const paginaPrincipal = new PaginaPrincipal(page);
    await use(paginaPrincipal);
  },
  paginaLogin: async ({ page }, use) => {
    const paginaLogin = new PaginaLogin(page);
    await paginaLogin.visitar();
    await use(paginaLogin);
  }
});
