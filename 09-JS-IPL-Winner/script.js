const iplTeams = [
    {
        logo: "./Mumbai_Indians.webp",
        captain: "Hardik Pandya",
        primary: "Blue",
        secondary: "Gold",
        teamName: "MI",
        trophies: 5,
        fullName: "Mumbai Indians",
    },

    {
        logo: "./Chennai_Super_Kings_Logo.webp",
        captain: "Ruturaj Gaikwad",
        primary: "Yellow",
        secondary: "Blue",
        teamName: "CSK",
        trophies: 5,
        fullName: "Chennai Super Kings",
    },

    {
        logo: "./Kolkata_Knight_Riders.webp",
        captain: "Shreyas Iyer",
        primary: "Purple",
        secondary: "Gold",
        teamName: "KKR",
        trophies: 3,
        fullName: "Kolkata Knight Riders",
    },

    {
        logo: "./Rajasthan_Royals_Logo.webp",
        captain: "Sanju Samson",
        primary: "Pink",
        secondary: "Blue",
        teamName: "RR",
        trophies: 1,
        fullName: "Rajasthan Royals",
    },

    {
        logo: "./Lucknow_Super_Giants.webp",
        captain: "KL Rahul",
        primary: "Navy Blue",
        secondary: "Red",
        teamName: "LSG",
        trophies: 0,
        fullName: "Lucknow Super Giants",
    },

    {
        logo: "./Gujarat_Titans.webp",
        captain: "Shubman Gill",
        primary: "Dark Blue",
        secondary: "Gold",
        teamName: "GT",
        trophies: 1,
        fullName: "Gujarat Titans",
    },

    {
        logo: "./Sunrisers_Hyderabad.webp",
        captain: "Pat Cummins",
        primary: "Orange",
        secondary: "Black",
        teamName: "SRH",
        trophies: 1,
        fullName: "Sunrisers Hyderabad",
    },

    {
        logo: "./Royal-Challengers-Bengaluru.webp",
        captain: "Faf du Plessis",
        primary: "Red",
        secondary: "Gold",
        teamName: "RCB",
        trophies: 0,
        fullName: "Royal Challengers Bengaluru",
    },

    {
        logo: "./Delhi_Capitals.webp",
        captain: "Rishabh Pant",
        primary: "Blue",
        secondary: "Red",
        teamName: "DC",
        trophies: 0,
        fullName: "Delhi Capitals",
    },

    {
        logo: "./Punjab_Kings.webp",
        captain: "Shikhar Dhawan",
        primary: "Red",
        secondary: "Black",
        teamName: "PBKS",
        trophies: 0,
        fullName: "Punjab Kings",
    },
];

let mainBttn = document.querySelector("#mainBttn");

mainBttn.addEventListener("click", function () {
    let winnerRandom = Math.floor(Math.random() * iplTeams.length);

    let teamNm = document.querySelector("#team-name");
    let logo = document.querySelector("#logo");
    let fullName = document.querySelector("#fullName");
    let captain = document.querySelector("#captain");
    let trophy = document.querySelector("#trophy");
    let primary = document.querySelector("main");
    let secondary = document.querySelector("#hero");

    let hue = Math.floor(Math.random() * 361);
    let saturation = Math.floor(Math.random() * 51) + 50;
    let lightness = Math.floor(Math.random() * 21) + 40;

    let hue1 = Math.floor(Math.random() * 361);
    let saturation1 = Math.floor(Math.random() * 51) + 50;
    let lightness1 = Math.floor(Math.random() * 21) + 40;

    let hue2 = Math.floor(Math.random() * 361);
    let saturation2 = Math.floor(Math.random() * 51) + 50;
    let lightness2 = Math.floor(Math.random() * 21) + 40;

    let hue3 = Math.floor(Math.random() * 361);
    let saturation3 = Math.floor(Math.random() * 51) + 50;
    let lightness3 = Math.floor(Math.random() * 21) + 40;

    fullName.textContent = iplTeams[winnerRandom].fullName;
    fullName.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    teamNm.textContent = iplTeams[winnerRandom].teamName;
    teamNm.style.color = `hsl(${hue1}, ${saturation1}%, ${lightness1}%)`;
    captain.textContent = iplTeams[winnerRandom].captain;
    captain.style.color = `hsl(${hue2}, ${saturation2}%, ${lightness2}%)`;
    trophy.textContent = iplTeams[winnerRandom].trophies;
    trophy.style.color = `hsl(${hue3}, ${saturation3}%, ${lightness3}%)`;
    logo.src = iplTeams[winnerRandom].logo;

    mainBttn.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    mainBttn.style.backgroundColor = `hsl(${hue3}, ${saturation3}%, ${lightness3}%)`;
    primary.style.backgroundColor = iplTeams[winnerRandom].primary;
    secondary.style.backgroundColor = iplTeams[winnerRandom].secondary;
});
