const reels = [
    {
        username: "arjun_mehta",
        likeCount: 1430,
        isLiked: false,
        commentCount: 120,
        shareCount: 45,
        caption: "Morning vibes at the lake",
        video: "./Asset-video/Video-01.mp4",
        userProfile:
            "https://images.unsplash.com/photo-1603415526960-f7e0328f2d1d",
        isShare: false,
        isFollowed: true,
    },
    {
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

let clutter=''
reels.forEach(element => {
    clutter+=`<div class="reel">
                    <video autoplay loop muted src="${element.video}"></video>

                    <div class="right">
                        <div class="love-icon icon">
                            <i class="ri-heart-3-line"></i>
                            <h4>${element.likeCount}</h4>
                        </div>
                        <div class="comment-icon icon">
                            <i class="ri-chat-1-line"></i>
                            <h4>${element.commentCount}</h4>
                        </div>
                        <div class="share-icon icon">
                            <i class="ri-share-forward-line"></i>
                            <h4>${element.shareCount}</h4>
                        </div>
                        <div class="save-icon icon">
                            <i class="ri-download-2-fill"></i>
                        </div>
                        <div class="menu-icon icon">
                            <i class="ri-more-2-line"></i>
                        </div>
                    </div>

                    <div class="user">
                        <img
                            src="${element.userProfile}"
                            alt=""
                        />
                        <h2>${element.username}</h2>
                        <button>Follow</button>
                    </div>
                </div>`
});

let allReels = document.querySelector('.all-Reels');
allReels.innerHTML=clutter;
