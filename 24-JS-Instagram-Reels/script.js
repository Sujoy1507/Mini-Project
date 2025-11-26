const reels = [
    {
        isMuted: true,
        username: "arjun_mehta",
        likeCount: 1430,
        isLiked: false,
        commentCount: 120,
        shareCount: 45,
        caption: "Morning vibes at the lake",
        video: "./Asset-video/Video-01.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1761839258623-e232e15f7ff3?w=600&auto=format&fit=crop&q=60",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "riya_sharma",
        likeCount: 18900,
        isLiked: true,
        commentCount: 320,
        shareCount: 140,
        caption: "Today’s sunset was unreal",
        video: "./Asset-video/Video-02.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        isShare: false,
        isFollowed: false,
    },
    {
        isMuted: true,
        username: "travelwithanup",
        likeCount: 8200,
        isLiked: false,
        commentCount: 98,
        shareCount: 60,
        caption: "Hiking through Himachal trails",
        video: "./Asset-video/Video-03.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "codebykriti",
        likeCount: 2500,
        isLiked: false,
        commentCount: 77,
        shareCount: 20,
        caption: "Learning JS arrays today",
        video: "./Asset-video/Video-04.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "fitnesswithrahul",
        likeCount: 12800,
        isLiked: true,
        commentCount: 230,
        shareCount: 90,
        caption: "Back workout day",
        video: "./Asset-video/Video-05.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        isShare: false,
        isFollowed: false,
    },
    {
        isMuted: true,
        username: "tania_art",
        likeCount: 4300,
        isLiked: false,
        commentCount: 56,
        shareCount: 18,
        caption: "Trying a new watercolor style",
        video: "./Asset-video/Video-06.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "cityfoodbuzz",
        likeCount: 9200,
        isLiked: true,
        commentCount: 310,
        shareCount: 105,
        caption: "Best momos in Delhi",
        video: "./Asset-video/Video-07.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "deep_music",
        likeCount: 5800,
        isLiked: false,
        commentCount: 140,
        shareCount: 69,
        caption: "New guitar cover today",
        video: "./Asset-video/Video-08.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        isShare: false,
        isFollowed: false,
    },
    {
        isMuted: true,
        username: "nature_lover",
        likeCount: 21300,
        isLiked: true,
        commentCount: 450,
        shareCount: 190,
        caption: "Peaceful forest walk",
        video: "./Asset-video/Video-09.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "tech_updates",
        likeCount: 3700,
        isLiked: false,
        commentCount: 79,
        shareCount: 34,
        caption: "New phone launch details",
        video: "./Asset-video/Video-10.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1556157382-97eda2d62296",
        isShare: false,
        isFollowed: false,
    },
    {
        isMuted: true,
        username: "cookwithayushi",
        likeCount: 6100,
        isLiked: true,
        commentCount: 210,
        shareCount: 75,
        caption: "Crispy dosa recipe today",
        video: "./Asset-video/Video-11.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "wander_soul",
        likeCount: 15800,
        isLiked: false,
        commentCount: 390,
        shareCount: 120,
        caption: "Snowfall in Kashmir",
        video: "./Asset-video/Video-12.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        isShare: false,
        isFollowed: false,
    },
    {
        isMuted: true,
        username: "gamingwithdev",
        likeCount: 4800,
        isLiked: true,
        commentCount: 150,
        shareCount: 66,
        caption: "New Valorant highlights",
        video: "./Asset-video/Video-13.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "dance_vibes",
        likeCount: 22200,
        isLiked: true,
        commentCount: 520,
        shareCount: 200,
        caption: "Quick choreography on a trending song",
        video: "./Asset-video/Video-14.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        isShare: false,
        isFollowed: false,
    },
    {
        isMuted: true,
        username: "bookish_priya",
        likeCount: 3100,
        isLiked: false,
        commentCount: 88,
        shareCount: 22,
        caption: "A beautiful line from my current read",
        video: "./Asset-video/Video-15.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "carfanatic",
        likeCount: 13200,
        isLiked: true,
        commentCount: 260,
        shareCount: 110,
        caption: "Mustang GT roar",
        video: "./Asset-video/Video-16.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
        isShare: false,
        isFollowed: false,
    },
    {
        isMuted: true,
        username: "petworld",
        likeCount: 9800,
        isLiked: false,
        commentCount: 340,
        shareCount: 150,
        caption: "Cute dog compilation",
        video: "./Asset-video/Video-17.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "minimal_life",
        likeCount: 5100,
        isLiked: false,
        commentCount: 160,
        shareCount: 40,
        caption: "Calm workspace setup",
        video: "./Asset-video/Video-18.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        isShare: false,
        isFollowed: false,
    },
    {
        isMuted: true,
        username: "photographyrush",
        likeCount: 19700,
        isLiked: true,
        commentCount: 420,
        shareCount: 180,
        caption: "Street photography at night",
        video: "./Asset-video/Video-19.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        isShare: false,
        isFollowed: true,
    },
    {
        isMuted: true,
        username: "lifeofcoder",
        likeCount: 3500,
        isLiked: false,
        commentCount: 100,
        shareCount: 30,
        caption: "Fixing bugs all day",
        video: "./Asset-video/Video-20.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
        isShare: false,
        isFollowed: true,
    },
];

function allComments(element) {
    const comments = [
        {
            username: "arjun_mehta",
            profilePhoto:
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
            time: "2m",
            isLiked: false,
            likeCount: 1450,
            comment: "Amazing click bhai, pura vibe alag laga 🔥",
            commentCount: 230,
        },
        {
            username: "priya_sharma",
            profilePhoto:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            time: "3w",
            isLiked: true,
            likeCount: 9800,
            comment: "You look so beautiful here, soft glow ✨",
            commentCount: 520,
        },
        {
            username: "rahul_das",
            profilePhoto:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            time: "1y",
            isLiked: false,
            likeCount: 6200,
            comment: "Beast mode activated bro 💪🔥",
            commentCount: 410,
        },
        {
            username: "ananya_roy",
            profilePhoto:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
            time: "5d",
            isLiked: false,
            likeCount: 3100,
            comment: "Pretty as always, golden hour suits you 😍",
            commentCount: 150,
        },
        {
            username: "vijay_kapoor",
            profilePhoto:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            time: "7m",
            isLiked: true,
            likeCount: 7450,
            comment: "Sharp look bro, solid styling 😎",
            commentCount: 330,
        },
        {
            username: "isha_sen",
            profilePhoto:
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
            time: "2w",
            isLiked: false,
            likeCount: 2800,
            comment: "Cute picture, soft vibes 😊",
            commentCount: 170,
        },
        {
            username: "karan_jadhav",
            profilePhoto:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
            time: "3m",
            isLiked: true,
            likeCount: 5400,
            comment: "Fit clean hai bro, attitude 🔥",
            commentCount: 275,
        },
        {
            username: "meera_n",
            profilePhoto:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            time: "1d",
            isLiked: false,
            likeCount: 1900,
            comment: "Aesthetic look, you glow naturally ✨",
            commentCount: 120,
        },
        {
            username: "dev_singh",
            profilePhoto:
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
            time: "9m",
            isLiked: true,
            likeCount: 8500,
            comment: "Powerful shot bhai, full energy 💥",
            commentCount: 360,
        },
        {
            username: "tanya_k",
            profilePhoto:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
            time: "4w",
            isLiked: false,
            likeCount: 2600,
            comment: "Lovely capture, warm and sweet 😊",
            commentCount: 140,
        },

        {
            username: "rishi_verma",
            profilePhoto:
                "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
            time: "8d",
            isLiked: true,
            likeCount: 3300,
            comment: "Bro this shot goes hard 🔥😎",
            commentCount: 190,
        },
        {
            username: "shruti_p",
            profilePhoto:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
            time: "6m",
            isLiked: false,
            likeCount: 4200,
            comment: "Pretty soft look, loved this one ✨",
            commentCount: 210,
        },
        {
            username: "manav_k",
            profilePhoto:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
            time: "2y",
            isLiked: false,
            likeCount: 9100,
            comment: "Legendary vibe bro, iconic shot 🔥",
            commentCount: 480,
        },
        {
            username: "riya_agarwal",
            profilePhoto:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            time: "10d",
            isLiked: true,
            likeCount: 3700,
            comment: "Soft smile, looking very elegant 😊",
            commentCount: 200,
        },
        {
            username: "naman_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1552058544-f2b08422138a",
            time: "1m",
            isLiked: false,
            likeCount: 6200,
            comment: "Classy look bhai, neat and sharp 😎",
            commentCount: 260,
        },
        {
            username: "jasmine_kaur",
            profilePhoto:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            time: "2d",
            isLiked: false,
            likeCount: 2100,
            comment: "Sweet and simple click, so cute 💗",
            commentCount: 110,
        },
        {
            username: "samar_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",
            time: "3w",
            isLiked: true,
            likeCount: 5800,
            comment: "Alpha vibes bro, killer energy 🔥",
            commentCount: 310,
        },
        {
            username: "aisha_m",
            profilePhoto:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            time: "7d",
            isLiked: false,
            likeCount: 2500,
            comment: "Elegant and natural, you look lovely ✨",
            commentCount: 130,
        },
        {
            username: "aryan_g",
            profilePhoto:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            time: "5m",
            isLiked: false,
            likeCount: 7100,
            comment: "Handsome bro, clean look 😎",
            commentCount: 340,
        },
        {
            username: "mitali_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
            time: "3d",
            isLiked: true,
            likeCount: 2900,
            comment: "Beautiful frame, natural glow ✨",
            commentCount: 160,
        },

        {
            username: "kabir_ahmed",
            profilePhoto:
                "https://images.unsplash.com/photo-1599972680486-1acb1358755a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            time: "11m",
            isLiked: false,
            likeCount: 6000,
            comment: "Attitude on point bro, fire 🔥",
            commentCount: 280,
        },
        {
            username: "neha_p",
            profilePhoto:
                "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            time: "2y",
            isLiked: true,
            likeCount: 8400,
            comment: "Pretty look, soft and graceful 😊",
            commentCount: 390,
        },
        {
            username: "yash_k",
            profilePhoto:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            time: "1w",
            isLiked: false,
            likeCount: 3400,
            comment: "Cool pose bhai, nice expression 😎",
            commentCount: 180,
        },
        {
            username: "pari_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            time: "6d",
            isLiked: true,
            likeCount: 4500,
            comment: "You look adorable here, love it 💗",
            commentCount: 210,
        },
        {
            username: "sandeep_m",
            profilePhoto:
                "https://images.unsplash.com/photo-1541980161-32fe8af73880?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
            time: "4m",
            isLiked: false,
            likeCount: 5200,
            comment: "Strong look bro, perfect shot 🔥",
            commentCount: 260,
        },
        {
            username: "zara_f",
            profilePhoto:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            time: "5m",
            isLiked: true,
            likeCount: 7800,
            comment: "Sundar lag rahe ho, soft smile 😊",
            commentCount: 340,
        },
        {
            username: "ranveer_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            time: "2m",
            isLiked: false,
            likeCount: 4300,
            comment: "Killer pose bro, fire energy 🔥",
            commentCount: 210,
        },
        {
            username: "simran_k",
            profilePhoto:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            time: "9d",
            isLiked: true,
            likeCount: 3900,
            comment: "Soft smile, golden hour queen ✨",
            commentCount: 190,
        },
        {
            username: "rohan_p",
            profilePhoto:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
            time: "3w",
            isLiked: false,
            likeCount: 6100,
            comment: "Nice one bro, clean background 😎",
            commentCount: 270,
        },
        {
            username: "lavanya_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            time: "12d",
            isLiked: false,
            likeCount: 3200,
            comment: "Beautiful and simple, very elegant ✨",
            commentCount: 150,
        },

        {
            username: "aditya_p",
            profilePhoto:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            time: "10m",
            isLiked: true,
            likeCount: 8800,
            comment: "Sharp styling bro, full power look 🔥",
            commentCount: 420,
        },
        {
            username: "hina_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
            time: "1m",
            isLiked: false,
            likeCount: 2800,
            comment: "Cute and aesthetic, perfect click 😊",
            commentCount: 130,
        },
        {
            username: "arvind_r",
            profilePhoto:
                "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
            time: "7d",
            isLiked: true,
            likeCount: 5400,
            comment: "Boss vibes bro, solid frame 💥",
            commentCount: 300,
        },
        {
            username: "mona_k",
            profilePhoto:
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
            time: "2d",
            isLiked: false,
            likeCount: 1900,
            comment: "Sweet and elegant, nice photo ✨",
            commentCount: 120,
        },
        {
            username: "farhan_a",
            profilePhoto:
                "https://plus.unsplash.com/premium_photo-1707932496423-1ee96181ade8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
            time: "1w",
            isLiked: false,
            likeCount: 3600,
            comment: "Solid pose bro, nice frame 😎",
            commentCount: 200,
        },
        {
            username: "tina_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            time: "3d",
            isLiked: true,
            likeCount: 2700,
            comment: "Beautiful smile, so refreshing 💗",
            commentCount: 150,
        },
        {
            username: "arif_rahman",
            profilePhoto:
                "https://plus.unsplash.com/premium_photo-1708274145714-0ba25df0cfd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
            time: "4w",
            isLiked: false,
            likeCount: 4100,
            comment: "Nice click bhai, lighting perfect 🔥",
            commentCount: 210,
        },
        {
            username: "kavita_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            time: "5m",
            isLiked: false,
            likeCount: 5200,
            comment: "Natural beauty and soft glow ✨",
            commentCount: 260,
        },
        {
            username: "samrat_p",
            profilePhoto:
                "https://images.unsplash.com/photo-1552058544-f2b08422138a",
            time: "6w",
            isLiked: true,
            likeCount: 7300,
            comment: "Fire bro, perfect styling 🔥",
            commentCount: 330,
        },
        {
            username: "mehak_s",
            profilePhoto:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
            time: "2d",
            isLiked: false,
            likeCount: 3000,
            comment: "Elegant and cute, very pretty 💗",
            commentCount: 160,
        },
    ];

    //Coments Section

    let comment = document.querySelector(".comments");

    let clutterForComments = "";

    comments.forEach((element) => {
        clutterForComments += `<div class="comment12">
                        <img
                            class="comment-img"
                            src="${element.profilePhoto}"
                            alt=""
                        />

                        <h2 class="name">${element.username}</h2>
                        <h3 class="lines">
                            ${element.comment}
                        </h3>
                        <h4 class="day">${element.time}</h4>
                        <div class="likes"><i class="ri-heart-3-line"></i></div>
                        <div class="buttomComment">
                            <div class="like-count">${element.likeCount} likes</div>
                            <div class="reply">Reply</div>
                        </div>
                    </div>`;
    });

    comment.innerHTML = clutterForComments;
}

let allReels = document.querySelector(".all-Reels");

function addData(params) {
    let clutter = "";
    reels.forEach((element, index) => {
        clutter += ` <div class="reel">
            <video autoplay loop ${element.isMuted ? 'muted' : ''} src="${
            element.video
        }"></video>
            <div id='${index}' class="mute">
            ${element.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
            </div>
            <div class="right">
                <div id="${index}" class="like">
                    <h6 class="love-icon icon">
                        ${
                            element.isLiked
                                ? '<i class="love ri-heart-3-fill"></i>'
                                : '<i class="ri-heart-3-line"></i>'
                        }
                    </h6>
                    <h4>${element.likeCount}</h4>
                </div>

                <div id="${index}" class="comment">
                    <h6 class="comment-icon icon">
                        <i class="ri-chat-1-line"></i>
                    </h6>
                    <h4>${element.commentCount}</h4>
                </div>

                <div class="share">
                    <h6 class="share-icon icon">
                        <i class="ri-share-forward-line"></i>
                    </h6>
                    <h4>${element.shareCount}</h4>
                </div>

                <div class="save">
                    <h6 class="save-icon icon">
                        <i class="ri-download-2-fill"></i>
                    </h6>
                </div>

                <div class="menu">
                    <h6 class="menu-icon icon">
                        <i class="ri-more-2-line"></i>
                    </h6>
                </div>
            </div>

            <div class="user">
                <img src="${element.userProfile}" alt="" />
                <h2>${element.username}</h2>
                <button id="${index}" class="follow">${
            element.isFollowed ? "Following" : "Follow"
        }</button>
            </div>

            <h3 class="caption">${element.caption}</h3>
        </div>`;
    });

    allReels.innerHTML = clutter;
}

addData();

allReels.addEventListener("click", function (event) {
    if (event.target.className === "like") {
        if (!reels[event.target.id].isLiked) {
            reels[event.target.id].likeCount++;
            reels[event.target.id].isLiked = true;
        } else {
            reels[event.target.id].likeCount--;
            reels[event.target.id].isLiked = false;
        }
        addData();
    }
    if (event.target.className === "follow") {
        if (!reels[event.target.id].isFollowed) {
            reels[event.target.id].isFollowed = true;
        } else {
            reels[event.target.id].isFollowed = false;
        }
        addData();
    }

const muteBtn = event.target.closest(".mute");

        if (muteBtn) {
        const index = muteBtn.id;
        reels[index].isMuted = !reels[index].isMuted;
        addData();
        return;
    }



    

    let backbttn = document.querySelector(".back");
    let allCommentsAfterClick = document.querySelector(".comments");

    let commentBox = event.target.closest(".comment");
    if (commentBox) {
        commentBox.style.background = "red";
        allComments();
        allCommentsAfterClick.style.display = "block";
        backbttn.style.display = "block";
        addData();
    }

    backbttn.addEventListener("click", () => {
        allCommentsAfterClick.style.display = "none";
        backbttn.style.display = "none";
        addData();
    });

    
});
