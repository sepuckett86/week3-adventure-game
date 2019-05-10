function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('completed');
    span.textContent = quest.title;
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    return span;
}

export default createCompletedQuest;