# Portfólio Miguel Oliveira

Portfólio pessoal de Miguel Oliveira, desenvolvedor Full Stack em formação (Análise e Desenvolvimento de Sistemas, SENAI Taubaté).

👉 **[Acessar o portfólio](https://curriculo-ten-hazel.vercel.app/)**

## Sobre o projeto

O site funciona como uma apresentação em slides de tela cheia: a cada rolagem, o conteúdo atual sobe e some e o próximo entra, com uma foto de fundo própria para cada parte.

- **Início**: apresentação.
- **01 · Sobre**: quem sou, como trabalho e as tecnologias que uso.
- **02 · Sobre mim**: minha história, do esporte de alto rendimento ao desenvolvimento.
- **03 · Projetos**: GSPlan e PersonalHub, com uma demonstração animada das telas.
- **04 · Formação**, **05 · Certificações** e **06 · Contato**.

## Tecnologias

- **HTML5** semântico.
- **CSS3**: tema escuro com dourado, animações em `transform`/`opacity`, layout responsivo.
- **JavaScript puro**: navegação por slides (roda do mouse, teclado, toque e links) e demonstração dos projetos.

Sem dependências nem etapa de build. Sem JavaScript, o site vira uma página comum de rolagem, e quem prefere menos movimento (`prefers-reduced-motion`) vê transições só com fade.

## Rodando localmente

```bash
python -m http.server 5500
```

Depois abra `http://localhost:5500`.

## Estrutura

```
index.html, style.css, script.js   site
Img/fotos/                         fotos de fundo
Img/GSPlan/, Img/PersonalHub/      telas dos projetos
Img/certificados/ e Img/*.pdf      certificados
dist/client/                       cópia do site publicada pela hospedagem em dist/server
```

---
*Desenvolvido por [Miguel Oliveira](https://github.com/Miguelsenai2024).*
