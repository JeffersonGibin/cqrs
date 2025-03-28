## cqrs

- No CQRS, a base de escrita é considerada a fonte de verdade dos dados, enquanto a base de leitura recebe uma cópia sincronizada desses dados, geralmente por meio de mecanismos de replicação.
- Embora o CQRS separe claramente as responsabilidades de leitura e escrita, isso não significa que você não possa realizar operações de leitura na base de escrita, especialmente quando essas leituras são necessárias para validar regras de negócio antes da execução de um comando.

### Considerações

- Este projeto simula bases de dados em memória por meio de arrays simples. Existem arrays separados para leitura e escrita, representando cada base de dados. O array de leitura é atualizado com os dados da base de escrita após alguns milissegundos, simulando uma sincronização.