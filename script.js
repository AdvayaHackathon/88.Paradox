function buyBook(title) {
    const encodedTitle = encodeURIComponent(title);
    window.location.href = `checkout.html?title=${encodedTitle}`;
  }
  
  window.onload = function () {
    const bookList = document.getElementById('bookList');
  
    const defaultBooks = [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "5.00" },
      { title: "1984", author: "George Orwell", price: "4.00" }
    ];
  
    const userBooks = JSON.parse(localStorage.getItem('userBooks') || '[]');
    const allBooks = [...defaultBooks, ...userBooks];
  
    allBooks.forEach(book => {
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Price: $${book.price}</p>
        <button onclick="buyBook('${book.title}')">Buy</button>
      `;
      bookList.appendChild(card);
    });
  };
  