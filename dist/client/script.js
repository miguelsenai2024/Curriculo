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
        hello: "Olá, eu sou o Miguel.",
        heroLine1: "Transformo ideias em",
        heroLine2: "experiências digitais.",
        heroDescription: "Desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas, criando produtos web funcionais, intuitivos e visualmente marcantes.",
        viewProjects: "Ver meus projetos",
        talkToMe: "Fale comigo",
        projectsBuilt: "projetos construídos",
        certificates: "certificações",
        graduation: "formação prevista",
        profileCaption: "Código, produto &amp; design",
        aboutOverline: "Quem eu sou",
        aboutTitle: "Curioso por natureza.<br>Desenvolvedor por escolha.",
        aboutLead: "Gosto de transformar problemas complexos em interfaces simples, úteis e agradáveis de usar.",
        aboutText: "Sou estudante de Análise e Desenvolvimento de Sistemas no SENAI Taubaté, com formação técnica na mesma área. Busco minha primeira oportunidade profissional para contribuir com projetos reais, aprender com uma equipe experiente e evoluir como desenvolvedor.",
        teamwork: "Trabalho em equipe",
        continuousLearning: "Aprendizagem contínua",
        systemThinking: "Pensamento sistêmico",
        toolbox: "Minha caixa de ferramentas",
        stackTitle: "Tecnologias que uso",
        projectsOverline: "Trabalhos selecionados",
        projectsTitle: "Projetos que unem<br>ideia, código e propósito.",
        projectsNote: "Explore os detalhes ou abra os projetos publicados.",
        gsplanSummary: "Ecossistema de gestão financeira e patrimonial que reúne orçamento, planejamento, investimentos, seguros e visão executiva em uma experiência integrada.",
        personalSummary: "Hub pessoal que centraliza finanças, rotina e estudos. A plataforma transforma informações dispersas em uma visão clara do dia, com foco, metas e próximos passos.",
        viewCase: "Ver projeto completo",
        visitSite: "Visitar site",
        scopeTag: "Gestão e rastreabilidade de requisitos",
        realimentaTag: "Tecnologia contra o desperdício alimentar",
        emotorsTag: "Marketplace de motocicletas",
        journeyOverline: "Formação &amp; evolução",
        journeyTitle: "Construindo uma base<br>para ir cada vez mais longe.",
        inProgress: "Em andamento",
        completed: "Concluído",
        higherEducation: "Superior em Análise e Desenvolvimento de Sistemas",
        technicalEducation: "Técnico em Análise e Desenvolvimento de Sistemas",
        highSchool: "Ensino Médio",
        certsOverline: "Aprendizado contínuo",
        certsTitle: "Certificações que<br>ampliam meu repertório.",
        certsNote: "Clique em um certificado para visualizar.",
        contactOverline: "Vamos construir algo juntos?",
        contactTitle: "Uma boa ideia começa<br>com uma conversa.",
        contactText: "Estou aberto a oportunidades de estágio, colaborações e novos desafios em desenvolvimento.",
        footer: "© 2026 Miguel Oliveira. Projetado e desenvolvido com atenção aos detalhes.",
        backTop: "Voltar ao topo",
        gsplanDetail: "Plataforma de gestão patrimonial que organiza a vida financeira de pessoas e empresas em um único ecossistema. A experiência reúne Bússola financeira, orçamento, planejamento, seguros, patrimônio, investimentos e painéis executivos, transformando dados complexos em decisões claras.",
        personalDetail: "Uma plataforma de organização pessoal que reúne dinheiro, estudos e rotina em uma visão simples. O dashboard acompanha saldo, receitas, despesas, assinaturas e transações; a área de estudos combina Pomodoro, meta semanal, matérias, conteúdos e prazos para ajudar o usuário a decidir o próximo passo e seguir o dia com foco.",
        scopeDetail: "Sistema completo de gerenciamento de requisitos para analisar, aprovar e acompanhar propostas de software. O painel reúne indicadores, workflow de aprovação, projetos vinculados, métricas e rastreabilidade das decisões.",
        realimentaDetail: "Projeto de extensão focado no combate à insegurança alimentar. A plataforma conecta instituições com alimentos excedentes a ONGs cadastradas, facilitando o registro, a visualização e a logística das doações.",
        emotorsDetail: "Plataforma web de vendas de motocicletas que simula um marketplace digital. O usuário pode navegar pelo catálogo, consultar detalhes dos modelos e gerenciar itens em um carrinho responsivo.",
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
        heroLine1: "I turn ideas into",
        heroLine2: "digital experiences.",
        heroDescription: "Full Stack Developer and Systems Analysis and Development student, building functional, intuitive and visually distinctive web products.",
        viewProjects: "View my projects",
        talkToMe: "Let's talk",
        projectsBuilt: "projects built",
        certificates: "certifications",
        graduation: "expected graduation",
        profileCaption: "Code, product &amp; design",
        aboutOverline: "Who I am",
        aboutTitle: "Curious by nature.<br>A developer by choice.",
        aboutLead: "I enjoy turning complex problems into interfaces that are simple, useful and pleasant to use.",
        aboutText: "I study Systems Analysis and Development at SENAI Taubaté and hold a technical diploma in the same field. I am looking for my first professional opportunity to contribute to real projects, learn from an experienced team and grow as a developer.",
        teamwork: "Teamwork",
        continuousLearning: "Continuous learning",
        systemThinking: "Systems thinking",
        toolbox: "My toolbox",
        stackTitle: "Technologies I use",
        projectsOverline: "Selected work",
        projectsTitle: "Projects where idea,<br>code and purpose meet.",
        projectsNote: "Explore each case or open the published projects.",
        gsplanSummary: "A financial and wealth management ecosystem combining budgets, planning, investments, insurance and executive insights in one integrated experience.",
        personalSummary: "A personal hub for finances, routines and studies. It turns scattered information into a clear daily view with focus, goals and next steps.",
        viewCase: "View full project",
        visitSite: "Visit website",
        scopeTag: "Requirements management and traceability",
        realimentaTag: "Technology against food waste",
        emotorsTag: "Motorcycle marketplace",
        journeyOverline: "Education &amp; growth",
        journeyTitle: "Building a foundation<br>to keep going further.",
        inProgress: "In progress",
        completed: "Completed",
        higherEducation: "Degree in Systems Analysis and Development",
        technicalEducation: "Technical Diploma in Systems Analysis and Development",
        highSchool: "High School",
        certsOverline: "Continuous learning",
        certsTitle: "Certifications that<br>expand my perspective.",
        certsNote: "Select a certificate to view it.",
        contactOverline: "Shall we build something together?",
        contactTitle: "A good idea starts<br>with a conversation.",
        contactText: "I am open to internship opportunities, collaborations and new development challenges.",
        footer: "© 2026 Miguel Oliveira. Designed and developed with attention to detail.",
        backTop: "Back to top",
        gsplanDetail: "A wealth management platform that organizes personal and business finances in one ecosystem. The experience brings together financial guidance, budgeting, planning, insurance, assets, investments and executive dashboards, turning complex data into clear decisions.",
        personalDetail: "A personal organization platform combining money, studies and routines in a simple view. Its dashboard tracks balances, income, expenses, subscriptions and transactions; the study area combines Pomodoro, weekly goals, subjects, content and deadlines to help users choose the next step and move through the day with focus.",
        scopeDetail: "A complete requirements management system for analyzing, approving and tracking software proposals. Its dashboard combines indicators, approval workflows, linked projects, metrics and decision traceability.",
        realimentaDetail: "An outreach project focused on fighting food insecurity. The platform connects institutions with surplus food to registered NGOs, making donation registration, visibility and logistics easier.",
        emotorsDetail: "A motorcycle sales platform that simulates a digital marketplace. Users can browse the catalogue, see model details and manage items in a responsive shopping cart.",
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

const initPointerEffects = () => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reducedMotion) return;

    document.querySelectorAll("[data-tilt]").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const bounds = card.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            card.style.transform = `perspective(1400px) rotateX(${y * -1.8}deg) rotateY(${x * 1.8}deg)`;
        });
        card.addEventListener("pointerleave", () => {
            card.style.transform = "perspective(1400px) rotateX(0) rotateY(0)";
        });
    });

    const orbit = document.getElementById("profile-orbit");
    orbit?.addEventListener("pointermove", (event) => {
        const bounds = orbit.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        orbit.style.transform = `rotateX(${y * -5}deg) rotateY(${x * 7}deg)`;
    });
    orbit?.addEventListener("pointerleave", () => {
        orbit.style.transform = "rotateX(0) rotateY(0)";
    });
};

const initCanvas = () => {
    const canvas = document.getElementById("bg-canvas");
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrame = 0;

    const createParticles = () => {
        const amount = window.innerWidth < 700 ? 24 : 58;
        particles = Array.from({ length: amount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.16,
            vy: (Math.random() - 0.5) * 0.16,
            radius: Math.random() * 1.1 + 0.35
        }));
    };

    const resize = () => {
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        createParticles();
    };

    const draw = () => {
        context.clearRect(0, 0, width, height);
        const isLight = document.documentElement.dataset.theme === "light";
        const dotColor = isLight ? "rgba(46, 115, 255, 0.34)" : "rgba(122, 190, 255, 0.38)";
        const lineColor = isLight ? "rgba(46, 115, 255, 0.055)" : "rgba(122, 190, 255, 0.07)";

        particles.forEach((particle, index) => {
            if (!reducedMotion) {
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.x < -10 || particle.x > width + 10) particle.vx *= -1;
                if (particle.y < -10 || particle.y > height + 10) particle.vy *= -1;
            }

            context.beginPath();
            context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            context.fillStyle = dotColor;
            context.fill();

            for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
                const other = particles[otherIndex];
                const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
                if (distance > 135) continue;
                context.beginPath();
                context.moveTo(particle.x, particle.y);
                context.lineTo(other.x, other.y);
                context.strokeStyle = lineColor;
                context.lineWidth = 1 - distance / 135;
                context.stroke();
            }
        });

        if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => {
        if (reducedMotion) return;
        if (document.hidden) {
            cancelAnimationFrame(animationFrame);
        } else {
            cancelAnimationFrame(animationFrame);
            draw();
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLanguage();
    initMobileMenu();
    initDialogs();
    initReveal();
    initPointerEffects();
    initCanvas();
    refreshIcons();
});
