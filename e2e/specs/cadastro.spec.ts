import { test } from '../setup/fixtures';

test.describe("Página de Cadastro", () => {
  test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => {
    await paginaCadastro.visitar();
  });
});
