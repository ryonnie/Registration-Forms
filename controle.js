document.addEventListener("DOMContentLoaded", function() {
    const dropSelect = document.querySelector('.drop-select');
    const dropList = document.querySelector('.drop-list');
    const dropItems = document.querySelectorAll('.drop-list__item');
    
    // Show/Hide dropdown list on hover or click
    dropSelect.addEventListener('click', function() {
        dropList.style.opacity = dropList.style.opacity === '1' ? '0' : '1';
        dropList.style.visibility = dropList.style.visibility === 'visible' ? 'hidden' : 'visible';
    });

    // Handle item selection
    dropItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedValue = item.getAttribute('data-value');
            dropSelect.querySelector('.select').textContent = selectedValue;  // Update the selected item text
            dropList.style.opacity = '0';  // Hide the dropdown after selection
            dropList.style.visibility = 'hidden';  // Hide the dropdown after selection
        });
    });
});
