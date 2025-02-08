// Carrinho de compras
let cart = [];

// Dados de produtos por categoria
const productCategories = {
    games: [
        { id: 1, name: 'The Legend of Zelda', price: 299.99, category: 'games', emoji: '🗡️' },
        { id: 2, name: 'Mario Kart', price: 249.99, category: 'games', emoji: '🏎️' },
        { id: 3, name: 'God of War', price: 279.99, category: 'games', emoji: '⚔️' }
    ],
    consoles: [
        { id: 4, name: 'PlayStation 5', price: 4999.99, category: 'consoles', emoji: '🎮' },
        { id: 5, name: 'Xbox Series X', price: 4499.99, category: 'consoles', emoji: '🖥️' },
        { id: 6, name: 'Nintendo Switch', price: 2499.99, category: 'consoles', emoji: '📱' }
    ],
    acessorios: [
        { id: 7, name: 'Controle DualSense', price: 349.99, category: 'acessorios', emoji: '🕹️' },
        { id: 8, name: 'Headset Gamer', price: 499.99, category: 'acessorios', emoji: '🎧' },
        { id: 9, name: 'Carregador Controle', price: 99.99, category: 'acessorios', emoji: '🔌' }
    ],
    perifericos: [
        { id: 10, name: 'Monitor Gamer', price: 1999.99, category: 'perifericos', emoji: '🖥️' },
        { id: 11, name: 'Teclado Mecânico', price: 599.99, category: 'perifericos', emoji: '⌨️' },
        { id: 12, name: 'Mouse Gamer', price: 299.99, category: 'perifericos', emoji: '🖱️' }
    ],
    promocoes: [
        { id: 13, name: 'Kit Gamer Completo', price: 2999.99, category: 'promocoes', emoji: '🏆', originalPrice: 3499.99 },
        { id: 14, name: 'Console + Jogo', price: 5299.99, category: 'promocoes', emoji: '🎁', originalPrice: 5799.99 }
    ],
    eletronicos: [
        {
            id: 15,
            name: 'Smartphone Pixel 7',
            price: 3999.99,
            category: 'eletronicos',
            emoji: '📱',
            descricao: 'Smartphone Android de última geração',
            imagem: 'img/produtos/pixel7.jpg',
            categorias: ['eletronicos', 'informatica']
        },
        {
            id: 16,
            name: 'Smart TV 4K 55"',
            price: 2599.90,
            category: 'eletronicos',
            emoji: '📺',
            descricao: 'Smart TV com resolução 4K e HDR',
            imagem: 'img/produtos/smarttv.jpg',
            categorias: ['eletronicos', 'casa']
        },
        {
            id: 17,
            name: 'Notebook Gamer Acer',
            price: 5499.99,
            category: 'eletronicos',
            emoji: '💻',
            descricao: 'Notebook para jogos e trabalho pesado',
            imagem: 'img/produtos/notebook-gamer.jpg',
            categorias: ['eletronicos', 'informatica']
        },
        {
            id: 18,
            name: 'Fone de Ouvido Bluetooth',
            price: 299.90,
            category: 'eletronicos',
            emoji: '🎧',
            descricao: 'Fones sem fio com cancelamento de ruído',
            imagem: 'img/produtos/fone-bluetooth.jpg',
            categorias: ['eletronicos']
        },
        {
            id: 19,
            name: 'Smartwatch Apple Watch',
            price: 2199.99,
            category: 'eletronicos',
            emoji: '⌚',
            descricao: 'Relógio inteligente com monitoramento de saúde',
            imagem: 'img/produtos/apple-watch.jpg',
            categorias: ['eletronicos', 'informatica']
        }
    ],
    moda: [
        {
            id: 20,
            name: 'Tênis Esportivo',
            price: 299.99,
            category: 'moda',
            emoji: '👟',
            descricao: 'Tênis confortável para corrida',
            imagem: 'img/produtos/tenis.jpg',
            categorias: ['moda', 'esportes']
        },
        {
            id: 21,
            name: 'Vestido Elegante',
            price: 199.90,
            category: 'moda',
            emoji: '👗',
            descricao: 'Vestido de festa em tecido premium',
            imagem: 'img/produtos/vestido.jpg',
            categorias: ['moda']
        }
    ],
    casa: [
        {
            id: 22,
            name: 'Jogo de Panelas',
            price: 249.99,
            category: 'casa',
            emoji: '🍳',
            descricao: 'Conjunto de panelas antiaderentes',
            imagem: 'img/produtos/panelas.jpg',
            categorias: ['casa']
        },
        {
            id: 23,
            name: 'Aspirador de Pó',
            price: 399.90,
            category: 'casa',
            emoji: '🧹',
            descricao: 'Aspirador potente e silencioso',
            imagem: 'img/produtos/aspirador.jpg',
            categorias: ['casa']
        }
    ],
    esportes: [
        {
            id: 24,
            name: 'Bola de Futebol',
            price: 89.99,
            category: 'esportes',
            emoji: '⚽',
            descricao: 'Bola oficial de futebol',
            imagem: 'img/produtos/bola.jpg',
            categorias: ['esportes']
        },
        {
            id: 25,
            name: 'Raquete de Tênis',
            price: 299.90,
            category: 'esportes',
            emoji: '🎾',
            descricao: 'Raquete profissional de tênis',
            imagem: 'img/produtos/raquete.jpg',
            categorias: ['esportes']
        }
    ],
    informatica: [
        {
            id: 26,
            name: 'Mouse Gamer',
            price: 129.99,
            category: 'informatica',
            emoji: '🖱️',
            descricao: 'Mouse com iluminação RGB',
            imagem: 'img/produtos/mouse.jpg',
            categorias: ['informatica', 'eletronicos']
        },
        {
            id: 27,
            name: 'Teclado Mecânico',
            price: 249.90,
            category: 'informatica',
            emoji: '⌨️',
            descricao: 'Teclado mecânico para jogos',
            imagem: 'img/produtos/teclado.jpg',
            categorias: ['informatica', 'eletronicos']
        }
    ]
};

// Dados de Categorias com Emojis Cartoon
const categorias = [
    {
        id: 'eletronicos',
        nome: 'Eletrônicos 🤖',
        descricao: 'Dispositivos incríveis e divertidos',
        imagem: 'img/categorias/eletronicos.jpg'
    },
    {
        id: 'moda',
        nome: 'Moda 👗',
        descricao: 'Estilo e personalidade em primeiro lugar',
        imagem: 'img/categorias/moda.jpg'
    },
    {
        id: 'casa',
        nome: 'Casa 🏡',
        descricao: 'Decoração mágica para seu lar',
        imagem: 'img/categorias/casa.jpg'
    },
    {
        id: 'esportes',
        nome: 'Esportes 🏀',
        descricao: 'Energia e diversão em movimento',
        imagem: 'img/categorias/esportes.jpg'
    },
    {
        id: 'informatica',
        nome: 'Informática 🖥️',
        descricao: 'Tecnologia que transforma ideias',
        imagem: 'img/categorias/informatica.jpg'
    }
];

// Função para carregar conteúdo HTML de um arquivo
function loadHTMLContent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
                // Adicionar event listeners após carregar o conteúdo
                addCartEventListeners();
                addShareProductListeners();
            }
        })
        .catch(error => {
            console.error('Erro ao carregar conteúdo:', error);
        });
}

// Função para carregar produtos de uma categoria
function loadProducts(category) {
    const productButtonsContainer = document.getElementById('product-buttons');
    
    // Mapear categorias para arquivos HTML
    const categoryFiles = {
        'games': 'games.html',
        'acessorios': 'acessorios.html',
        'promocoes': 'promocoes.html',
        'consoles': 'consoles.html',
        'perifericos': 'perifericos.html',
        'eletronicos': 'eletronicos.html',
        'moda': 'moda.html',
        'casa': 'casa.html',
        'esportes': 'esportes.html',
        'informatica': 'informatica.html'
    };

    // Carregar arquivo HTML da categoria
    const filePath = categoryFiles[category] || 'games.html';
    
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            if (productButtonsContainer) {
                productButtonsContainer.innerHTML = data;
                addCartEventListeners();
                addShareProductListeners();
            }
        })
        .catch(error => {
            console.error(`Erro ao carregar produtos de ${category}:`, error);
        });
}

// Função para renderizar produtos de uma categoria
function renderProducts(category) {
    const productContainer = document.getElementById('product-buttons');
    if (!productContainer) return;

    // Limpar container anterior
    productContainer.innerHTML = '';

    // Buscar produtos da categoria
    const products = productCategories[category] || [];

    // Renderizar cada produto
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <div class="product-emoji">${product.emoji}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">R$ ${product.price.toFixed(2)}</p>
            ${product.originalPrice ? `<p class="product-original-price">De: R$ ${product.originalPrice.toFixed(2)}</p>` : ''}
            <div class="product-actions">
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho 🛒</button>
                <button class="quick-view" data-id="${product.id}">Visualização Rápida 👀</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    // Adicionar event listeners para os novos botões
    addProductEventListeners();
}

// Função para adicionar ao carrinho (placeholder)
function adicionarAoCarrinho(jogoId) {
    alert(`Produto adicionado ao carrinho!`);
    // Implementação futura do carrinho
}

// Função para adicionar event listeners de carrinho
function addCartEventListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-summary p');
    const checkoutWhatsappBtn = document.querySelector('.checkout-whatsapp');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            // Adicionar produto ao carrinho
            cart.push({ name: productName, price: productPrice });
            updateCart(cartItemsContainer, cartTotalElement);
            
            // Mostrar modal do carrinho
            const cartModal = document.querySelector('.cart-modal');
            if (cartModal) {
                cartModal.style.display = 'block';
            }
        });
    });

    // Botão de finalizar compra via WhatsApp
    if (checkoutWhatsappBtn) {
        checkoutWhatsappBtn.addEventListener('click', () => {
            const whatsappMessage = generateWhatsappMessage();
            const whatsappUrl = `https://wa.me/5524981128510?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
}

// Função para adicionar event listeners de compartilhamento
function addShareProductListeners() {
    const shareButtons = document.querySelectorAll('.share-product');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('p').textContent;
            
            // Mensagem de compartilhamento
            const shareText = `Confira este produto na Legends Store: ${productName} - ${productPrice}`;
            
            // Copiar para área de transferência
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Produto copiado para compartilhamento!');
            }).catch(err => {
                console.error('Erro ao copiar:', err);
            });
        });
    });
}

// Função para adicionar event listeners de produtos
function addProductEventListeners() {
    // Botões de adicionar ao carrinho
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.id);
            const product = findProductById(productId);
            if (product) {
                addToCart(product);
                showCartNotification(product);
            }
        });
    });

    // Botões de visualização rápida
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.id);
            const product = findProductById(productId);
            if (product) {
                showQuickView(product);
            }
        });
    });
}

// Função para encontrar produto por ID
function findProductById(id) {
    for (const category in productCategories) {
        const product = productCategories[category].find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

// Função de visualização rápida de produto
function showQuickView(product) {
    const quickViewModal = document.createElement('div');
    quickViewModal.classList.add('quick-view-modal');
    quickViewModal.innerHTML = `
        <div class="quick-view-content">
            <span class="close-modal">&times;</span>
            <div class="product-emoji-large">${product.emoji}</div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <p class="product-description">Descrição detalhada do produto ${product.name}.</p>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho 🛒</button>
            </div>
        </div>
    `;
    document.body.appendChild(quickViewModal);

    // Fechar modal
    quickViewModal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(quickViewModal);
    });

    // Adicionar ao carrinho do modal
    quickViewModal.querySelector('.add-to-cart').addEventListener('click', () => {
        addToCart(product);
        showCartNotification(product);
        document.body.removeChild(quickViewModal);
    });
}

// Função para mostrar notificação de carrinho
function showCartNotification(product) {
    const notification = document.createElement('div');
    notification.classList.add('cart-notification');
    notification.innerHTML = `
        <p>✅ ${product.name} adicionado ao carrinho!</p>
    `;
    document.body.appendChild(notification);

    // Remover notificação após 3 segundos
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

// Função para adicionar ao carrinho
function addToCart(product) {
    // Lógica de adicionar ao carrinho (você pode expandir isso)
    const cartCount = document.querySelector('.cart-count');
    let currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
}

// Função para atualizar o carrinho
function updateCart(cartItemsContainer, cartTotalElement) {
    if (cartItemsContainer) {
        // Limpar itens atuais
        cartItemsContainer.innerHTML = '';

        // Adicionar novos itens
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>R$ ${item.price.toFixed(2)}</span>
                <button class="remove-item" data-index="${index}">Remover</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        // Adicionar listeners para botão de remover
        const removeButtons = cartItemsContainer.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                cart.splice(index, 1);
                updateCart(cartItemsContainer, cartTotalElement);
            });
        });
    }

    // Atualizar total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    if (cartTotalElement) {
        cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
}

// Gerar mensagem para WhatsApp
function generateWhatsappMessage() {
    let message = "Olá! Quero finalizar minha compra:\n\n";
    cart.forEach(item => {
        message += `- ${item.name}: R$ ${item.price.toFixed(2)}\n`;
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\nTotal: R$ ${total.toFixed(2)}`;
    return message;
}

// Funções para botões de redes sociais
function openFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
}

function openInstagram() {
    alert('Compartilhar no Instagram não está disponível diretamente. Por favor, copie o link do site.');
}

function openWhatsApp() {
    const message = 'Confira a Legends Store! ' + window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Funções de Login e Cadastro
document.addEventListener('DOMContentLoaded', () => {
    // Verificar se estamos na página de login
    const loginPage = document.querySelector('.login-container');
    if (!loginPage) return;

    // Seleção de elementos
    const loginTabs = document.querySelectorAll('.login-tabs button');
    const loginForm = document.getElementById('login-form');
    const cadastroForm = document.getElementById('cadastro-form');
    const forgotPasswordLink = document.querySelector('.forgot-password');

    // Alternância entre login e cadastro
    loginTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove classe active de todos os botões
            loginTabs.forEach(t => t.classList.remove('active'));
            
            // Adiciona classe active no botão clicado
            tab.classList.add('active');

            // Mostra/esconde formulários
            if (tab.dataset.tab === 'login') {
                loginForm.classList.add('active');
                cadastroForm.classList.remove('active');
            } else {
                loginForm.classList.remove('active');
                cadastroForm.classList.add('active');
            }
        });
    });

    // Tratamento de login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email-login').value;
        const senha = document.getElementById('senha-login').value;

        // Validação básica
        if (!email || !senha) {
            alert('Por favor, preencha todos os campos! 🚫');
            return;
        }

        // Simulação de login (substituir por lógica real)
        alert(`Login tentado com ${email} 🔐`);
    });

    // Tratamento de cadastro
    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome-completo').value;
        const senha = document.getElementById('senha-cadastro').value;
        const confirmaSenha = document.getElementById('confirmar-senha').value;
        const termos = document.getElementById('termos').checked;

        // Validações
        if (!nome || !senha || !confirmaSenha) {
            alert('Por favor, preencha todos os campos! 🚫');
            return;
        }

        if (senha !== confirmaSenha) {
            alert('As senhas não coincidem! 🔒');
            return;
        }

        if (!termos) {
            alert('Você precisa aceitar os termos de uso! 📝');
            return;
        }

        // Simulação de cadastro (substituir por lógica real)
        alert(`Cadastro realizado para ${nome} 🎉`);
    });

    // Recuperação de senha
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Funcionalidade de recuperação de senha em desenvolvimento! 🔑');
        });
    }

    // Login social
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.classList.contains('google') ? 'Google' : 'Facebook';
            alert(`Login com ${platform} em desenvolvimento! 🌐`);
        });
    });
});

// Funções de Cadastro Completo
document.addEventListener('DOMContentLoaded', () => {
    const cadastroPage = document.querySelector('.cadastro-completo');
    if (!cadastroPage) return;

    const form = document.getElementById('cadastro-completo-form');
    const sections = document.querySelectorAll('.section');
    const nextButtons = document.querySelectorAll('.next-section');
    const prevButtons = document.querySelectorAll('.prev-section');

    // Máscaras de input
    function maskCPF(input) {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
            e.target.value = value;
        });
    }

    function maskTelefone(input) {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }

    function maskCEP(input) {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }

    // Aplicar máscaras
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    if (cpfInput) maskCPF(cpfInput);
    if (telefoneInput) maskTelefone(telefoneInput);
    if (cepInput) maskCEP(cepInput);

    // Navegação entre seções
    function showSection(currentSection, nextSection) {
        currentSection.classList.remove('active');
        nextSection.classList.add('active');
    }

    // Validação de seção
    function validateSection(section) {
        const inputs = section.querySelectorAll('input[required]');
        for (let input of inputs) {
            if (!input.value.trim()) {
                alert(`Por favor, preencha o campo: ${input.labels[0].textContent} 🚫`);
                return false;
            }
        }
        return true;
    }

    // Botões de próximo
    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentSection = sections[index];
            const nextSection = sections[index + 1];

            if (validateSection(currentSection)) {
                showSection(currentSection, nextSection);
            }
        });
    });

    // Botões de voltar
    prevButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentSection = sections[index + 1];
            const prevSection = sections[index];

            showSection(currentSection, prevSection);
        });
    });

    // Submissão do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const senha = document.getElementById('senha').value;
        const confirmaSenha = document.getElementById('confirmar-senha').value;
        const termos = document.getElementById('termos').checked;

        if (senha !== confirmaSenha) {
            alert('As senhas não coincidem! 🔒');
            return;
        }

        if (!termos) {
            alert('Você precisa aceitar os termos de uso! 📝');
            return;
        }

        // Coleta de dados
        const dadosCadastro = {
            nome: document.getElementById('nome-completo').value,
            cpf: document.getElementById('cpf').value,
            dataNascimento: document.getElementById('data-nascimento').value,
            telefone: document.getElementById('telefone').value,
            cep: document.getElementById('cep').value,
            endereco: document.getElementById('endereco').value,
            complemento: document.getElementById('complemento').value,
            newsletter: document.getElementById('newsletter').checked
        };

        // Simulação de cadastro
        console.log('Dados de Cadastro:', dadosCadastro);
        alert(`Cadastro realizado com sucesso para ${dadosCadastro.nome}! 🎉`);
        
        // Redirecionar para página de login (em desenvolvimento)
        // window.location.href = 'login.html';
    });
});

// Funções de Cadastro de Usuário
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página de cadastro carregada'); // Log de depuração

    const cadastroForm = document.getElementById('cadastro-usuario-form');
    if (!cadastroForm) {
        console.log('Formulário de cadastro não encontrado');
        return;
    }

    cadastroForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Formulário de cadastro submetido'); // Log de depuração

        // Capturar valores dos campos
        const username = document.getElementById('username').value;
        const senha = document.getElementById('senha').value;
        const confirmaSenha = document.getElementById('confirmar-senha').value;
        const termos = document.getElementById('termos').checked;

        // Validações
        if (!username || !senha || !confirmaSenha) {
            alert('Por favor, preencha todos os campos! 🚫');
            return;
        }

        if (senha !== confirmaSenha) {
            alert('As senhas não coincidem! 🔒');
            return;
        }

        if (!termos) {
            alert('Você precisa aceitar os termos de uso! 📝');
            return;
        }

        // Criar objeto de usuário
        const novoUsuario = {
            username: username,
            senha: senha  // NOTA: Na prática, NUNCA armazene senhas em texto plano
        };

        // Salvar no localStorage (simulação de banco de dados)
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        
        // Verificar se usuário já existe
        const usuarioExistente = usuarios.find(u => 
            u.username === username
        );

        if (usuarioExistente) {
            alert('Usuário já cadastrado! 🚫');
            return;
        }

        // Adicionar novo usuário
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Mensagem de sucesso
        alert(`Cadastro realizado com sucesso para ${username}! 🎉`);

        // Redirecionar para login
        window.location.href = 'login.html';
    });
});

// Funções de Login de Usuário
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script de login carregado'); // Debug: Verificar carregamento do script

    const loginForm = document.getElementById('login-form');
    if (!loginForm) {
        console.log('Formulário de login não encontrado');
        return;
    }

    console.log('Formulário de login encontrado'); // Debug: Verificar carregamento do formulário

    loginForm.addEventListener('submit', (event) => {
        console.log('Evento de submit capturado'); // Debug: Verificar evento de submit
        event.preventDefault();

        // Capturar valores dos campos
        const username = document.getElementById('username').value;
        const senha = document.getElementById('senha').value;

        console.log(`Tentativa de login: ${username}`); // Debug: Verificar tentativa de login

        // Recuperar usuários
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        console.log('Usuários cadastrados:', usuarios); // Debug: Verificar usuários cadastrados
        
        // Encontrar usuário
        const usuarioEncontrado = usuarios.find(u => 
            u.username === username && 
            u.senha === senha
        );

        if (usuarioEncontrado) {
            console.log('Usuário encontrado'); // Debug: Verificar usuário encontrado
            // Login bem-sucedido
            alert(`Bem-vindo, ${username}! 🎉`);
            
            // Salvar usuário logado no localStorage
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
            
            // Redirecionar para página inicial
            window.location.href = 'index.html';
        } else {
            console.log('Usuário não encontrado'); // Debug: Verificar usuário não encontrado
            // Usuário não encontrado
            alert('Usuário ou senha incorretos! 🚫');
        }
    });
});

// Funções de Gerenciamento de Usuários
document.addEventListener('DOMContentLoaded', () => {
    // Função para verificar e atualizar estado de login
    function atualizarEstadoLogin() {
        const loginBtn = document.querySelector('.login-btn');
        const usuarioLogado = localStorage.getItem('usuarioLogado');

        if (usuarioLogado) {
            // Se usuário está logado
            if (loginBtn) {
                loginBtn.textContent = 'Sair';
                loginBtn.classList.add('logout-btn');
                loginBtn.classList.remove('login-btn');
                loginBtn.onclick = function() {
                    // Adicionar lógica de logout
                    localStorage.removeItem('usuarioLogado');
                    window.location.href = 'login.html';
                };
            }
        } else {
            // Se usuário não está logado
            if (loginBtn) {
                loginBtn.textContent = 'Login/Cadastro';
                loginBtn.classList.remove('logout-btn');
                loginBtn.classList.add('login-btn');
                loginBtn.onclick = function() {
                    window.location.href = 'login.html';
                };
            }
        }
    }

    // Chamar função de atualização de login
    atualizarEstadoLogin();

    // Função para inicializar usuários no localStorage
    function inicializarUsuarios() {
        if (!localStorage.getItem('usuarios')) {
            const usuariosIniciais = [
                { username: 'admin', senha: 'admin123' }
            ];
            localStorage.setItem('usuarios', JSON.stringify(usuariosIniciais));
        }
    }

    // Função para adicionar usuário
    function adicionarUsuario(username, senha) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        
        // Verificar se usuário já existe
        const usuarioExistente = usuarios.find(u => 
            u.username === username
        );

        if (usuarioExistente) {
            return false;
        }

        usuarios.push({ username, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        return true;
    }

    // Função para fazer login
    function fazerLogin(username, senha) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        
        const usuarioEncontrado = usuarios.find(u => 
            u.username === username && 
            u.senha === senha
        );

        return usuarioEncontrado;
    }

    // Inicializar usuários
    inicializarUsuarios();

    // Cadastro de Usuário
    const cadastroForm = document.getElementById('cadastro-usuario-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Capturar valores dos campos
            const username = document.getElementById('username').value;
            const senha = document.getElementById('senha').value;
            const confirmaSenha = document.getElementById('confirmar-senha').value;
            const termos = document.getElementById('termos').checked;

            // Validações
            if (!username || !senha || !confirmaSenha) {
                alert('Por favor, preencha todos os campos! 🚫');
                return;
            }

            if (senha !== confirmaSenha) {
                alert('As senhas não coincidem! 🔒');
                return;
            }

            if (!termos) {
                alert('Você precisa aceitar os termos de uso! 📝');
                return;
            }

            // Tentar adicionar usuário
            const cadastroSucesso = adicionarUsuario(username, senha);

            if (cadastroSucesso) {
                alert(`Cadastro realizado com sucesso para ${username}! 🎉`);
                window.location.href = 'login.html';
            } else {
                alert('Nome de usuário já cadastrado! 🚫');
            }
        });
    }

    // Login de Usuário
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Capturar valores dos campos
            const username = document.getElementById('username').value;
            const senha = document.getElementById('senha').value;

            // Tentar fazer login
            const usuarioLogado = fazerLogin(username, senha);

            if (usuarioLogado) {
                alert(`Bem-vindo, ${username}! 🎉`);
                
                // Salvar usuário logado
                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
                
                // Redirecionar para página inicial
                window.location.href = 'index.html';
            } else {
                alert('Usuário ou senha incorretos! 🚫');
            }
        });
    }

    // Verificar usuário logado na página inicial
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado && window.location.pathname.includes('index.html')) {
        const usuario = JSON.parse(usuarioLogado);
        const boasVindasElement = document.getElementById('boas-vindas');
        if (boasVindasElement) {
            boasVindasElement.textContent = `Bem-vindo, ${usuario.username}! 🏆`;
        }
    }
});

// Funções de Gerenciamento de Usuários via JSON
document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar usuários do arquivo JSON
    async function carregarUsuarios() {
        try {
            const resposta = await fetch('usuarios.json');
            const dados = await resposta.json();
            return dados.usuarios || [];
        } catch (erro) {
            console.error('Erro ao carregar usuários:', erro);
            return [];
        }
    }

    // Função para salvar usuários no arquivo JSON
    async function salvarUsuarios(usuarios) {
        try {
            const resposta = await fetch('salvar-usuarios.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuarios: usuarios })
            });

            if (!resposta.ok) {
                throw new Error('Erro ao salvar usuários');
            }

            console.log('Usuários salvos com sucesso!');
        } catch (erro) {
            console.error('Erro ao salvar usuários:', erro);
        }
    }

    // Cadastro de Usuário
    const cadastroForm = document.getElementById('cadastro-usuario-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Capturar valores dos campos
            const username = document.getElementById('username').value;
            const senha = document.getElementById('senha').value;
            const confirmaSenha = document.getElementById('confirmar-senha').value;
            const termos = document.getElementById('termos').checked;

            // Validações
            if (!username || !senha || !confirmaSenha) {
                alert('Por favor, preencha todos os campos! 🚫');
                return;
            }

            if (senha !== confirmaSenha) {
                alert('As senhas não coincidem! 🔒');
                return;
            }

            if (!termos) {
                alert('Você precisa aceitar os termos de uso! 📝');
                return;
            }

            // Carregar usuários existentes
            const usuarios = await carregarUsuarios();
            
            // Verificar se usuário já existe
            const usuarioExistente = usuarios.find(u => 
                u.username === username
            );

            if (usuarioExistente) {
                alert('Nome de usuário já cadastrado! 🚫');
                return;
            }

            // Criar novo usuário
            const novoUsuario = {
                username: username,
                senha: senha
            };

            // Adicionar novo usuário
            usuarios.push(novoUsuario);

            // Salvar usuários
            await salvarUsuarios(usuarios);

            // Mensagem de sucesso
            alert(`Cadastro realizado com sucesso para ${username}! 🎉`);

            // Redirecionar para login
            window.location.href = 'login.html';
        });
    }

    // Login de Usuário
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Capturar valores dos campos
            const username = document.getElementById('username').value;
            const senha = document.getElementById('senha').value;

            // Carregar usuários
            const usuarios = await carregarUsuarios();
            
            // Encontrar usuário
            const usuarioEncontrado = usuarios.find(u => 
                u.username === username && 
                u.senha === senha
            );

            if (usuarioEncontrado) {
                // Login bem-sucedido
                alert(`Bem-vindo, ${username}! 🎉`);
                
                // Salvar usuário logado
                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
                
                // Redirecionar para página inicial
                window.location.href = 'index.html';
            } else {
                // Usuário não encontrado
                alert('Usuário ou senha incorretos! 🚫');
            }
        });
    }
});

// Função para abrir/fechar menu mobile
function toggleMobileMenu() {
    const mainNavigation = document.querySelector('.main-navigation');
    mainNavigation.classList.toggle('mobile-open');
}

// Adicionar evento de clique para botão de Início
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar evento de clique no link de Início
    const inicioLink = document.querySelector('nav a[href="/"]');
    
    if (inicioLink) {
        inicioLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir navegação padrão
            
            // Limpar container de produtos
            const produtosContainer = document.getElementById('produtos-container');
            if (produtosContainer) {
                produtosContainer.innerHTML = ''; // Limpar conteúdo atual
            }

            // Renderizar categorias e produtos novamente
            renderizarCategorias();
            renderizarProdutos(produtosEletronicos);
        });
    }
});

// Adicionar event listeners para categorias
document.addEventListener('DOMContentLoaded', () => {
    // Botões de categoria
    const categoryButtons = document.querySelectorAll('.category-card');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.currentTarget.dataset.category;
            renderProducts(category);
        });
    });

    // Renderizar categoria padrão (games) ao carregar
    renderProducts('games');

    // Carregar conteúdos quando o DOM estiver carregado
    // Carregar conteúdo das categorias
    loadHTMLContent('category-buttons', 'category-buttons.html');
    
    // Carregar botões do carrinho
    loadHTMLContent('cart-buttons', 'cart-buttons.html');

    // Adicionar listeners para links de categorias
    const categoryLinks = document.querySelectorAll('.category-card a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Não faz nada aqui, pois os links já estão configurados para abrir em nova aba
        });
    });

    // Carregar produtos iniciais (games)
    loadProducts('games');

    // Fechar modal do carrinho
    const closeCartBtn = document.querySelector('.close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            const cartModal = document.querySelector('.cart-modal');
            if (cartModal) {
                cartModal.style.display = 'none';
            }
        });
    }

    // Botões de redes sociais
    const facebookBtn = document.querySelector('.social-icon[href="#"]');
    if (facebookBtn) facebookBtn.addEventListener('click', openFacebook);

    const instagramBtn = document.querySelector('.social-icon[href="#"]:nth-child(2)');
    if (instagramBtn) instagramBtn.addEventListener('click', openInstagram);

    const whatsappBtn = document.querySelector('.social-icon[href="#"]:nth-child(3)');
    if (whatsappBtn) whatsappBtn.addEventListener('click', openWhatsApp);

    // Botão de login
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) loginBtn.addEventListener('click', handleLogin);

    // Formulário de pesquisa
    const searchForm = document.querySelector('.search-form');
    if (searchForm) searchForm.addEventListener('submit', handleSearch);

    // Menu mobile
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) hamburgerMenu.addEventListener('click', toggleMobileMenu);

    // Logo
    const logoLink = document.querySelector('.emoji-logo');
    if (logoLink) logoLink.addEventListener('click', (event) => {
        event.preventDefault(); // Impede qualquer ação ao clicar no logo
    });
});

// Função para login/cadastro
function handleLogin() {
    const loginModal = document.createElement('div');
    loginModal.innerHTML = `
        <div class="login-modal">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Usuário" required>
                <input type="password" placeholder="Senha" required>
                <button type="submit">Entrar</button>
                <p>Não tem conta? <a href="#">Cadastre-se</a></p>
            </form>
        </div>
    `;
    document.body.appendChild(loginModal);
}

// Função de pesquisa
function handleSearch(event) {
    event.preventDefault();
    const searchInput = event.target.querySelector('input');
    const searchTerm = searchInput.value.toLowerCase();
    
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        product.style.display = productName.includes(searchTerm) ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Função para verificar e atualizar estado de login
    function atualizarEstadoLogin() {
        const usuarioLogado = localStorage.getItem('usuarioLogado');
        const loginBtn = document.querySelector('.login-btn');
        const userActions = document.querySelector('.user-actions');

        if (usuarioLogado) {
            // Esconder botão de login/cadastro
            if (loginBtn) loginBtn.style.display = 'none';
            
            // Adicionar botão de logout
            if (userActions) {
                const logoutBtn = document.createElement('button');
                logoutBtn.textContent = 'Sair 🚪';
                logoutBtn.classList.add('btn', 'logout-btn');
                logoutBtn.addEventListener('click', () => {
                    localStorage.removeItem('usuarioLogado');
                    atualizarEstadoLogin();
                    window.location.href = 'index.html';
                });
                userActions.appendChild(logoutBtn);
            }
        } else {
            // Mostrar botão de login/cadastro
            if (loginBtn) loginBtn.style.display = 'block';
            
            // Remover botão de logout
            const logoutBtn = document.querySelector('.logout-btn');
            if (logoutBtn) logoutBtn.remove();
        }
    }

    // Chamar função de atualização de login
    atualizarEstadoLogin();
});

document.addEventListener('DOMContentLoaded', () => {
    // Adicionar event listeners para categorias
    const categoriaItems = document.querySelectorAll('.categoria-item');
    categoriaItems.forEach(item => {
        item.addEventListener('click', () => {
            const categoria = item.getAttribute('data-categoria');
            filtrarProdutosPorCategoria(categoria);
        });
    });

    // Função para filtrar produtos por categoria
    function filtrarProdutosPorCategoria(categoria) {
        const produtos = document.querySelectorAll('.product-card');
        
        produtos.forEach(produto => {
            const categoriasProduto = produto.getAttribute('data-categorias').split(',');
            
            if (categoriasProduto.includes(categoria)) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        });
    }
});

// Função para renderizar categorias
function renderizarCategorias() {
    const produtosContainer = document.getElementById('produtos-container');
    
    if (!produtosContainer) return;

    produtosContainer.innerHTML = ''; // Limpar container

    categorias.forEach(categoria => {
        const categoriaElement = document.createElement('div');
        categoriaElement.classList.add('product-card', 'categoria-card');
        categoriaElement.setAttribute('data-categoria', categoria.id);
        categoriaElement.innerHTML = `
            <div class="product-image">
                <img src="${categoria.imagem}" alt="${categoria.nome}">
            </div>
            <div class="product-details">
                <h3>${categoria.nome}</h3>
                <p>${categoria.descricao}</p>
                <div class="product-actions">
                    <button onclick="selecionarCategoria('${categoria.id}')">
                        Ver Produtos 🔍
                    </button>
                </div>
            </div>
        `;
        produtosContainer.appendChild(categoriaElement);
    });
}

// Função para selecionar e renderizar produtos de uma categoria
function selecionarCategoria(categoriaId) {
    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = ''; // Limpa o container
    produtosContainer.classList.add('produtos-grid');
    
    // Mapear ID da categoria para a chave no objeto productCategories
    const categoriaMap = {
        'eletronicos': 'eletronicos',
        'moda': 'moda',
        'casa': 'casa',
        'esportes': 'esportes',
        'informatica': 'informatica'
    };
    
    const categoriaSelecionada = categoriaMap[categoriaId];
    
    // Buscar produtos da categoria
    const produtosCategoria = productCategories[categoriaSelecionada] || [];
    
    // Renderiza produtos da categoria
    produtosCategoria.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.classList.add('product-card');
        produtoCard.innerHTML = `
            <div class="product-image">
                <img src="${produto.imagem || 'img/placeholder.jpg'}" alt="${produto.name}">
            </div>
            <div class="product-details">
                <h3>${produto.name}</h3>
                <p>${produto.descricao || 'Produto incrível'}</p>
                <div class="product-price">R$ ${produto.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${produto.id}">
                        Adicionar ao Carrinho 🛒
                    </button>
                    <button class="quick-view" data-id="${produto.id}">
                        Detalhes 👀
                    </button>
                </div>
            </div>
        `;
        produtosContainer.appendChild(produtoCard);
    });
    
    // Adiciona botão de voltar
    criarBotaoVoltarCategorias();
}

// Renderizar categorias ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCategorias();
});

// Dados de Produtos por Categoria
const produtosPorCategoria = {
    eletronicos: [
        {
            id: 1,
            nome: 'Smartphone Pixel 7 📱',
            preco: 3999.99,
            descricao: 'Smartphone Android de última geração',
            imagem: 'img/produtos/pixel7.jpg',
            categorias: ['eletronicos', 'informatica']
        },
        {
            id: 2,
            nome: 'Smart TV 4K 55" 📺',
            preco: 2599.90,
            descricao: 'Smart TV com resolução 4K e HDR',
            imagem: 'img/produtos/smarttv.jpg',
            categorias: ['eletronicos', 'casa']
        }
    ],
    moda: [
        {
            id: 3,
            nome: 'Tênis Esportivo 👟',
            preco: 299.99,
            descricao: 'Tênis confortável para corrida',
            imagem: 'img/produtos/tenis.jpg',
            categorias: ['moda', 'esportes']
        },
        {
            id: 4,
            nome: 'Vestido Elegante 👗',
            preco: 199.90,
            descricao: 'Vestido de festa em tecido premium',
            imagem: 'img/produtos/vestido.jpg',
            categorias: ['moda']
        }
    ],
    casa: [
        {
            id: 5,
            nome: 'Jogo de Panelas 🍳',
            preco: 249.99,
            descricao: 'Conjunto de panelas antiaderentes',
            imagem: 'img/produtos/panelas.jpg',
            categorias: ['casa']
        },
        {
            id: 6,
            nome: 'Aspirador de Pó 🧹',
            preco: 399.90,
            descricao: 'Aspirador potente e silencioso',
            imagem: 'img/produtos/aspirador.jpg',
            categorias: ['casa']
        }
    ],
    esportes: [
        {
            id: 7,
            nome: 'Bola de Futebol ⚽',
            preco: 89.99,
            descricao: 'Bola oficial de futebol',
            imagem: 'img/produtos/bola.jpg',
            categorias: ['esportes']
        },
        {
            id: 8,
            nome: 'Raquete de Tênis 🎾',
            preco: 299.90,
            descricao: 'Raquete profissional de tênis',
            imagem: 'img/produtos/raquete.jpg',
            categorias: ['esportes']
        }
    ],
    informatica: [
        {
            id: 9,
            nome: 'Mouse Gamer 🖱️',
            preco: 129.99,
            descricao: 'Mouse com iluminação RGB',
            imagem: 'img/produtos/mouse.jpg',
            categorias: ['informatica', 'eletronicos']
        },
        {
            id: 10,
            nome: 'Teclado Mecânico ⌨️',
            preco: 249.90,
            descricao: 'Teclado mecânico para jogos',
            imagem: 'img/produtos/teclado.jpg',
            categorias: ['informatica', 'eletronicos']
        }
    ]
};

// Função para renderizar categorias
function renderizarCategorias() {
    const produtosContainer = document.getElementById('produtos-container');
    
    if (!produtosContainer) return;

    produtosContainer.innerHTML = ''; // Limpar container

    categorias.forEach(categoria => {
        const categoriaElement = document.createElement('div');
        categoriaElement.classList.add('product-card', 'categoria-card');
        categoriaElement.setAttribute('data-categoria', categoria.id);
        categoriaElement.innerHTML = `
            <div class="product-image">
                <img src="${categoria.imagem}" alt="${categoria.nome}">
            </div>
            <div class="product-details">
                <h3>${categoria.nome}</h3>
                <p>${categoria.descricao}</p>
                <div class="product-actions">
                    <button onclick="selecionarCategoria('${categoria.id}')">
                        Ver Produtos 🔍
                    </button>
                </div>
            </div>
        `;
        produtosContainer.appendChild(categoriaElement);
    });
}

// Função para selecionar e renderizar produtos de uma categoria
function selecionarCategoria(categoriaId) {
    const produtosContainer = document.getElementById('produtos-container');
    
    if (!produtosContainer) return;

    produtosContainer.innerHTML = ''; // Limpar container

    // Renderizar produtos da categoria selecionada
    const produtosCategoria = produtosPorCategoria[categoriaId] || [];
    
    if (produtosCategoria.length === 0) {
        const semProdutosElement = document.createElement('div');
        semProdutosElement.classList.add('sem-produtos');
        semProdutosElement.innerHTML = `
            <p>Nenhum produto encontrado nesta categoria 😕</p>
            <button onclick="renderizarCategorias()">Voltar às Categorias</button>
        `;
        produtosContainer.appendChild(semProdutosElement);
        return;
    }

    produtosCategoria.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('product-card');
        produtoElement.setAttribute('data-categorias', produto.categorias.join(','));
        produtoElement.innerHTML = `
            <div class="product-image">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="product-details">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="product-price">R$ ${produto.preco.toFixed(2)}</div>
                <div class="product-actions">
                    <button onclick="adicionarAoCarrinho(${produto.id})">
                        Comprar 🛒
                    </button>
                </div>
            </div>
        `;
        produtosContainer.appendChild(produtoElement);
    });

    // Adicionar botão de voltar
    const voltarElement = document.createElement('div');
    voltarElement.classList.add('voltar-categorias');
    voltarElement.innerHTML = `
        <button onclick="renderizarCategorias()">
            Voltar às Categorias 🔙
        </button>
    `;
    produtosContainer.appendChild(voltarElement);
}

// Função para adicionar ao carrinho (placeholder)
function adicionarAoCarrinho(produtoId) {
    const todasCategorias = Object.values(produtosPorCategoria).flat();
    const produto = todasCategorias.find(p => p.id === produtoId);
    alert(`${produto.nome} adicionado ao carrinho!`);
}

// Renderizar categorias ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar evento de clique no link de Início
    const inicioLink = document.querySelector('nav a[href="/"]');
    
    if (inicioLink) {
        inicioLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir navegação padrão
            renderizarCategorias();
        });
    }

    // Renderizar categorias inicialmente
    renderizarCategorias();
});

// Função para criar botão de voltar às categorias
function criarBotaoVoltarCategorias() {
    const botaoVoltar = document.createElement('button');
    botaoVoltar.classList.add('btn-voltar-categorias');
    botaoVoltar.innerHTML = `
        <span class="emoji-voltar">🔙</span>
        Voltar às Categorias
    `;
    
    botaoVoltar.addEventListener('click', () => {
        renderizarCategorias();
        removerBotaoVoltarCategorias();
    });
    
    document.body.appendChild(botaoVoltar);
}

// Função para remover botão de voltar às categorias
function removerBotaoVoltarCategorias() {
    const botaoVoltar = document.querySelector('.btn-voltar-categorias');
    if (botaoVoltar) {
        botaoVoltar.remove();
    }
}

// Modificar função de selecionarCategoria para adicionar botão de voltar
function selecionarCategoria(categoriaId) {
    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = ''; // Limpa o container
    
    // Filtra produtos da categoria selecionada
    const produtosCategoria = produtos.filter(produto => produto.categoria === categoriaId);
    
    // Renderiza produtos da categoria
    produtosCategoria.forEach(produto => {
        const produtoCard = criarCardProduto(produto);
        produtosContainer.appendChild(produtoCard);
    });
    
    // Adiciona botão de voltar
    criarBotaoVoltarCategorias();
}
