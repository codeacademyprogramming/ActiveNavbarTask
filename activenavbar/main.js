const list = document.querySelector("ul");
const body = document.querySelector("body");

const ids = [
    {
        id: "whatwedo",
        text: "What we do",
        background: "blue"
    },
    {
        id: "whoweare",
        text: "Who we are",
        background: "green"
    },
    {
        id: "jobs",
        text: "Jobs",
        background: "yellow"
    },
    {
        id: "news",
        text: "News",
        background: "red"
    },
    {
        id: "contacts",
        text: "Contacts",
        background: "cyan"
    },
    {
        id: "faq",
        text:"FAQ",
        background: "purple"
    }
]

ids.forEach(({ id, text, background }) => {
    const item = document.createElement('li');
    const a = document.createElement('a');
    const section = document.createElement('section');
    a.setAttribute('data-id', id);
    a.setAttribute('href', `#${id}`);
    a.innerHTML = text;

    section.setAttribute('id', id);
    section.style.backgroundColor = background;

    item.appendChild(a);
    list.appendChild(item);

    body.appendChild(section);
});

let currentId;
currentId = ids[0].id;

window.addEventListener('scroll', () => {
    const { scrollY } = window;

    ids.forEach(({ id }) => {
        const element = document.getElementById(id);
        const { offsetTop, offsetHeight } = element;

        if (
            offsetTop - (offsetHeight / 2) <= scrollY && (offsetTop + offsetHeight / 2) > scrollY
        ) {
            const prevAnchor = document.querySelector(`a[data-id=${currentId}]`);
            prevAnchor.classList.remove('active');

            const anchor = document.querySelector(`a[data-id=${id}]`);
            anchor.classList.add('active');

            currentId = id;
        }
    });
})
