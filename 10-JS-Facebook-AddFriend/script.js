let addFriend = document.querySelector("button");
let i = document.querySelector("i");
let h4 = document.querySelector("h4");
let flag = true;

addFriend.addEventListener("click", () => {
    if (flag === true) {
        h4.style.display = "initial";
        i.style.opacity = 1;
        addFriend.textContent = "Friend";
        addFriend.style.color='green'
        i.style.color = "green";
        setTimeout(() => {
            h4.style.display = "none";
        }, 1000);
    } else {
        addFriend.textContent = "Add Friend";
        i.style.color = "red";
        addFriend.style.color='red'
    }
    flag = !flag;
});
