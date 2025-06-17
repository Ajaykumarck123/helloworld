const trending = [
    {title: 'AI for Good', category: 'AI', engagement: 42},
    {title: 'Eco Fashion App', category: 'Sustainability', engagement: 30},
    {title: 'Creator Monetization', category: 'Creator Economy', engagement: 25},
    {title: 'Smart Home Hardware', category: 'Hardware', engagement: 28}
];

const posts = [];
const resources = [
    {text: 'Lean Startup Guide', link: '#'},
    {text: 'Pitch Deck Templates', link: '#'},
    {text: 'Prototyping Tools', link: '#'}
];
const users = [];
const milestones = [];

function renderTrending() {
    const container = document.getElementById('trending-cards');
    container.innerHTML = '';
    trending.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.category}</p><span>${item.engagement} replies</span>`;
        container.appendChild(card);
    });
}

function renderPosts() {
    const stageFilter = document.getElementById('stage-filter').value;
    const domainFilter = document.getElementById('domain-filter').value;
    const container = document.getElementById('posts');
    container.innerHTML = '';
    posts.filter(p => {
        return (!stageFilter || p.stage === stageFilter) && (!domainFilter || p.domain === domainFilter);
    }).forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `<h4>${post.title}</h4><p>Stage: ${post.stage} | Domain: ${post.domain}</p>`;
        container.appendChild(div);
    });
}

function renderResources() {
    const list = document.getElementById('resources');
    list.innerHTML = '';
    resources.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${r.link}">${r.text}</a>`;
        list.appendChild(li);
    });
}

function renderMilestones() {
    const list = document.getElementById('milestones');
    list.innerHTML = '';
    milestones.forEach(m => {
        const li = document.createElement('li');
        li.textContent = m;
        list.appendChild(li);
    });
}

document.getElementById('add-post').addEventListener('click', () => {
    const title = document.getElementById('post-title').value;
    const stage = document.getElementById('post-stage').value;
    const domain = document.getElementById('post-domain').value;
    if (title) {
        posts.push({title, stage, domain});
        document.getElementById('post-title').value = '';
        renderPosts();
    }
});

document.getElementById('stage-filter').addEventListener('change', renderPosts);
document.getElementById('domain-filter').addEventListener('change', renderPosts);

document.getElementById('find-match').addEventListener('click', () => {
    const interests = document.getElementById('my-interests').value;
    if (interests) {
        users.push({interests});
        const matches = users.filter(u => u.interests.toLowerCase() === interests.toLowerCase());
        if (matches.length > 1) {
            document.getElementById('match-result').textContent = 'Match found! Connect and build together.';
        } else {
            document.getElementById('match-result').textContent = 'Waiting for others with similar interests...';
        }
    }
});

document.getElementById('add-milestone').addEventListener('click', () => {
    const milestone = document.getElementById('milestone').value;
    if (milestone) {
        milestones.push(milestone);
        document.getElementById('milestone').value = '';
        renderMilestones();
    }
});

renderTrending();
renderPosts();
renderResources();
renderMilestones();
