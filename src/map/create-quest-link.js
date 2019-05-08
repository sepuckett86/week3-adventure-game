function createQuestLink(quest) {
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = './map.html?' + searchParams;
    link.textContent = quest.title;
    return link;
}

export default createQuestLink;