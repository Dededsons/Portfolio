/**
 * Portfólio Profissional — João André Diniz
 * Módulo Principal: Navegação, Tema, Acessibilidade, Clipboard e Internacionalização (i18n)
 */

const i18nData = {
    pt: {
        seo: {
            title: "João André Diniz | Desenvolvedor de Software em Formação",
            description: "Portfólio profissional de João André Diniz - Estudante de ADS (UCB) buscando estágio. Experiência prática em desenvolvimento web, sistemas, processos e dados."
        },
        toggle: { label: "Mudar idioma para inglês" },
        a11y: {
            skipLink: "Pular para o conteúdo principal",
            themeToggle: "Alternar entre tema claro e escuro",
            mainNav: "Navegação Principal",
            homeLink: "Página inicial de João André Diniz",
            openMenu: "Abrir menu de navegação",
            closeMenu: "Fechar menu de navegação"
        },
        nav: {
            about: "Sobre",
            skills: "Competências",
            experience: "Trajetória",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            badge: "Aberto a oportunidades de estágio e entrada em tecnologia",
            title: "Desenvolvedor de Software em formação com <span class=\"gradient-text\">visão analítica e foco em soluções reais.</span>",
            subtitle: "Graduando em <strong>Análise e Desenvolvimento de Sistemas (UCB)</strong> com experiência prática em rotinas administrativas e de sistemas. Busco aplicar minha visão de negócios e capacidade analítica no desenvolvimento web, dados e tecnologia.",
            tags: {
                data: "SQL & Dados",
                web: "Desenvolvimento Web",
                systems: "Sistemas & Processos",
                ai: "IA Generativa"
            },
            btnProjects: "Explorar Projetos",
            btnResume: "Baixar Currículo",
            imgAlt: "Foto de perfil profissional de João André Diniz",
            info: {
                location: "Brasília, DF — Brasil",
                english: "Inglês — Avançado",
                degree: "Análise e Desenvolvimento de Sistemas — UCB"
            }
        },
        about: {
            subtitle: "Trajetória & Filosofia",
            title: "Sobre João André Diniz",
            card1: {
                title: "<i data-feather=\"user-check\" aria-hidden=\"true\"></i> Perfil Profissional",
                p1: "Sou um profissional em formação com uma combinação diferenciada de tecnologia, negócios e experiência prática. Minha jornada acadêmica inclui uma passagem pela <strong>Universidade de Brasília (UnB)</strong> e, atualmente, curso <strong>Análise e Desenvolvimento de Sistemas na UCB</strong>.",
                p2: "Possuo vivência profissional em suporte a sistemas corporativos e em rotinas administrativas, o que desenvolveu minha capacidade de entender como a tecnologia impacta processos reais. Tenho me dedicado ao desenvolvimento web, estruturação de dados e criação de projetos práticos, unindo disciplina constante, foco e resiliência para construir minha carreira na área técnica."
            },
            card2: {
                title: "<i data-feather=\"zap\" aria-hidden=\"true\"></i> Por que o meu perfil se destaca?",
                h1_full: "<strong>Visão Híbrida: Tecnologia + Negócios:</strong> Experiência com processos, sistemas e rotinas administrativas combinada à atual formação estruturada em tecnologia.",
                h2_full: "<strong>Perfil Analítico e Orientado a Soluções:</strong> Capacidade de analisar problemas, compreender regras de negócio e buscar soluções de forma lógica e organizada.",
                h3_full: "<strong>Disciplina, Resiliência e Evolução Contínua:</strong> Mentalidade orientada ao aperfeiçoamento diário em desenvolvimento web, dados e inteligência artificial, com rápida adaptação a novos desafios."
            }
        },
        skills: {
            subtitle: "Stack Técnica & Metodologias",
            title: "Competências Profissionais",
            c1: {
                title: "Desenvolvimento de Software",
                desc: "Estudo e aplicação prática em programação, construção de projetos web e versionamento de código.",
                t1: "Desenvolvimento Web",
                t2: "Integração de APIs",
                t3: "UI/UX Básico"
            },
            c2: {
                title: "Dados & Bancos de Dados",
                desc: "Conhecimento em estruturação de consultas, modelagem de informações e análise visual de dados.",
                t1: "Modelagem de Dados",
                t2: "Banco de Dados",
                t3: "Análise de Dados",
                t4: "Excel Avançado",
                t5: "Análise de Métricas"
            },
            c3: {
                title: "Sistemas & Processos",
                desc: "Familiaridade com fluxos operacionais, suporte a usuários e análise de rotinas administrativas.",
                t1: "Sistemas ERP",
                t2: "Suporte a Sistemas",
                t3: "Processos Administrativos",
                t4: "Controladoria",
                t5: "Análise de Processos",
                t6: "Regras de Negócio"
            },
            c4: {
                title: "Tecnologias Emergentes & Práticas",
                desc: "Competências voltadas para a evolução tecnológica, adaptação a novos cenários e comunicação técnica.",
                t1: "IA Generativa",
                t2: "Engenharia de Prompt",
                t3: "Pensamento Analítico",
                t4: "Aprendizado Contínuo",
                t5: "Inglês — Avançado"
            }
        },
        exp: {
            subtitle: "Histórico de Atuação",
            title: "Experiência Profissional & Formação",
            i1: {
                title: "Suporte a Sistemas e Rotinas Administrativas",
                company: "Experiências Profissionais",
                period: "Vivência Prática",
                text: "Experiência com rotinas operacionais, validação de informações em sistemas de gestão (ERP) e processos de controladoria, mantendo contato contínuo com áreas internas e garantindo o fluxo das operações.",
                b1: "Atendimento e suporte relacionado ao ambiente corporativo e ao sistema de gestão.",
                b2: "Validação de informações e acompanhamento de rotinas administrativas.",
                b3: "Análise de processos operacionais com foco na consistência dos dados internos."
            },
            i2: {
                title: "Desenvolvimento Web e Projetos Independentes",
                company: "Projetos Práticos",
                period: "Atuação Contínua",
                text: "Estudo aplicado e desenvolvimento de projetos, construindo interfaces web funcionais e responsivas para consolidar conhecimentos técnicos na prática.",
                b1: "Criação de websites e páginas web com estruturação semântica em HTML.",
                b2: "Desenvolvimento de interfaces e estilização de layouts com CSS e foco em responsividade.",
                b3: "Aplicação de JavaScript para interatividade e organização de código em projetos práticos."
            },
            i3: {
                title: "Graduação em Análise e Desenvolvimento de Sistemas",
                period: "Em Andamento",
                text: "Formação focada em base de sistemas, desenvolvimento de software, lógica de programação, banco de dados e engenharia de requisitos."
            },
            i4: {
                title: "Certificações em Tecnologia e IA",
                company: "Aprendizado Contínuo",
                period: "Formação Complementar",
                text: "Formação complementar por meio de certificações em Inteligência Artificial, IA Generativa, Engenharia de Prompt, Desenvolvimento Web e Ciência de Dados, reforçando minha evolução técnica e mantendo meus conhecimentos alinhados às tecnologias e boas práticas mais atuais do mercado."
            }
        },
        projects: {
            subtitle: "Portfólio Prático",
            title: "Projetos em Destaque",
            badge: "Projeto em Destaque",
            p1: {
                t1: "Banco de Dados",
                t2: "Gestão de Estoque",
                problem: "<strong>Problema:</strong> Necessidade de organizar e gerenciar pedidos, clientes e produção de uma camiseteria real.<br>",
                solution: "<strong>Solução:</strong> Desenvolvimento de um sistema focado na modelagem de banco de dados e gestão das regras de negócio, facilitando o controle de estoque, o fluxo de clientes e o acompanhamento logístico.",
                role: "<i data-feather=\"user\" aria-hidden=\"true\"></i> Papel: Desenvolvedor em Formação",
                btn: "Ver Perfil no GitHub",
                btnAria: "Ver código do projeto Fio Mestre no GitHub"
            },
            p2: {
                title: "Look Fino Ternos - Desenvolvimento Web",
                t1: "Responsividade",
                t2: "Interface",
                obj: "<strong>Objetivo:</strong> Construir a presença digital estruturada para uma loja de Ternos.<br>",
                sol: "<strong>Solução:</strong> Desenvolvimento de um website multipáginas focado na correta hierarquia da informação, navegação funcional e implementação de layout totalmente responsivo para dispositivos móveis.",
                role: "<i data-feather=\"user\" aria-hidden=\"true\"></i> Papel: Desenvolvedor Full-Stack",
                btn: "Visitar Site"
            },
            p3: {
                title: "Avaliação de Qualidade de Software",
                t1: "Engenharia de Software",
                t2: "Maturidade",
                obj: "<strong>Objetivo:</strong> Analisar a maturidade de processos e a qualidade de sistemas de acordo com padrões rigorosos.<br>",
                sol: "<strong>Solução:</strong> Elaboração de um projeto acadêmico realizando a análise crítica estruturada de um sistema universitário, aplicando as normas internacionais ISO/IEC 25010 e métricas baseadas no modelo CMMI.",
                role: "<i data-feather=\"user\" aria-hidden=\"true\"></i> Papel: Estudante de Análise de Sistemas",
                btn: "Ver Perfil no GitHub"
            }
        },
        contact: {
            subtitle: "Vamos conversar?",
            title: "Pronto para somar à sua equipe.",
            text: "Estou aberto a oportunidades de estágio e posições de entrada em tecnologia, desenvolvimento, dados, sistemas e suporte. Vamos construir algo relevante juntos?",
            emailLabel: "E-mail de Contato",
            copyBtn: "Copiar",
            copiedBtn: "Copiado!",
            copyAria: "Copiar endereço de e-mail",
            phone: "Telefone / WhatsApp"
        },
        footer: {
            status: "TECH • DATA • SYSTEMS",
            copy: "João André Diniz. Desenvolvido com HTML5, CSS3 e JavaScript puro.",
            backTop: "Voltar ao Topo"
        }
    },
    en: {
        seo: {
            title: "João André Diniz | Software Developer in Training",
            description: "Professional portfolio of João André Diniz - Systems Analysis and Development student (UCB) seeking an internship. Practical experience in web development, systems, processes, and data."
        },
        toggle: { label: "Switch language to Portuguese" },
        a11y: {
            skipLink: "Skip to main content",
            themeToggle: "Toggle between light and dark theme",
            mainNav: "Main Navigation",
            homeLink: "João André Diniz Homepage",
            openMenu: "Open navigation menu",
            closeMenu: "Close navigation menu"
        },
        nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            badge: "Open to internship and entry-level tech opportunities",
            title: "Software Developer in training with an <span class=\"gradient-text\">analytical mindset and focus on real-world solutions.</span>",
            subtitle: "Undergraduate student in <strong>Systems Analysis and Development (UCB)</strong> with practical experience in administrative and systems routines. Seeking to apply my business vision and analytical skills to web development, data, and technology.",
            tags: {
                data: "SQL & Data",
                web: "Web Development",
                systems: "Systems & Processes",
                ai: "Generative AI"
            },
            btnProjects: "Explore Projects",
            btnResume: "Download Resume",
            imgAlt: "Professional profile picture of João André Diniz",
            info: {
                location: "Brasília, DF — Brazil",
                english: "English — Advanced",
                degree: "Systems Analysis and Development — UCB"
            }
        },
        about: {
            subtitle: "Journey & Philosophy",
            title: "About João André Diniz",
            card1: {
                title: "<i data-feather=\"user-check\" aria-hidden=\"true\"></i> Professional Profile",
                p1: "I am a professional in training with a distinctive combination of technology, business, and practical experience. My academic journey includes a period at the <strong>University of Brasília (UnB)</strong>, and I am currently studying <strong>Systems Analysis and Development at UCB</strong>.",
                p2: "I have professional experience in corporate systems support and administrative routines, which has developed my ability to understand how technology impacts real-world processes. I have been dedicating myself to web development, data structuring, and creating practical projects, combining constant discipline, focus, and resilience to build my technical career."
            },
            card2: {
                title: "<i data-feather=\"zap\" aria-hidden=\"true\"></i> Why does my profile stand out?",
                h1_full: "<strong>Hybrid Vision: Tech + Business:</strong> Experience with processes, systems, and administrative routines combined with an ongoing structured education in technology.",
                h2_full: "<strong>Analytical and Solution-Oriented Profile:</strong> Ability to analyze problems, understand business rules, and seek solutions logically and systematically.",
                h3_full: "<strong>Discipline, Resilience, and Continuous Evolution:</strong> Mindset focused on daily improvement in web development, data, and artificial intelligence, with rapid adaptation to new challenges."
            }
        },
        skills: {
            subtitle: "Technical Stack & Methodologies",
            title: "Professional Skills",
            c1: {
                title: "Software Development",
                desc: "Study and practical application in programming, building web projects, and code versioning.",
                t1: "Web Development",
                t2: "API Integration",
                t3: "Basic UI/UX"
            },
            c2: {
                title: "Data & Databases",
                desc: "Knowledge in query structuring, information modeling, and visual data analysis.",
                t1: "Data Modeling",
                t2: "Databases",
                t3: "Data Analysis",
                t4: "Advanced Excel",
                t5: "Metrics Analysis"
            },
            c3: {
                title: "Systems & Processes",
                desc: "Familiarity with operational workflows, user support, and administrative routine analysis.",
                t1: "ERP Systems",
                t2: "Systems Support",
                t3: "Admin Processes",
                t4: "Controllership",
                t5: "Process Analysis",
                t6: "Business Rules"
            },
            c4: {
                title: "Emerging Tech & Practices",
                desc: "Skills focused on technological evolution, adapting to new scenarios, and technical communication.",
                t1: "Generative AI",
                t2: "Prompt Engineering",
                t3: "Analytical Thinking",
                t4: "Continuous Learning",
                t5: "English — Advanced"
            }
        },
        exp: {
            subtitle: "Work History",
            title: "Professional Experience & Education",
            i1: {
                title: "Systems Support and Administrative Routines",
                company: "Professional Experience",
                period: "Practical Experience",
                text: "Experience with operational routines, information validation in management systems (ERP), and controllership processes, maintaining continuous contact with internal departments and ensuring smooth operational workflows.",
                b1: "Corporate environment and management system support and service.",
                b2: "Information validation and monitoring of administrative routines.",
                b3: "Analysis of operational processes focusing on internal data consistency."
            },
            i2: {
                title: "Web Development and Independent Projects",
                company: "Practical Projects",
                period: "Ongoing Action",
                text: "Applied study and project development, building functional and responsive web interfaces to consolidate technical knowledge in practice.",
                b1: "Creation of websites and web pages with semantic HTML structuring.",
                b2: "Interface development and layout styling with CSS, focusing on responsiveness.",
                b3: "JavaScript application for interactivity and code organization in practical projects."
            },
            i3: {
                title: "Degree in Systems Analysis and Development",
                period: "In Progress",
                text: "Education focused on systems fundamentals, software development, programming logic, databases, and requirements engineering."
            },
            i4: {
                title: "Technology & AI Certifications",
                company: "Continuous Learning",
                period: "Professional Development",
                text: "Complementary education through certifications in Artificial Intelligence, Generative AI, Prompt Engineering, Web Development, and Data Science, strengthening my technical expertise while keeping my skills aligned with the latest technologies and industry best practices."
            }
        },
        projects: {
            subtitle: "Practical Portfolio",
            title: "Featured Projects",
            badge: "Featured Project",
            p1: {
                t1: "Databases",
                t2: "Inventory Mgmt",
                problem: "<strong>Problem:</strong> Need to organize and manage orders, clients, and production for a real t-shirt shop.<br>",
                solution: "<strong>Solution:</strong> Development of a system focused on database modeling and business rule management, facilitating inventory control, client workflow, and logistics tracking.",
                role: "<i data-feather=\"user\" aria-hidden=\"true\"></i> Role: Developer in Training",
                btn: "View GitHub Profile",
                btnAria: "View Fio Mestre project code on GitHub"
            },
            p2: {
                title: "Look Fino Ternos - Web Development",
                t1: "Responsiveness",
                t2: "Interface",
                obj: "<strong>Objective:</strong> Build a structured digital presence for a suit store.<br>",
                sol: "<strong>Solution:</strong> Development of a multi-page website focused on proper information hierarchy, functional navigation, and implementation of a fully responsive layout for mobile devices.",
                role: "<i data-feather=\"user\" aria-hidden=\"true\"></i> Role: Full-Stack Developer",
                btn: "Visit Site"
            },
            p3: {
                title: "Software Quality Assessment",
                t1: "Software Engineering",
                t2: "Maturity",
                obj: "<strong>Objective:</strong> Analyze process maturity and systems quality according to strict standards.<br>",
                sol: "<strong>Solution:</strong> Elaboration of an academic project conducting structured critical analysis of a university system, applying ISO/IEC 25010 international standards and CMMI-based metrics.",
                role: "<i data-feather=\"user\" aria-hidden=\"true\"></i> Role: Systems Analysis Student",
                btn: "View GitHub Profile"
            }
        },
        contact: {
            subtitle: "Let's Talk",
            title: "Ready to add value to your team.",
            text: "I am open to internship opportunities and entry-level positions in technology, development, data, systems, and support. Let's build something relevant together?",
            emailLabel: "Contact Email",
            copyBtn: "Copy",
            copiedBtn: "Copied!",
            copyAria: "Copy email address",
            phone: "Phone / WhatsApp"
        },
        footer: {
            status: "TECH • DATA • SYSTEMS",
            copy: "João André Diniz. Developed with HTML5, CSS3, and Vanilla JavaScript.",
            backTop: "Back to Top"
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');
    const metaThemeColor = document.getElementById('metaThemeColor');

    let currentLang = localStorage.getItem('language') || 'pt';
    if (!i18nData[currentLang]) currentLang = 'pt';

    const resolvePath = (obj, path) => path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);

    const refreshIcons = () => {
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    };

    // =========================================================================
    // 1. Mobile Menu Management & Keyboard Accessibility
    // =========================================================================
    const setMenuState = (isOpen) => {
        if (!menuToggle || !navMenu) return;
        navMenu.classList.toggle('open', isOpen);
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));

        const a11yData = i18nData[currentLang]?.a11y;
        if (a11yData) {
            menuToggle.setAttribute('aria-label', isOpen ? a11yData.closeMenu : a11yData.openMenu);
        }
    };

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = !navMenu.classList.contains('open');
            setMenuState(isOpen);
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenuState(false));
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                setMenuState(false);
                menuToggle.focus();
            }
        });

        // Close when clicking outside the navbar
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                setMenuState(false);
            }
        });
    }

    // =========================================================================
    // 2. Dark / Light Theme Toggle
    // =========================================================================
    const syncThemeMeta = (theme) => {
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'light' ? '#f8fafc' : '#060913');
        }
        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
        }
    };

    syncThemeMeta(htmlElement.classList.contains('light') ? 'light' : 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';
            htmlElement.className = newTheme;
            localStorage.setItem('theme', newTheme);
            syncThemeMeta(newTheme);
        });
    }

    // =========================================================================
    // 3. Internationalization (i18n) System
    // =========================================================================
    const applyTranslations = (lang) => {
        const data = i18nData[lang];
        if (!data) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = resolvePath(data, el.getAttribute('data-i18n'));
            if (value) el.innerHTML = value;
        });

        document.querySelectorAll('[data-i18n-label]').forEach(el => {
            const value = resolvePath(data, el.getAttribute('data-i18n-label'));
            if (value) el.setAttribute('aria-label', value);
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const value = resolvePath(data, el.getAttribute('data-i18n-title'));
            if (value) el.setAttribute('title', value);
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const value = resolvePath(data, el.getAttribute('data-i18n-alt'));
            if (value) el.setAttribute('alt', value);
        });

        htmlElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

        if (data.seo) {
            document.title = data.seo.title;
            const metaFields = [
                ['meta[name="description"]', data.seo.description],
                ['meta[property="og:title"]', data.seo.title],
                ['meta[property="og:description"]', data.seo.description],
                ['meta[name="twitter:title"]', data.seo.title],
                ['meta[name="twitter:description"]', data.seo.description]
            ];
            metaFields.forEach(([selector, content]) => {
                const el = document.querySelector(selector);
                if (el) el.setAttribute('content', content);
            });
        }

        const btnPt = document.querySelector('.lang-pt');
        const btnEn = document.querySelector('.lang-en');
        if (btnPt && btnEn) {
            btnPt.classList.toggle('active', lang === 'pt');
            btnEn.classList.toggle('active', lang === 'en');
        }

        refreshIcons();
    };

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('language', currentLang);
            applyTranslations(currentLang);
        });
    }

    // Initialize translations and icons once on load
    applyTranslations(currentLang);

    // =========================================================================
    // 4. Active Navigation Link on Scroll (Passive Listener)
    // =========================================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNavOnScroll = () => {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 140;
            const sectionId = current.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
    highlightNavOnScroll();

    // =========================================================================
    // 5. Copy Email to Clipboard (i18n-aware + Fallback)
    // =========================================================================
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailText = document.getElementById('emailText');
    const copyFeedback = document.getElementById('copyFeedback');
    let copyTimeout = null;

    const copyTextToClipboard = async (text) => {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }
        // Fallback for non-HTTPS or older contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    };

    if (copyEmailBtn && emailText && copyFeedback) {
        copyEmailBtn.addEventListener('click', async () => {
            const email = emailText.textContent.trim();
            try {
                await copyTextToClipboard(email);

                if (copyTimeout) clearTimeout(copyTimeout);

                copyFeedback.textContent = i18nData[currentLang].contact.copiedBtn;
                copyEmailBtn.classList.add('copied');

                copyTimeout = setTimeout(() => {
                    copyFeedback.textContent = i18nData[currentLang].contact.copyBtn;
                    copyEmailBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Erro ao copiar e-mail:', err);
            }
        });
    }

    // =========================================================================
    // 6. Dynamic Current Year in Footer
    // =========================================================================
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});