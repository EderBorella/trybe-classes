#SELECT * FROM PecasFornecedores.Fornecimentos
#WHERE Preco > 15
#AND Preco < 40;
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN(15) AND (40);
