let currentArray = [];

function generateArray() {
    const inputBox = document.getElementById('inputbox');
    const values = inputBox.value.split(',').map(value => value.trim()).filter(value => value !== '');

    currentArray.push(...values);
    inputBox.value = '';
    updateArrayDisplay();
}

function updateArrayDisplay() {
    const arrayDisplay = document.getElementById('arrayDisplay');
    arrayDisplay.innerHTML = ''; // Clear current display

    currentArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        arrayDisplay.appendChild(listItem);
    });
}

document.getElementById('popBtn').addEventListener('click', () => {
    currentArray.pop();
    updateArrayDisplay();
});

document.getElementById('pushBtn').addEventListener('click', () => {
    const inputBox = document.getElementById('inputbox');
    const value = inputBox.value.trim();

    if (value) {
        currentArray.push(value);
        inputBox.value = '';
        updateArrayDisplay();
    }
});

document.getElementById('shiftBtn').addEventListener('click', () => {
    currentArray.shift();
    updateArrayDisplay();
});

document.getElementById('unshiftBtn').addEventListener('click', () => {
    const inputBox = document.getElementById('inputbox');
    const value = inputBox.value.trim();

    if (value) {
        currentArray.unshift(value);
        inputBox.value = '';
        updateArrayDisplay();
    }
});

document.getElementById('sliceBtn').addEventListener('click', () => {
    const start = parseInt(prompt('Enter start index:'));
    const end = parseInt(prompt('Enter end index:'));
    const slicedArray = currentArray.slice(start, end);

    Swal.fire({
        title: 'Sliced Array',
        text: slicedArray.join(', '),
        icon: 'info',
        confirmButtonText: 'Okay'
    });
});

document.getElementById('spliceBtn').addEventListener('click', () => {
    const index = parseInt(prompt('Enter index to start splicing:'));
    const count = parseInt(prompt('Enter number of elements to remove:'));
    const itemsToAdd = prompt('Enter items to add (comma separated):');
    const newItems = itemsToAdd ? itemsToAdd.split(',').map(item => item.trim()) : [];

    currentArray.splice(index, count, ...newItems);
    updateArrayDisplay();

    Swal.fire({
        title: 'Splice Operation',
        text: `Updated Array: ${currentArray.join(', ')}`,
        icon: 'success',
        confirmButtonText: 'Okay'
    });
});






