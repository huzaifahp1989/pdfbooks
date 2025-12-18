# Islamic Books Library

A comprehensive web application for managing and accessing Islamic literature with categorization, author filtering, online reading, and download capabilities.

## Features

### Core Functionality
- **Category Browsing**: 12 different Islamic topics including:
  - Quran & Tafsir
  - Hadith
  - Salah (Prayer)
  - Duas (Supplications)
  - Fiqh (Jurisprudence)
  - Aqeedah (Belief)
  - Seerah (Biography)
  - Islamic History
  - Islamic Character
  - Family & Society
  - Dawah (Invitation)
  - Ramadan & Fasting
  - Umrah & Hajj

- **Author Section**: Browse books by specific authors
- **Search Functionality**: Search by title, author, category, or description
- **Online Reading**: Read books directly in the browser
- **Download Books**: Download PDF files for offline reading
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Getting Started

### Installation

1. Download or clone this repository
2. Open `index.html` in your web browser
3. The application is ready to use!

### Project Structure

```
islamic-books-library/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md          # This file
└── books/             # Folder for PDF files (create this folder)
    ├── fortress-of-the-muslim.pdf
    ├── complete-guide-to-prayer.pdf
    └── ... (add your PDF files here)
```

## Adding Books

### Method 1: Using the JavaScript Console

Open the browser console and use the `addBook()` function:

```javascript
addBook({
    title: "Your Book Title",
    author: "Author Name",
    category: "salah", // Use one of the available categories
    description: "Book description",
    pdfUrl: "books/your-book-file.pdf",
    coverColor: "#2d5f3f" // Optional: Custom color for book cover
});
```

### Method 2: Edit the booksDatabase Array

Open `script.js` and add new book objects to the `booksDatabase` array:

```javascript
let booksDatabase = [
    // ... existing books
    {
        id: 15, // Increment from last ID
        title: "Your Book Title",
        author: "Author Name",
        category: "category-name",
        description: "Book description",
        pdfUrl: "books/your-book-file.pdf",
        coverColor: "#2d5f3f"
    }
];
```

## Available Categories

Use these category values when adding books:
- `quran` - Quran & Tafsir
- `hadith` - Hadith
- `salah` - Salah (Prayer)
- `duas` - Duas (Supplications)
- `fiqh` - Fiqh (Jurisprudence)
- `aqeedah` - Aqeedah (Belief)
- `seerah` - Seerah (Biography)
- `history` - Islamic History
- `character` - Islamic Character
- `family` - Family & Society
- `dawah` - Dawah
- `ramadan` - Ramadan & Fasting
- `umrah` - Umrah & Hajj

## Setting Up PDF Files

1. Create a `books` folder in the project directory
2. Add your PDF files to this folder
3. When adding books, reference the PDF path as: `books/filename.pdf`

### Enabling PDF Viewing

The current implementation shows a placeholder for PDFs. To enable actual PDF viewing:

1. **Option 1**: Use the built-in browser PDF viewer
   - Uncomment line in `openBook()` function: `pdfViewer.src = book.pdfUrl;`
   - Comment out or remove the `pdfViewer.srcdoc` line

2. **Option 2**: Use PDF.js library (recommended for better compatibility)
   - Include PDF.js in your project
   - Update the viewer implementation in `script.js`

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2d5f3f;     /* Main green */
    --secondary-color: #4a8f65;   /* Lighter green */
    --accent-color: #d4af37;      /* Gold accent */
    /* ... more colors */
}
```

### Adding New Categories

1. Add the category card in `index.html` in the categories section
2. Add the category name mapping in `getCategoryName()` function in `script.js`
3. Add appropriate icon from Font Awesome

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- No external frameworks required

## Future Enhancements

Potential features to add:
- User authentication
- Admin panel for managing books
- Comments and ratings
- Bookmarks and reading progress
- Backend integration (Node.js, PHP, etc.)
- Database storage (MongoDB, MySQL)
- Advanced search with filters
- Multiple language support
- Audio books section
- Reading statistics

## License

This project is open source and available for educational and non-commercial use.

## Support

For issues or questions, please create an issue in the repository.

---

**May Allah accept this effort and make it beneficial for the Muslim Ummah. Ameen.**
