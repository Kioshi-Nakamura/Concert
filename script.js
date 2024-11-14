// Declare variables for storing the total and ticket list
let total = 0;
const ticketList = [];

// Define the ticket prices
const prices = {
    1: 12.00,  // Pelajar SGGS
    2: 14.00,  // Guru SGGS
    3: 5.50,   // Orang Awam (Bawah 12 Tahun)
    4: 20.00,  // Orang Awam (13 hingga 50 Tahun)
    5: 15.00   // Orang Awam (51 Tahun ke atas)
};

// Get references to DOM elements
const addTicketButton = document.getElementById('add-ticket-button');
const finishButton = document.getElementById('finish-button');
const totalPriceElement = document.getElementById('total-price');
const ticketListElement = document.getElementById('ticket-list');
const thankYouMessage = document.getElementById('thank-you-message');
const ticketCategorySelect = document.getElementById('ticket-category');

// Add ticket to the list
addTicketButton.addEventListener('click', () => {
    const category = parseInt(ticketCategorySelect.value);  // Get the selected ticket category
    const price = prices[category];  // Get the price for the selected category

    if (price) {
        total += price;
        ticketList.push(category); // Add the ticket to the list

        // Update the total price display
        totalPriceElement.innerHTML = `Jumlah: RM${total.toFixed(2)}`;

        // Display the ticket list
        const ticketText = {
            1: 'Pelajar SGGS (RM12.00)',
            2: 'Guru SGGS (RM14.00)',
            3: 'Orang Awam (Bawah 12 Tahun - RM5.50)',
            4: 'Orang Awam (13 hingga 50 Tahun - RM20.00)',
            5: 'Orang Awam (51 Tahun ke atas - RM15.00)'
        };

        const ticketHTML = ticketList.map(ticket => {
            return `<p>${ticketText[ticket]}</p>`;
        }).join('');
        
        ticketListElement.innerHTML = ticketHTML;
    }
});

// Finish the purchase and display a thank-you message
finishButton.addEventListener('click', () => {
    thankYouMessage.style.display = 'block'; // Show the thank you message
});
