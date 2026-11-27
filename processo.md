# Processo de Desenvolvimento

## 1. Introdução

O desenvolvimento da Caderneta Digital do Coordenador de Turno será orientado por uma abordagem ágil, combinando os métodos Scrum e Kanban.

A utilização destas metodologias pretende facilitar a organização da equipa, acompanhar o progresso das actividades e permitir ajustes graduais ao projecto, de acordo com as necessidades identificadas durante o desenvolvimento.

## 2. Composição da equipa

A equipa é constituída por quatro membros, com responsabilidades distribuídas pelas principais áreas do projecto.

| Membro | Responsabilidade |
|---|---|
| Conforme identificado no README | Coordenação do projecto e acompanhamento das Sprints |
| Conforme identificado no README | Levantamento e documentação dos requisitos |
| Conforme identificado no README | Prototipagem e desenvolvimento da interface |
| Conforme identificado no README | Desenvolvimento da aplicação e testes |

As responsabilidades representam áreas de maior foco, não impedindo a colaboração entre todos os membros.

## 3. Metodologia Scrum

O Scrum será utilizado para organizar o desenvolvimento em ciclos de trabalho denominados Sprints.

Cada Sprint terá um objectivo definido e um conjunto de tarefas seleccionadas a partir do Product Backlog.

### 3.1. Papéis na equipa

A equipa trabalhará de forma colaborativa, com as seguintes responsabilidades:

- **Product Owner:** acompanha as necessidades do produto e ajuda a definir prioridades.
- **Scrum Master:** facilita a aplicação do Scrum e acompanha o cumprimento do processo.
- **Developers:** participam na análise, concepção, desenvolvimento, documentação e testes.

Devido à dimensão reduzida da equipa, os papéis poderão ser acumulados ou distribuídos entre os membros.

### 3.2. Eventos Scrum

Serão realizados os seguintes eventos:

- **Sprint Planning:** definição do objectivo da Sprint e selecção das tarefas.
- **Daily Scrum:** breve acompanhamento do trabalho, dificuldades encontradas e próximos passos.
- **Sprint Review:** apresentação do trabalho desenvolvido e recolha de feedback.
- **Sprint Retrospective:** análise do funcionamento da equipa e identificação de melhorias para a Sprint seguinte.

Os eventos e as respectivas conclusões serão registados nos ficheiros correspondentes a cada Sprint.

### 3.3. Organização das Sprints

O projecto será desenvolvido em Sprints com duração definida no calendário do laboratório.

No início de cada Sprint serão estabelecidos os objectivos e as tarefas prioritárias. No final, serão analisados os resultados alcançados, as tarefas pendentes e os aspectos a melhorar.

O planeamento poderá ser ajustado nas Sprints seguintes, sem perder de vista os objectivos gerais do produto.

## 4. Metodologia Kanban

O Kanban será utilizado para visualizar e acompanhar o estado das tarefas através do GitHub Projects.

O quadro será organizado nas seguintes colunas:

| Coluna | Descrição |
|---|---|
| Backlog | Tarefas identificadas e ainda não seleccionadas |
| A fazer | Tarefas seleccionadas para execução |
| Em curso | Tarefas actualmente em desenvolvimento |
| Em revisão | Tarefas que aguardam análise ou validação |
| Concluído | Tarefas finalizadas e aceites |

### 4.1. Limite WIP

Será estabelecido um limite inicial de duas tarefas simultâneas na coluna **Em curso**.

Este limite pretende evitar a acumulação de trabalho não terminado e incentivar a conclusão das tarefas antes de iniciar novas actividades.

O limite poderá ser revisto caso a experiência da equipa demonstre que necessita de ajustes.

### 4.2. Gestão das tarefas

As tarefas serão representadas por Issues no GitHub e acompanhadas através do quadro Kanban.

Sempre que possível, cada tarefa deverá apresentar:

- Uma descrição clara.
- Um responsável.
- Uma prioridade.
- Uma Sprint associada.
- Critérios de aceitação, quando aplicável.

## 5. Gestão do desenvolvimento e controlo de versões

O Git e o GitHub serão utilizados para gerir o código-fonte, a documentação e o histórico de alterações.

Serão utilizadas as seguintes práticas:

- Criar branches para desenvolver alterações específicas.
- Utilizar commits para registar o progresso.
- Criar Pull Requests para propor alterações ao ramo principal.
- Realizar revisões de código entre os membros.
- Associar Issues e Pull Requests às tarefas correspondentes, sempre que possível.

As alterações deverão ser analisadas antes de serem integradas no ramo principal.

## 6. Definição de Pronto (Definition of Done)

Uma tarefa será considerada concluída quando:

1. Os critérios de aceitação definidos forem cumpridos.
2. A implementação ou documentação estiver realizada.
3. Os testes aplicáveis tiverem sido efectuados.
4. As alterações tiverem sido revistas, quando envolverem código.
5. O resultado estiver integrado no repositório e a tarefa actualizada no quadro Kanban.

## 7. Comunicação e colaboração

A comunicação entre os membros deverá ser contínua, permitindo partilhar o progresso, esclarecer dúvidas e identificar dificuldades.

Todos os membros deverão contribuir para as actividades da equipa, participar nas revisões e acompanhar o estado geral do projecto.

## 8. Revisão e melhoria contínua

A aplicação conjunta do Scrum e Kanban permitirá acompanhar o desenvolvimento e identificar oportunidades de melhoria.

Durante as Sprint Reviews e Retrospectives, a equipa poderá analisar:

- Se as funcionalidades desenvolvidas correspondem às necessidades identificadas.
- Se os requisitos precisam de ser ajustados.
- Se a distribuição das tarefas está a funcionar.
- Se existem dificuldades no processo de desenvolvimento.
- Se o protótipo ou a solução implementada precisam de alterações.

As decisões de melhoria serão consideradas no planeamento das Sprints seguintes.

Desta forma, o projecto será desenvolvido de forma incremental, permitindo corrigir decisões, adaptar prioridades e melhorar continuamente o produto.