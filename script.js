function toggleFAQ(element) {
    const answer = element.querySelector('.license');
    answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
}