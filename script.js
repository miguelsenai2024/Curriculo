/**
 * Configuração dos dados de certificados
 */
const certificadosData = [
    {
        titulo: { 'pt-BR': "Python para Dados: Primeiros Passos", 'en': "Python for Data: First Steps" },
        instituicao: "Alura",
        ano: "2026",
        imagem: "Img/py_para_dados_certificado.png"
    },
    {
        titulo: { 'pt-BR': "Conceitos Básicos de Redes", 'en': "Networking Basics" },
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/conceito_basico_certificado.png"
    },
    {
        titulo: { 'pt-BR': "JavaScript: Explorando a Linguagem", 'en': "JavaScript: Exploring the Language" },
        instituicao: "Alura",
        ano: "2026",
        imagem: "Img/java_certificado.png"
    },
    {
        titulo: { 'pt-BR': "Flask: Crie uma WebApp com Python", 'en': "Flask: Build a WebApp with Python" },
        instituicao: "Alura",
        ano: "2026",
        imagem: "Img/Flask_py_certificado.png"
    },
    {
        titulo: { 'pt-BR': "Começando com o Cisco Packet Tracer", 'en': "Getting Started with Cisco Packet Tracer" },
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/Começando_com_cisco_certiicado.png"
    }
];

/**
 * Dicionário de traduções (i18n)
 */
const translations = {
    'pt-BR': {
        theme: "Alternar Tema",
        role: "Desenvolvedor Full Stack",
        location: "📍 Taubaté, SP",
        email: "📧 E-Mail",
        download: "📄 Baixar Currículo",
        aboutTitle: "Sobre Mim",
        aboutText: "Estudante de Análise e Desenvolvimento de Sistemas com sólida base técnica pelo SENAI Taubaté. Busco minha primeira oportunidade como estagiário na área de tecnologia, visando aplicar meus conhecimentos em lógica de programação e desenvolvimento de software para agregar valor aos projetos da empresa e evoluir profissionalmente.",
        projectsTitle: "Projetos em Destaque",
        emotorsTag: "Plataforma de e-commerce automotivo",
        realimentaTag: "App de combate ao desperdício alimentar",
        gsplanTag: "Plataforma de gestão patrimonial (Wealth Management)",
        scopemasterTag: "Sistema de gerenciamento de requisitos (Projeto Integrador)",
        educationTitle: "Formação Acadêmica",
        edu1: "Ensino Superior em Análise e Desenvolvimento de Sistemas",
        edu2: "Curso Técnico de Análise e Desenvolvimento de Sistemas",
        edu3: "Ensino Médio",
        skillsTitle: "Tech Stack & Soft Skills",
        skill1: "Lógica de Sistemas",
        skill2: "Trabalho em Equipe",
        skill3: "Aprendizagem Contínua",
        certsTitle: "Certificações",
        footer: "© 2026 | Desenvolvido por Miguel Oliveira",
        emotorsP1: "Este projeto é uma plataforma web de vendas de motocicletas criada para uma apresentação em sala de aula. Ele simula um mercado digital real, onde os usuários podem facilmente navegar por diferentes motocicletas, ver seus detalhes e interagir com os anúncios.",
        emotorsP2: "<strong>Stack:</strong> Construído usando tecnologias front-end modernas (HTML, CSS e JavaScript), projetado para alta performance e excelente usabilidade.",
        realimentaP1: "O <strong>ReAlimenta</strong> é um projeto de extensão focado no combate à insegurança alimentar. A plataforma atua como uma ponte entre instituições com excedente de alimentos e ONGs cadastradas, otimizando a logística de doações.",
        realimentaP2: "O foco principal foi a criação de uma interface intuitiva para democratizar o acesso, permitindo cadastros rápidos e gestão visual de doações.",
        realimentaP3: "<strong>Stack:</strong> Desenvolvido com HTML5, CSS3 e JavaScript puro, priorizando acessibilidade e design responsivo.",
        gsplanP1: "O <strong>GSPlan</strong> é uma plataforma de <em>Wealth Management</em> (Gestão Patrimonial) que conecta assessores de elite à jornada patrimonial completa de seus clientes. O sistema oferece visão 360° do patrimônio em tempo real, com foco em segurança de nível bancário.",
        gsplanP2: "A interface inclui tela de login profissional com indicadores em destaque (AUM Gerenciado, Clientes Ativos, Retorno Médio) e um <strong>Dashboard Executivo</strong> chamado \"Bússola\" — visão patrimonial com cards de Patrimônio Líquido, Reserva de Emergência, Rentabilidade YTD, Drawdown Máximo, Metas no Prazo, Alocação Patrimonial por classe de ativo e Atividade Recente.",
        gsplanP3: "<strong>Funcionalidades:</strong> autenticação multifator, criptografia ponta a ponta, gerenciamento de múltiplos clientes, conexão de contas externas, planejamento de metas (Futuro) e visualização de carteira de ativos.",
        gsplanP4: "<strong>Stack:</strong> Front-end moderno com tema escuro elegante (paleta verde/teal), design responsivo e arquitetura focada em UX para o setor financeiro.",
        scopeP1: "O <strong>ScopeMaster</strong> é meu <strong>Projeto Integrador</strong> — um sistema completo de <em>Gerenciamento de Requisitos</em> voltado para análise, aprovação e acompanhamento de propostas de software dentro de empresas e equipes de desenvolvimento.",
        scopeP2: "A plataforma possui tela de login minimalista e um <strong>Painel Geral</strong> com KPIs em tempo real: Total de Requisitos, Aprovados, Pendentes e Rejeitados. Inclui módulos de <strong>Painel de Propostas, Fluxo de Ideias, Projetos Aprovados, Métricas de Aprovação</strong> e <strong>Autorização de Usuários</strong>.",
        scopeP3: "<strong>Funcionalidades:</strong> classificação de requisitos (Funcional / Não Funcional), workflow de aprovação, vinculação a projetos (Sistema de Estoque, App de Entregas, Portal RH, E-commerce, CRM), barras de progresso por projeto e busca global.",
        scopeP4: "<strong>Stack:</strong> Aplicação full-stack com tema escuro profissional, foco em produtividade do administrador e rastreabilidade de decisões — desenvolvida como entrega final do curso técnico no SENAI."
    },
    'en': {
        theme: "Toggle Theme",
        role: "Full Stack Developer",
        location: "📍 Taubaté, SP",
        email: "📧 E-Mail",
        download: "📄 Download Resume",
        aboutTitle: "About Me",
        aboutText: "Systems Analysis and Development student with a strong technical foundation from SENAI Taubaté. I'm looking for my first opportunity as a tech intern, aiming to apply my knowledge of programming logic and software development to add value to company projects while growing professionally.",
        projectsTitle: "Featured Projects",
        emotorsTag: "Automotive e-commerce platform",
        realimentaTag: "App fighting food waste",
        gsplanTag: "Wealth management platform",
        scopemasterTag: "Requirements management system (Capstone Project)",
        educationTitle: "Education",
        edu1: "Bachelor's in Systems Analysis and Development",
        edu2: "Technical Course in Systems Analysis and Development",
        edu3: "High School",
        skillsTitle: "Tech Stack & Soft Skills",
        skill1: "Systems Logic",
        skill2: "Teamwork",
        skill3: "Continuous Learning",
        certsTitle: "Certifications",
        footer: "© 2026 | Developed by Miguel Oliveira",
        emotorsP1: "This project is a motorcycle sales web platform built for a classroom presentation. It simulates a real digital marketplace, where users can easily browse different motorcycles, view their details, and interact with listings.",
        emotorsP2: "<strong>Stack:</strong> Built with modern front-end technologies (HTML, CSS, and JavaScript), designed for high performance and excellent usability.",
        realimentaP1: "<strong>ReAlimenta</strong> is an extension project focused on fighting food insecurity. The platform acts as a bridge between institutions with surplus food and registered NGOs, optimizing donation logistics.",
        realimentaP2: "The main focus was building an intuitive interface to democratize access, enabling fast registrations and visual donation management.",
        realimentaP3: "<strong>Stack:</strong> Developed with HTML5, CSS3, and vanilla JavaScript, prioritizing accessibility and responsive design.",
        gsplanP1: "<strong>GSPlan</strong> is a <em>Wealth Management</em> platform that connects elite advisors to the full wealth journey of their clients. The system offers a real-time 360° view of assets, with bank-grade security in focus.",
        gsplanP2: "The interface includes a professional login screen with featured KPIs (AUM Managed, Active Clients, Average Return) and an <strong>Executive Dashboard</strong> called \"Bússola\" (Compass) — a wealth view with cards for Net Worth, Emergency Fund, YTD Yield, Max Drawdown, On-Track Goals, Asset Allocation by class, and Recent Activity.",
        gsplanP3: "<strong>Features:</strong> multi-factor authentication, end-to-end encryption, multi-client management, external account connection, goal planning (Futuro), and asset portfolio visualization.",
        gsplanP4: "<strong>Stack:</strong> Modern front-end with elegant dark theme (green/teal palette), responsive design, and a UX-focused architecture tailored for the financial sector.",
        scopeP1: "<strong>ScopeMaster</strong> is my <strong>Capstone Project</strong> — a full <em>Requirements Management</em> system aimed at analyzing, approving, and tracking software proposals within companies and development teams.",
        scopeP2: "The platform has a minimal login screen and a <strong>Main Panel</strong> with real-time KPIs: Total Requirements, Approved, Pending, and Rejected. It includes modules for <strong>Proposals Board, Ideas Flow, Approved Projects, Approval Metrics</strong>, and <strong>User Authorization</strong>.",
        scopeP3: "<strong>Features:</strong> requirements classification (Functional / Non-Functional), approval workflow, project linking (Inventory System, Delivery App, HR Portal, E-commerce, CRM), per-project progress bars, and global search.",
        scopeP4: "<strong>Stack:</strong> Full-stack application with a professional dark theme, focused on admin productivity and decision traceability — built as the final deliverable of the technical course at SENAI."
    }
};

/**
 * Estado global de idioma
 */
let currentLang = localStorage.getItem('lang') || 'pt-BR';

/**
 * Aplica traduções a todos os elementos com data-i18n
 */
const applyTranslations = () => {
    const dict = translations[currentLang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    document.documentElement.setAttribute('lang', currentLang);

    // Atualiza label do botão de idioma (mostra o idioma alternativo)
    const label = document.getElementById('lang-label');
    if (label) label.textContent = currentLang === 'pt-BR' ? 'EN' : 'PT';

    // Re-render certificados para atualizar títulos traduzidos
    renderCertificados();
};

/**
 * Renderiza os cards de certificados (com idioma corrente)
 */
const renderCertificados = () => {
    const container = document.getElementById('certificados-grid');
    if (!container) return;
    container.innerHTML = '';

    certificadosData.forEach(cert => {
        const titulo = cert.titulo[currentLang] || cert.titulo['pt-BR'];
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.onclick = () => renderCertificadoModal(cert.imagem, titulo);
        card.innerHTML = `
            <div class="project-content">
                <h4>${titulo}</h4>
                <p>${cert.instituicao} • ${cert.ano}</p>
            </div>
        `;
        container.appendChild(card);
    });
};

/**
 * Inicializa o botão de idioma
 */
const initLanguage = () => {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        currentLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';
        localStorage.setItem('lang', currentLang);
        applyTranslations();
    });

    applyTranslations();
};

/**
 * Global Modal Manager Pattern
 */
const modalManager = {
    open(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('active');
    },

    close(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('active');
    }
};

/**
 * Handler específico para setup da visualização de imagem do certificado
 */
const renderCertificadoModal = (src, title) => {
    const imgElement = document.getElementById('img-certificado');
    const captionElement = document.getElementById('legenda-certificado');

    if (imgElement && captionElement) {
        imgElement.src = src;
        imgElement.alt = title;
        captionElement.textContent = title;
        modalManager.open('modal-certificado');
    }
};

/**
 * Dark Mode Toggle Logic
 */
const initDarkMode = () => {
    const btn = document.getElementById('dark-mode-toggle');
    if (!btn) return;

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
};

/**
 * Listeners globais para modais
 */
const setupGlobalListeners = () => {
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('active');
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
};

/**
 * Efeito de Scroll Reveal (Surgir ao Rolar a Página)
 */
const initScrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
};

/**
 * THREE.JS - Fundo 3D Constelação
 */
const initThreeJSBackground = () => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const particlesCount = 150;
    const positions = new Float32Array(particlesCount * 3);
    const velocities = [];

    for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;
        velocities.push({
            x: (Math.random() - 0.5) * 1.5,
            y: (Math.random() - 0.5) * 1.5,
            z: (Math.random() - 0.5) * 1.5
        });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
        color: 0x38bdf8, size: 4, transparent: true, opacity: 0.6,
    });
    const particlesMesh = new THREE.Points(geometry, particleMaterial);
    scene.add(particlesMesh);

    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x818cf8, transparent: true, opacity: 0.15
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particlesCount * particlesCount * 3);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    let mouseX = 0, mouseY = 0;
    const windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX) * 0.5;
        mouseY = (event.clientY - windowHalfY) * 0.5;
    });

    const animate = () => {
        requestAnimationFrame(animate);

        const posAttribute = geometry.getAttribute('position');
        for (let i = 0; i < particlesCount; i++) {
            posAttribute.array[i * 3] += velocities[i].x;
            posAttribute.array[i * 3 + 1] += velocities[i].y;
            posAttribute.array[i * 3 + 2] += velocities[i].z;

            if (Math.abs(posAttribute.array[i * 3]) > 1000) velocities[i].x *= -1;
            if (Math.abs(posAttribute.array[i * 3 + 1]) > 1000) velocities[i].y *= -1;
            if (Math.abs(posAttribute.array[i * 3 + 2]) > 500) velocities[i].z *= -1;
        }
        posAttribute.needsUpdate = true;

        let lineVertexIndex = 0;
        for (let i = 0; i < particlesCount; i++) {
            for (let j = i + 1; j < particlesCount; j++) {
                const dx = posAttribute.array[i * 3] - posAttribute.array[j * 3];
                const dy = posAttribute.array[i * 3 + 1] - posAttribute.array[j * 3 + 1];
                const dz = posAttribute.array[i * 3 + 2] - posAttribute.array[j * 3 + 2];

                if (dx * dx + dy * dy + dz * dz < 40000) {
                    linePositions[lineVertexIndex++] = posAttribute.array[i * 3];
                    linePositions[lineVertexIndex++] = posAttribute.array[i * 3 + 1];
                    linePositions[lineVertexIndex++] = posAttribute.array[i * 3 + 2];
                    linePositions[lineVertexIndex++] = posAttribute.array[j * 3];
                    linePositions[lineVertexIndex++] = posAttribute.array[j * 3 + 1];
                    linePositions[lineVertexIndex++] = posAttribute.array[j * 3 + 2];
                }
            }
        }
        lineGeometry.setDrawRange(0, lineVertexIndex / 3);
        lineGeometry.attributes.position.needsUpdate = true;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Bootstrap da aplicação
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();          // Aplica traduções e inicia botão de idioma (também renderiza certificados)
    initDarkMode();
    setupGlobalListeners();
    initThreeJSBackground();
    initScrollReveal();
});
