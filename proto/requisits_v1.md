# Planejamento de requisitos
#### 16/09/2019

# Páginas
- Home
- Blog
- Blog/Post
- Projetos

# Rotas
- /
- /blog/
- /blog/:post
- /blog/tag/:tag
- /blog/author/:author
- /projetos/
- /projetos/:projeto
- /projetos/tag/:tag

# Bibliotecas
- JQuery
- AngularJS
- MaterializeCSS

# Aparência

## Página inicial
- Será composta por seções.
- Cada seção terá altura minima de 100% da tela
- Margens verticais 20px
- Margens horizontais 10px
- section/div centralizada (display flex)

# Conteudo

## /
- Avatar
- Nome
- Breve apresentação
- Redes (Linkedin, Github, Twitter, ...)

## /#skills
- Breve descrição
- Principais skills
    - (Java)[/projetos/tag/java]
    - (C#)[/projetos/tag/csharp]
    - (Android)[/projetos/tag/android]
    - (Javascript)[/projetos/tag/js]
    - (Python)[/projetos/tag/python]

## /#projetos-pessoais
- Breve descrição
- Principais projetos pessoais
  - [for in api../projects]
  (Mostrar as tags dos projetos)

## /#projetos-em-producao
- Breve descrição
- Aplicativos publicados na google play
    - [for in api../apps?platform=android]

## /#contato
- Breve descrição
- Formulário de contato <post>api../mail</post>
    - Email
    - Nome
    - Categoria [Orçamento, Proposta, Parceria, ...]
    - Mensagem


