// Upload page functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeUploadPage();
});

function initializeUploadPage() {
    const form = document.getElementById('uploadForm');
    const fileUploadArea = document.getElementById('fileUploadArea');
    const fileInput = document.getElementById('pdfFile');
    const fileInfo = document.getElementById('fileInfo');
    const submitBtn = document.getElementById('submitBtn');

    // Click to upload
    fileUploadArea.addEventListener('click', function() {
        fileInput.click();
    });

    // Drag and drop
    fileUploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    fileUploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
    });

    fileUploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileSelect(files[0]);
        }
    });

    // File input change
    fileInput.addEventListener('change', function(e) {
        if (this.files.length > 0) {
            handleFileSelect(this.files[0]);
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });
}

function handleFileSelect(file) {
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');

    // Validate file type
    if (file.type !== 'application/pdf') {
        showError('Please select a PDF file');
        return;
    }

    // Display file info
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    fileInfo.classList.add('active');
}

function handleFormSubmit() {
    const form = document.getElementById('uploadForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // Get form values
    const bookTitle = document.getElementById('bookTitle').value.trim();
    const authorName = document.getElementById('authorName').value.trim() || 'Unknown Author';
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value.trim() || 'No description available';
    const coverColor = document.getElementById('coverColor').value;
    const pdfFile = document.getElementById('pdfFile').files[0];

    // Validate required fields
    if (!bookTitle || !category || !pdfFile) {
        showError('Please fill in all required fields');
        return;
    }

    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';

    // Create book object
    const newBook = {
        id: Date.now(), // Use timestamp as unique ID
        title: bookTitle,
        author: authorName,
        category: category,
        description: description,
        coverColor: coverColor,
        pdfUrl: '', // Will be set after file upload
        fileName: pdfFile.name,
        dateAdded: new Date().toISOString()
    };

    // Save book metadata immediately (instant upload)
    newBook.pdfUrl = `books/${sanitizeFileName(pdfFile.name)}`;
    
    // Save to localStorage
    saveBookToStorage(newBook);
    
    // Show success message
    showSuccess();
    
    // Reset form
    form.reset();
    document.getElementById('fileInfo').classList.remove('active');
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-upload"></i> Upload Book';

    // Redirect to home after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

function saveBookToStorage(book) {
    // Get existing books from localStorage
    let books = JSON.parse(localStorage.getItem('uploadedBooks')) || [];
    
    // Add new book
    books.push(book);
    
    // Save back to localStorage
    localStorage.setItem('uploadedBooks', JSON.stringify(books));
}

function sanitizeFileName(fileName) {
    return fileName.toLowerCase().replace(/[^a-z0-9.-]/g, '-');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function showSuccess() {
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.classList.remove('active');
    successMessage.classList.add('active');
    
    setTimeout(() => {
        successMessage.classList.remove('active');
    }, 5000);
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    const successMessage = document.getElementById('successMessage');
    
    successMessage.classList.remove('active');
    errorText.textContent = message;
    errorMessage.classList.add('active');
    
    setTimeout(() => {
        errorMessage.classList.remove('active');
    }, 5000);
}
