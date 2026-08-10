const certificadosData = [
    {
        titulo: { "pt-BR": "Python para Dados: Primeiros Passos", en: "Python for Data: First Steps" },
        instituicao: "Alura",
        ano: "2026",
        imagem: "Img/py_para_dados_certificado.png"
    },
    {
        titulo: { "pt-BR": "Conceitos Básicos de Redes", en: "Networking Basics" },
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/conceito_basico_certificado.png"
    },
    {
        titulo: { "pt-BR": "JavaScript: Explorando a Linguagem", en: "JavaScript: Exploring the Language" },
        instituicao: "Alura",
        ano: "2026",
        imagem: "Img/java_certificado.png"
    },
    {
        titulo: { "pt-BR": "Flask: Crie uma WebApp com Python", en: "Flask: Build a WebApp with Python" },
        instituicao: "Alura",
        ano: "2026",
        imagem: "Img/Flask_py_certificado.png"
    },
    {
        titulo: { "pt-BR": "Começando com o Cisco Packet Tracer", en: "Getting Started with Cisco Packet Tracer" },
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/Começando_com_cisco_certiicado.png"
    },
    {
        titulo: {
            "pt-BR": "Acessibilidade em HTML, CSS e JavaScript com NVDA",
            en: "Accessibility in HTML, CSS and JavaScript with NVDA"
        },
        instituicao: "Alura",
        ano: "2026",
        imagem: "Img/MiguelOA_26179933_Junho2.pdf"
    },
    {
        titulo: { "pt-BR": "Clojure: Mutabilidade com Átomos e Refs", en: "Clojure: Mutability with Atoms and Refs" },
        instituicao: "Alura",
        ano: "2026",
        imagem: "Img/MiguelOA_26179933_Maio.pdf"
    },
    {
        titulo: { "pt-BR": "Introdução à IA Moderna", en: "Introduction to Modern AI" },
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/MiguelOA_26179933_Junho.pdf"
    },
    {
        titulo: { "pt-BR": "Linux Unhatched", en: "Linux Unhatched" },
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/LinuxUnhatchedUpdate20260603-31-flkra1.pdf"
    },
    {
        titulo: { "pt-BR": "Fundamentos de Análise de Dados", en: "Data Analytics Essentials" },
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/DataAnalyticsEssentialsUpdate20260531-31-rj9b4k.pdf"
    }
];

const translations = {
    "pt-BR": {
        skipLink: "Ir para o conteúdo",
        navAbout: "Sobre",
        navProjects: "Projetos",
        navJourney: "Trajetória",
        navCerts: "Certificações",
        navContact: "Contato",
        resume: "Currículo",
        availability: "Disponível a oportunidades",
        hello: "Oi, eu sou o Miguel.",
        heroLine1: "Aprendo construindo.",
        heroLine2: "E gosto de construir bem.",
        heroDescription: "Sou estudante de Análise e Desenvolvimento de Sistemas no SENAI, em Taubaté. Este portfólio reúne os projetos que venho criando para aprender front-end, back-end e resolver problemas na prática.",
        viewProjects: "Ver meus projetos",
        talkToMe: "Fale comigo",
        projectsBuilt: "projetos construídos",
        certificates: "certificações",
        graduation: "formação prevista",
        profileCaption: "Código, produto &amp; design",
        roleCaption: "Desenvolvedor Full Stack em formação",
        aboutOverline: "Sobre mim",
        aboutTitle: "Um pouco sobre mim",
        aboutLead: "Ainda estou no começo da carreira, então tento aproveitar cada projeto para aprender algo novo e melhorar o que já sei.",
        aboutText: "Concluí o curso técnico de Análise e Desenvolvimento de Sistemas e hoje continuo a graduação no SENAI Taubaté. Gosto de colocar a mão na massa, entender o problema antes de programar e ver uma ideia ganhar forma na tela.",
        teamwork: "Trabalho em equipe",
        continuousLearning: "Aprendizagem contínua",
        systemThinking: "Pensamento sistêmico",
        toolbox: "Minha caixa de ferramentas",
        stackTitle: "Tecnologias que uso",
        projectsOverline: "O que eu já fiz",
        projectsTitle: "Projetos que já tirei do papel",
        projectsNote: "Cada um deles representa uma etapa diferente do meu aprendizado.",
        gsplanSummary: "Projeto de gestão financeira e patrimonial com áreas para orçamento, planejamento, investimentos, seguros e acompanhamento do patrimônio.",
        personalSummary: "Um painel pessoal para organizar dinheiro, estudos e rotina no mesmo lugar, sem precisar alternar entre várias ferramentas.",
        viewCase: "Ver projeto completo",
        visitSite: "Visitar site",
        scopeTag: "Gestão e rastreabilidade de requisitos",
        realimentaTag: "Tecnologia contra o desperdício alimentar",
        vyzorTag: "Gestão de dados e indicadores empresariais",
        journeyOverline: "O que estudei",
        journeyTitle: "Minha formação até aqui",
        inProgress: "Em andamento",
        completed: "Concluído",
        higherEducation: "Superior em Análise e Desenvolvimento de Sistemas",
        technicalEducation: "Técnico em Análise e Desenvolvimento de Sistemas",
        highSchool: "Ensino Médio",
        certsOverline: "Outros estudos",
        certsTitle: "Cursos e certificações",
        certsNote: "Clique em um certificado para visualizar.",
        contactOverline: "Contato",
        contactTitle: "Quer conversar sobre uma vaga ou projeto?",
        contactText: "Pode me chamar por e-mail ou por uma das redes abaixo. Vou gostar de conversar.",
        footer: "© 2026 Miguel Oliveira. Feito por mim, em Taubaté.",
        backTop: "Voltar ao topo",
        gsplanDetail: "Plataforma de gestão patrimonial que organiza a vida financeira de pessoas e empresas em um único ecossistema. A experiência reúne Bússola financeira, orçamento, planejamento, seguros, patrimônio, investimentos e painéis executivos, transformando dados complexos em decisões claras.",
        personalDetail: "Uma plataforma de organização pessoal que reúne dinheiro, estudos e rotina em uma visão simples. O dashboard acompanha saldo, receitas, despesas, assinaturas e transações; a área de estudos combina Pomodoro, meta semanal, matérias, conteúdos e prazos para ajudar o usuário a decidir o próximo passo e seguir o dia com foco.",
        scopeDetail: "Sistema completo de gerenciamento de requisitos para analisar, aprovar e acompanhar propostas de software. O painel reúne indicadores, workflow de aprovação, projetos vinculados, métricas e rastreabilidade das decisões.",
        realimentaDetail: "Projeto de extensão focado no combate à insegurança alimentar. A plataforma conecta instituições com alimentos excedentes a ONGs cadastradas, facilitando o registro, a visualização e a logística das doações.",
        vyzorDetail: "O Vyzor é uma plataforma de gestão e análise de dados empresariais. Ele reúne dashboards por área, indicadores, metas, relatórios, importação de dados e um assistente virtual. No back-end, o projeto trabalha com autenticação, isolamento de dados por cliente, tarefas agendadas e integrações externas.",
        openLiveProject: "Abrir projeto online"
    },
    en: {
        skipLink: "Skip to content",
        navAbout: "About",
        navProjects: "Projects",
        navJourney: "Journey",
        navCerts: "Certifications",
        navContact: "Contact",
        resume: "Résumé",
        availability: "Open to opportunities",
        hello: "Hi, I'm Miguel.",
        heroLine1: "I learn by building.",
        heroLine2: "And I care about building well.",
        heroDescription: "I study Systems Analysis and Development at SENAI in Taubaté. This portfolio brings together the projects I have been building to learn front end, back end and practical problem solving.",
        viewProjects: "View my projects",
        talkToMe: "Let's talk",
        projectsBuilt: "projects built",
        certificates: "certifications",
        graduation: "expected graduation",
        profileCaption: "Code, product &amp; design",
        roleCaption: "Full Stack Developer in training",
        aboutOverline: "About me",
        aboutTitle: "A little about me",
        aboutLead: "I am still at the beginning of my career, so I try to use every project to learn something new and improve what I already know.",
        aboutText: "I completed a technical course in Systems Analysis and Development and now continue my degree at SENAI Taubaté. I like getting hands-on, understanding the problem before coding and seeing an idea take shape on the screen.",
        teamwork: "Teamwork",
        continuousLearning: "Continuous learning",
        systemThinking: "Systems thinking",
        toolbox: "My toolbox",
        stackTitle: "Technologies I use",
        projectsOverline: "What I have built",
        projectsTitle: "Projects I have brought to life",
        projectsNote: "Each one represents a different stage in my learning.",
        gsplanSummary: "A financial and wealth management project with areas for budgeting, planning, investments, insurance and asset tracking.",
        personalSummary: "A personal dashboard for organizing money, studies and routines in one place, without switching between several tools.",
        viewCase: "View full project",
        visitSite: "Visit website",
        scopeTag: "Requirements management and traceability",
        realimentaTag: "Technology against food waste",
        vyzorTag: "Business data and KPI management",
        journeyOverline: "What I studied",
        journeyTitle: "My education so far",
        inProgress: "In progress",
        completed: "Completed",
        higherEducation: "Degree in Systems Analysis and Development",
        technicalEducation: "Technical Diploma in Systems Analysis and Development",
        highSchool: "High School",
        certsOverline: "Other studies",
        certsTitle: "Courses and certifications",
        certsNote: "Select a certificate to view it.",
        contactOverline: "Contact",
        contactTitle: "Want to talk about an opportunity or a project?",
        contactText: "Send me an email or reach me through one of the links below. I will be happy to talk.",
        footer: "© 2026 Miguel Oliveira. Made by me in Taubaté.",
        backTop: "Back to top",
        gsplanDetail: "A wealth management platform that organizes personal and business finances in one ecosystem. The experience brings together financial guidance, budgeting, planning, insurance, assets, investments and executive dashboards, turning complex data into clear decisions.",
        personalDetail: "A personal organization platform combining money, studies and routines in a simple view. Its dashboard tracks balances, income, expenses, subscriptions and transactions; the study area combines Pomodoro, weekly goals, subjects, content and deadlines to help users choose the next step and move through the day with focus.",
        scopeDetail: "A complete requirements management system for analyzing, approving and tracking software proposals. Its dashboard combines indicators, approval workflows, linked projects, metrics and decision traceability.",
        realimentaDetail: "An outreach project focused on fighting food insecurity. The platform connects institutions with surplus food to registered NGOs, making donation registration, visibility and logistics easier.",
        vyzorDetail: "Vyzor is a business data management and analytics platform. It brings together department dashboards, KPIs, goals, reports, data imports and a virtual assistant. Its back end handles authentication, tenant data isolation, scheduled tasks and external integrations.",
        openLiveProject: "Open live project"
    }
};

let currentLang = localStorage.getItem("lang") || "pt-BR";

const refreshIcons = () => {
    if (window.lucide) {
        window.lucide.createIcons({ attrs: { "aria-hidden": "true", "stroke-width": 1.8 } });
    }
};

const renderCertificados = () => {
    const container = document.getElementById("certificados-grid");
    if (!container) return;

    container.innerHTML = certificadosData.map((certificado, index) => {
        const titulo = certificado.titulo[currentLang] || certificado.titulo["pt-BR"];
        return `
            <button class="cert-card reveal is-visible" type="button" data-cert-index="${index}">
                <span class="cert-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="cert-copy">
                    <h3>${titulo}</h3>
                    <p>${certificado.instituicao} · ${certificado.ano}</p>
                </span>
                <i data-lucide="arrow-up-right"></i>
            </button>
        `;
    }).join("");

    container.querySelectorAll("[data-cert-index]").forEach((card) => {
        card.addEventListener("click", () => openCertificate(certificadosData[Number(card.dataset.certIndex)]));
    });

    refreshIcons();
};

const applyTranslations = () => {
    const dictionary = translations[currentLang];
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = dictionary[element.dataset.i18n];
        if (value !== undefined) element.innerHTML = value;
    });

    document.documentElement.lang = currentLang;
    document.getElementById("lang-label").textContent = currentLang === "pt-BR" ? "EN" : "PT";
    document.title = currentLang === "pt-BR"
        ? "Miguel Oliveira — Desenvolvedor Full Stack"
        : "Miguel Oliveira — Full Stack Developer";
    renderCertificados();
    refreshIcons();
};

const syncDialogState = () => {
    document.body.classList.toggle("dialog-open", Boolean(document.querySelector("dialog[open]")));
};

const openDialog = (dialog) => {
    if (!dialog || dialog.open) return;
    dialog.showModal();
    syncDialogState();
    const closeButton = dialog.querySelector("[data-close-dialog]");
    if (closeButton) requestAnimationFrame(() => closeButton.focus());
};

const closeDialog = (dialog) => {
    if (dialog?.open) dialog.close();
};

const openCertificate = (certificate) => {
    const dialog = document.getElementById("modal-certificado");
    const wrapper = document.getElementById("cert-content-wrapper");
    const caption = document.getElementById("certificate-title");
    const title = certificate.titulo[currentLang] || certificate.titulo["pt-BR"];

    wrapper.replaceChildren();
    if (certificate.imagem.toLowerCase().endsWith(".pdf")) {
        const frame = document.createElement("iframe");
        frame.src = certificate.imagem;
        frame.title = title;
        wrapper.append(frame);
    } else {
        const image = document.createElement("img");
        image.src = certificate.imagem;
        image.alt = title;
        wrapper.append(image);
    }
    caption.textContent = title;
    openDialog(dialog);
};

const initDialogs = () => {
    document.querySelectorAll("[data-dialog]").forEach((trigger) => {
        const activate = () => openDialog(document.getElementById(trigger.dataset.dialog));
        trigger.addEventListener("click", activate);
        if (trigger.tagName !== "BUTTON") {
            trigger.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    activate();
                }
            });
        }
    });

    document.querySelectorAll("dialog").forEach((dialog) => {
        dialog.querySelector("[data-close-dialog]")?.addEventListener("click", () => closeDialog(dialog));
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) closeDialog(dialog);
        });
        dialog.addEventListener("close", syncDialogState);
    });
};

const initLanguage = () => {
    document.getElementById("lang-toggle")?.addEventListener("click", () => {
        currentLang = currentLang === "pt-BR" ? "en" : "pt-BR";
        localStorage.setItem("lang", currentLang);
        applyTranslations();
    });
    applyTranslations();
};

const updateThemeIcon = () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    const button = document.getElementById("theme-toggle");
    button.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
    button.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
    refreshIcons();
};

const initTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || "dark";
    document.documentElement.dataset.theme = initialTheme;
    updateThemeIcon();

    document.getElementById("theme-toggle")?.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("theme", nextTheme);
        updateThemeIcon();
    });
};

const initMobileMenu = () => {
    const button = document.getElementById("menu-toggle");
    const navigation = document.getElementById("mobile-nav");
    if (!button || !navigation) return;

    const setOpen = (open) => {
        navigation.classList.toggle("is-open", open);
        button.setAttribute("aria-expanded", String(open));
        button.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
        refreshIcons();
    };

    button.addEventListener("click", () => setOpen(!navigation.classList.contains("is-open")));
    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1040) setOpen(false);
    });
};

const initReveal = () => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const delay = Number(entry.target.dataset.delay || 0);
            entry.target.style.setProperty("--delay", `${delay}ms`);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

    elements.forEach((element) => observer.observe(element));
};

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLanguage();
    initMobileMenu();
    initDialogs();
    initReveal();
    refreshIcons();
});
