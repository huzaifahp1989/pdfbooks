// Sample Books Database
let booksDatabase = [
    {
        id: 1,
        title: "Fortress of the Muslim",
        author: "Sa'id bin Wahf Al-Qahtani",
        category: "duas",
        description: "A collection of authentic supplications from the Quran and Sunnah",
        pdfUrl: "books/fortress-of-the-muslim.pdf",
        coverColor: "#2d5f3f"
    },
    {
        id: 2,
        title: "The Complete Guide to Prayer",
        author: "Sheikh Muhammad bin Salih Al-Uthaymeen",
        category: "salah",
        description: "Comprehensive guide to performing prayer according to the Sunnah",
        pdfUrl: "books/complete-guide-to-prayer.pdf",
        coverColor: "#4a8f65"
    },
    {
        id: 3,
        title: "Tafsir Ibn Kathir (Abridged)",
        author: "Ibn Kathir",
        category: "quran",
        description: "Renowned commentary on the Quran",
        pdfUrl: "books/tafsir-ibn-kathir.pdf",
        coverColor: "#2d5f3f"
    },
    {
        id: 4,
        title: "Sahih Bukhari",
        author: "Imam Bukhari",
        category: "hadith",
        description: "The most authentic collection of Hadith",
        pdfUrl: "books/sahih-bukhari.pdf",
        coverColor: "#3d6f4f"
    },
    {
        id: 16,
        title: "Sahih Muslim",
        author: "Imam Muslim",
        category: "hadith",
        description: "The second most authentic collection of Hadith",
        pdfUrl: "books/sahih-muslim.pdf",
        coverColor: "#2c5f8d"
    },
    {
        id: 17,
        title: "Riyad al-Salihin",
        author: "Imam An-Nawawi",
        category: "hadith",
        description: "The Gardens of the Righteous - Collection of authentic Hadiths",
        pdfUrl: "books/riyad-al-salihin.pdf",
        coverColor: "#1a3a5c"
    },
    {
        id: 18,
        title: "40 Hadith Nawawi",
        author: "Imam An-Nawawi",
        category: "hadith",
        description: "Forty essential Hadiths covering Islamic principles",
        pdfUrl: "books/40-hadith-nawawi.pdf",
        coverColor: "#4a90d9"
    },
    {
        id: 19,
        title: "Bulugh al-Maram",
        author: "Ibn Hajar Al-Asqalani",
        category: "hadith",
        description: "Attainment of the Objective - Hadiths on Islamic jurisprudence",
        pdfUrl: "books/bulugh-al-maram.pdf",
        coverColor: "#2c5f8d"
    },
    {
        id: 5,
        title: "The Sealed Nectar",
        author: "Safi-ur-Rahman al-Mubarakpuri",
        category: "seerah",
        description: "Biography of Prophet Muhammad (PBUH)",
        pdfUrl: "books/sealed-nectar.pdf",
        coverColor: "#5a9f75"
    },
    {
        id: 6,
        title: "Fiqh Made Easy",
        author: "Sheikh Salih Al-Munajjid",
        category: "fiqh",
        description: "Simplified Islamic jurisprudence",
        pdfUrl: "books/fiqh-made-easy.pdf",
        coverColor: "#2d5f3f"
    },
    {
        id: 7,
        title: "The Fundamentals of Tawheed",
        author: "Dr. Abu Ameenah Bilal Philips",
        category: "aqeedah",
        description: "Islamic monotheism explained",
        pdfUrl: "books/fundamentals-tawheed.pdf",
        coverColor: "#4a8f65"
    },
    {
        id: 8,
        title: "Daily Duas for Muslims",
        author: "Various Scholars",
        category: "duas",
        description: "Everyday supplications from authentic sources",
        pdfUrl: "books/daily-duas.pdf",
        coverColor: "#3d6f4f"
    },
    {
        id: 9,
        title: "The Prayer of the Prophet Described",
        author: "Sheikh Al-Albani",
        category: "salah",
        description: "Detailed description of the Prophet's prayer",
        pdfUrl: "books/prayer-of-prophet.pdf",
        coverColor: "#5a9f75"
    },
    {
        id: 10,
        title: "Stories of the Prophets",
        author: "Ibn Kathir",
        category: "history",
        description: "Lives of the prophets from Adam to Muhammad (PBUH)",
        pdfUrl: "books/stories-prophets.pdf",
        coverColor: "#2d5f3f"
    },
    {
        id: 11,
        title: "The Book of Manners",
        author: "Fu'ad ibn 'Abdul-'Azeez Ash-Shulhoob",
        category: "character",
        description: "Islamic ethics and good character",
        pdfUrl: "books/book-of-manners.pdf",
        coverColor: "#4a8f65"
    },
    {
        id: 12,
        title: "Ramadan Guide",
        author: "Sheikh Muhammad Salih Al-Munajjid",
        category: "ramadan",
        description: "Complete guide to Ramadan and fasting",
        pdfUrl: "books/ramadan-guide.pdf",
        coverColor: "#3d6f4f"
    },
    {
        id: 13,
        title: "Calling to Allah",
        author: "Sheikh Ahmad Musa Jibril",
        category: "dawah",
        description: "Wisdom and methods of Islamic propagation",
        pdfUrl: "books/calling-to-allah.pdf",
        coverColor: "#5a9f75"
    },
    {
        id: 14,
        title: "The Muslim Family",
        author: "Dr. Ekram & M. R. Beshir",
        category: "family",
        description: "Building strong Islamic families",
        pdfUrl: "books/muslim-family.pdf",
        coverColor: "#2d5f3f"
    },
    {
        id: 15,
        title: "A Guide to Hajj and Umrah",
        author: "Dr. Muhammad Al-Jibaly",
        category: "umrah",
        description: "Complete guide to performing Hajj and Umrah according to the Sunnah",
        pdfUrl: "books/guide-hajj-umrah.pdf",
        coverColor: "#4a8f65"
    }
];

// Global variables
let filteredBooks = [...booksDatabase];
let currentCategory = null;
let currentAuthor = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadUploadedBooks();
    initializeApp();
    setupEventListeners();
    displayBooks(booksDatabase);
    displayAuthors();
    updateCategoryCounts();
});
Load uploaded books from localStorage
function loadUploadedBooks() {
    const uploadedBooks = JSON.parse(localStorage.getItem('uploadedBooks')) || [];
    
    // Merge uploaded books with existing database
    if (uploadedBooks.length > 0) {
        uploadedBooks.forEach(book => {
            // Check if book already exists
            const exists = booksDatabase.find(b => b.id === book.id);
            if (!exists) {
                booksDatabase.push(book);
            }
        });
        
        // Update filtered books
        filteredBooks = [...booksDatabase];
    }
}

// 
// Initialize application
function initializeApp() {
    console.log('Islamic Books Library initialized');
    // Load any saved preferences from localStorage
    const savedView = localStorage.getItem('viewMode');
    if (savedView === 'list') {
        document.getElementById('booksContainer').classList.add('list-view');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
            scrollToSection('books');
        });
    });

    // Sort functionality
    document.getElementById('sortBy').addEventListener('change', function() {
        sortBooks(this.value);
    });

    // View toggle
    document.getElementById('viewToggle').addEventListener('click', toggleView);

    // Modal close
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('bookModal');
        if (event.target === modal) {
            closeModal();
        }
    });

    // Navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active link
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Display books
function displayBooks(books) {
    const container = document.getElementById('booksContainer');
    
    if (books.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book-open"></i>
                <h3>No books found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    container.innerHTML = books.map(book => `
        <div class="book-card" data-book-id="${book.id}">
            <div class="book-cover" style="background: linear-gradient(135deg, ${book.coverColor} 0%, ${adjustColor(book.coverColor, 20)} 100%);">
                <i class="fas fa-book"></i>
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="book-author"><i class="fas fa-user"></i> ${book.author}</p>
                <span class="book-category">${getCategoryName(book.category)}</span>
                <div class="book-actions">
                    <button class="btn-primary" onclick="openBook(${book.id})">
                        <i class="fas fa-book-reader"></i> Read
                    </button>
                    <button class="btn-secondary" onclick="downloadBook(${book.id})">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Display authors
function displayAuthors() {
    const container = document.getElementById('authorsContainer');
    
    // Get unique authors and count their books
    const authorsMap = new Map();
    booksDatabase.forEach(book => {
        if (authorsMap.has(book.author)) {
            authorsMap.set(book.author, authorsMap.get(book.author) + 1);
        } else {
            authorsMap.set(book.author, 1);
        }
    });

    const authors = Array.from(authorsMap.entries()).map(([name, count]) => ({
        name,
        count,
        initial: name.charAt(0).toUpperCase()
    }));

    container.innerHTML = authors.map(author => `
        <div class="author-card" onclick="filterByAuthor('${author.name}')">
            <div class="author-avatar">${author.initial}</div>
            <h3>${author.name}</h3>
            <p class="author-books-count">${author.count} ${author.count === 1 ? 'Book' : 'Books'}</p>
        </div>
    `).join('');
}

// Update category counts
function updateCategoryCounts() {
    const categoryCounts = {};
    booksDatabase.forEach(book => {
        categoryCounts[book.category] = (categoryCounts[book.category] || 0) + 1;
    });

    document.querySelectorAll('.category-card').forEach(card => {
        const category = card.dataset.category;
        const count = categoryCounts[category] || 0;
        const countSpan = card.querySelector('.book-count');
        countSpan.textContent = `${count} ${count === 1 ? 'Book' : 'Books'}`;
    });
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    currentAuthor = null;
    filteredBooks = booksDatabase.filter(book => book.category === category);
    displayBooks(filteredBooks);
    
    // Update section title
    const sectionTitle = document.querySelector('#books .section-title');
    sectionTitle.textContent = `${getCategoryName(category)} Books`;
}

// Filter by author
function filterByAuthor(author) {
    currentAuthor = author;
    currentCategory = null;
    filteredBooks = booksDatabase.filter(book => book.author === author);
    displayBooks(filteredBooks);
    scrollToSection('books');
    
    // Update section title
    const sectionTitle = document.querySelector('#books .section-title');
    sectionTitle.textContent = `Books by ${author}`;
}

// Perform search
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        filteredBooks = [...booksDatabase];
        displayBooks(filteredBooks);
        return;
    }

    filteredBooks = booksDatabase.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm) ||
        book.description.toLowerCase().includes(searchTerm)
    );

    displayBooks(filteredBooks);
    scrollToSection('books');
    
    // Update section title
    const sectionTitle = document.querySelector('#books .section-title');
    sectionTitle.textContent = `Search Results for "${searchTerm}"`;
}

// Sort books
function sortBooks(sortBy) {
    switch(sortBy) {
        case 'title':
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'author':
            filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
            break;
        case 'recent':
            filteredBooks.reverse();
            break;
    }
    displayBooks(filteredBooks);
}

// Toggle view (grid/list)
function toggleView() {
    const container = document.getElementById('booksContainer');
    const toggleBtn = document.getElementById('viewToggle');
    const icon = toggleBtn.querySelector('i');
    
    container.classList.toggle('list-view');
    
    if (container.classList.contains('list-view')) {
        icon.className = 'fas fa-th-large';
        localStorage.setItem('viewMode', 'list');
    } else {
        icon.className = 'fas fa-th';
        localStorage.setItem('viewMode', 'grid');
    }
}

// Open book in modal
function openBook(bookId) {
    const book = booksDatabase.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.getElementById('bookModal');
    const modalTitle = document.getElementById('modalBookTitle');
    const pdfViewer = document.getElementById('pdfViewer');
    const downloadBtn = document.getElementById('downloadBtn');

    modalTitle.textContent = book.title;
    
    // For demo purposes, we'll show a message. In production, set pdfViewer.src to book.pdfUrl
    pdfViewer.srcdoc = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: Arial; padding: 2rem; text-align: center;">
            <i class="fas fa-file-pdf" style="font-size: 5rem; color: #2d5f3f; margin-bottom: 1rem;"></i>
            <h2 style="color: #2d5f3f; margin-bottom: 1rem;">${book.title}</h2>
            <p style="color: #666; margin-bottom: 2rem;">by ${book.author}</p>
            <p style="color: #666; max-width: 600px; line-height: 1.6;">
                To enable PDF reading, place your PDF files in the 'books' folder with the filename: <strong>${book.pdfUrl}</strong>
            </p>
            <p style="color: #666; margin-top: 1rem;">
                Or use a PDF viewer library like PDF.js to display PDFs directly in the browser.
            </p>
        </div>
    `;
    
    // Uncomment this line when you have actual PDFs:
    // pdfViewer.src = book.pdfUrl;

    downloadBtn.onclick = () => downloadBook(bookId);
    
    modal.style.display = 'block';
}

// Download book
function downloadBook(bookId) {
    const book = booksDatabase.find(b => b.id === bookId);
    if (!book) return;

    // For demo purposes, show alert. In production, trigger actual download
    alert(`Download started for: ${book.title}\n\nTo enable downloads, ensure PDF files are available at: ${book.pdfUrl}`);
    
    // In production, use this approach:
    /*
    const link = document.createElement('a');
    link.href = book.pdfUrl;
    link.download = `${book.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    */
}

// Close modal
function closeModal() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
    document.getElementById('pdfViewer').src = '';
}

// Helper function to get category display name
function getCategoryName(category) {
    const categoryNames = {
        'quran': 'Quran & Tafsir',
        'hadith': 'Hadith',
        'salah': 'Salah',
        'duas': 'Duas',
        'fiqh': 'Fiqh',
        'aqeedah': 'Aqeedah',
        'seerah': 'Seerah',
        'history': 'Islamic History',
        'character': 'Islamic Character',
        'family': 'Family & Society',
        'dawah': 'Dawah',
        'ramadan': 'Ramadan & Fasting',
        'umrah': 'Umrah & Hajj'
    };
    return categoryNames[category] || category;
}

// Helper function to adjust color brightness
function adjustColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Admin functions (you can expand these)
function addBook(bookData) {
    const newBook = {
        id: booksDatabase.length + 1,
        ...bookData
    };
    booksDatabase.push(newBook);
    displayBooks(booksDatabase);
    updateCategoryCounts();
    displayAuthors();
    console.log('Book added:', newBook);
}

// Example usage to add a new book:
// addBook({
//     title: "New Islamic Book",
//     author: "Scholar Name",
//     category: "salah",
//     description: "Description of the book",
//     pdfUrl: "books/new-book.pdf",
//     coverColor: "#2d5f3f"
// });
