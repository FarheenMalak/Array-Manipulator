let currentArray = [];
let lastOperation = ''; // Variable to store the last operation description

// Function to generate an array from the input
function generateArray() {
    const inputBox = document.getElementById('inputbox');
    const values = inputBox.value.split(',').map(value => value.trim()).filter(value => value !== '');

    currentArray.push(...values); // Add values to the array
    inputBox.value = ''; // Clear the input box
    lastOperation = 'Generated array with values: ' + values.join(', ');
    updateArrayDisplay(); // Update the display
}

// Function to update the array display on the page
function updateArrayDisplay() {
    const arrayDisplay = document.getElementById('arrayDisplay');
    arrayDisplay.innerHTML = ''; // Clear current display

    // Display array items
    currentArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('array-item'); // Add class for styling

        const itemButton = document.createElement('button');
        itemButton.textContent = item; // Set button text
        listItem.appendChild(itemButton); // Append button to list item

        arrayDisplay.appendChild(listItem); // Append list item to display
    });

    // Display last operation
    const operationDisplay = document.getElementById('operationDisplay');
    operationDisplay.innerHTML = `<strong>Current Array:</strong> ${currentArray.join(', ')}<br><strong>Last Operation:</strong> ${lastOperation}`;
}

// Event listeners for different operations
document.getElementById('popBtn').addEventListener('click', () => {
    const poppedValue = currentArray.pop(); // Remove the last element
    lastOperation = `Popped value: ${poppedValue}`;
    updateArrayDisplay();
});

document.getElementById('pushBtn').addEventListener('click', () => {
    const inputBox = document.getElementById('inputbox');
    const value = inputBox.value.trim();

    if (value) {
        currentArray.push(value); // Add element to the end
        lastOperation = `Pushed value: ${value}`;
        inputBox.value = ''; // Clear the input box
        updateArrayDisplay();
    }
});

document.getElementById('shiftBtn').addEventListener('click', () => {
    const shiftedValue = currentArray.shift(); // Remove the first element
    lastOperation = `Shifted value: ${shiftedValue}`;
    updateArrayDisplay();
});

document.getElementById('unshiftBtn').addEventListener('click', () => {
    const inputBox = document.getElementById('inputbox');
    const value = inputBox.value.trim();

    if (value) {
        currentArray.unshift(value); // Add element to the beginning
        lastOperation = `Unshifted value: ${value}`;
        inputBox.value = ''; // Clear the input box
        updateArrayDisplay();
    }
});

document.getElementById('sliceBtn').addEventListener('click', () => {
    const start = parseInt(prompt('Enter start index:'));
    const end = parseInt(prompt('Enter end index:'));
    const slicedArray = currentArray.slice(start, end); // Slice the array
    lastOperation = `Sliced array from index ${start} to ${end}: ${slicedArray.join(', ')}`;

    Swal.fire({
        title: 'Sliced Array',
        text: slicedArray.join(', '),
        icon: 'info',
        confirmButtonText: 'Okay'
    });
    updateArrayDisplay();
});

document.getElementById('spliceBtn').addEventListener('click', () => {
    const index = parseInt(prompt('Enter index to start splicing:'));
    const count = parseInt(prompt('Enter number of elements to remove:'));
    const itemsToAdd = prompt('Enter items to add (comma separated):');
    const newItems = itemsToAdd ? itemsToAdd.split(',').map(item => item.trim()) : [];

    currentArray.splice(index, count, ...newItems); // Splice the array
    lastOperation = `Spliced at index ${index}, removed ${count} items, added: ${newItems.join(', ')}`;
    updateArrayDisplay();

    Swal.fire({
        title: 'Splice Operation',
        text: `Updated Array: ${currentArray.join(', ')}`,
        icon: 'success',
        confirmButtonText: 'Okay'
    });
});
