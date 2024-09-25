//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function(e) {
            e.preventDefault();

            // Get the input values
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;

            // Validate that all fields are filled in
            if (title === '' || author === '' || isbn === '') {
                alert('Please fill in all fields');
                return;
            }

            // Create a new row for the book
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete">Clear</button></td>
            `;

            // Append the row to the table
            document.getElementById('book-list').appendChild(row);

            // Clear the input fields after submission
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';

            // Add event listener to the delete button
            row.querySelector('.delete').addEventListener('click', function() {
                row.remove();
            });
        });