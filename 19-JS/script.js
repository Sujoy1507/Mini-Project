const users = [
    {
        fullName: "Arjun Mehta",
        image: "https://images.unsplash.com/photo-1758941853143-e94fb46799e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
        profession: "Frontend Developer",
        description:
            "Passionate about clean UI, JavaScript, and building smooth user experiences.",
        tags: ["JavaScript", "React", "UI"],
    },

    {
        fullName: "Priya Sharma",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        profession: "Digital Marketer",
        description:
            "Works with brand strategy, SEO, and online growth campaigns.",
        tags: ["SEO", "Branding", "Content"],
    },

    {
        fullName: "Rahul Das",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        profession: "Fitness Trainer",
        description:
            "Helps people reach fitness goals with science based workouts.",
        tags: ["Fitness", "Health", "Training"],
    },

    {
        fullName: "Ananya Roy",
        image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
        profession: "Graphic Designer",
        description:
            "Specializes in logos, illustrations, and modern visual design.",
        tags: ["Design", "Illustration", "Brand"],
    },

    {
        fullName: "Vikram Singh",
        image: "https://images.unsplash.com/photo-1762883469122-c15463bbce28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        profession: "Backend Engineer",
        description:
            "Builds scalable systems and APIs with Node and databases.",
        tags: ["NodeJS", "API", "MongoDB"],
    },
];

let main = document.querySelector("main");
let tagsContainer = document.querySelector(".tags-container");
let card = document.querySelector(".card");

let tag = "";
users.forEach((element) => {});

let sum = "";
users.forEach((element) => {
    let singleTag = "";

    element.tags.forEach((element) => {
        singleTag += `<h1 class="tag">${element}</h1>`;
    });

    sum += `<div class="card">
            <img src="${element.image}" alt="">
            <div class="name">${element.fullName}</div>
            <div class="profession">${element.profession}</div>
            <div class="description">${element.description}</div>
            <div class="tags-container">${singleTag}</div>
        </div>`;
});

main.innerHTML = sum;
