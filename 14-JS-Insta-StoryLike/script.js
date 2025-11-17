let card = document.querySelectorAll(".card");

card.forEach((card) => {
    let love = card.querySelector(".big-love");
    let imgContainer = card.querySelector(".img-container");
    let loveFlag = true;
    let loveReact = card.querySelector(".icons .love i");

    imgContainer.addEventListener("dblclick", () => {
        love.style.opacity = 1;
        love.style.scale = 1.2;

        setTimeout(() => {
            love.style.opacity = 0;
        }, 1000);
    });
    let flagReact = true;

    loveReact.addEventListener("click", () => {
        if (flagReact === true) {
            love.style.opacity = 1;
            loveReact.style.color = "red";
            flagReact = false;
        } else {
            loveReact.style.color = "black";
            flagReact = true;
        }

        setTimeout(() => {
            love.style.opacity = 0;
        }, 1000);
    });
});

// Story Feature

let arr = [
    {
        profilePicture:
            "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1512101903502-7eb0c9022c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1563993297290-609c9406efcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
        profilePicture:
            "https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsfGVufDB8fDB8fHww",
    },
];

let storyContainer = document.querySelector(".story-container");
let clutter = "";
arr.forEach((val, index) => {
    clutter += `<div class="story">
<img id="${index}" src="${val.profilePicture}" alt="" />
          </div>`;
});
storyContainer.innerHTML = clutter;

let fullScreen = document.querySelector(".full-screen");
storyContainer.addEventListener("click", (event) => {
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url("${arr[event.target.id].story}")`;
});

fullScreen.addEventListener("click", () => {
    fullScreen.style.display = "none";
});
