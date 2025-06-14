const youthTrending = [
    {title: 'Coding Bootcamp Collab', category: 'Tech', engagement: 15},
    {title: 'Eco School Challenge', category: 'Sustainability', engagement: 18},
    {title: 'Art for Social Good', category: 'Creativity', engagement: 12}
];

const mentors = [];
const youthResources = [
    {text: 'Intro to Startups', link: '#'},
    {text: 'Pitch Like a Pro', link: '#'},
    {text: 'Free Design Tools', link: '#'}
];

function renderYouthTrending() {
    const container = document.getElementById('youth-trending-cards');
    container.innerHTML = '';
    youthTrending.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.category}</p><span>${item.engagement} replies</span>`;
        container.appendChild(card);
    });
}

function renderYouthResources() {
    const list = document.getElementById('youth-resources-list');
    list.innerHTML = '';
    youthResources.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${r.link}">${r.text}</a>`;
        list.appendChild(li);
    });
}

document.getElementById('connect-mentor').addEventListener('click', () => {
    const interest = document.getElementById('interest').value;
    if (interest) {
        mentors.push(interest.toLowerCase());
        const matches = mentors.filter(m => m === interest.toLowerCase());
        if (matches.length > 1) {
            document.getElementById('mentor-result').textContent = 'A mentor is available! Connect now.';
        } else {
            document.getElementById('mentor-result').textContent = 'Waiting for a mentor with that interest...';
        }
    }
});

renderYouthTrending();
renderYouthResources();
