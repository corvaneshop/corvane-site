import whispersImg from "../assets/games/whispers.png";
import feastOfSilenceImg from "../assets/games/feast-of-silence.png";


const gamesData = [
    {
        id: "whispers-in-the-conservatory",
        title: "Whispers in the Conservatory",
        image: whispersImg,
        description:
            "A haunting mystery set in a secluded conservatory where music and obsession intertwine. Clara Benedict’s final melody hides the truth of her demise — and only a keen mind can unveil the name written between the notes.",
        caseDetails: {
            setting: "Hollow Creek Conservatory",
            victim: "Clara Benedict",
            summary:
                "Clara Benedict, a gifted pianist, was found lifeless beside the grand piano after her final recital. The room was locked from within, and only the faint echo of a haunting melody remained.",
            clues: [
                "A torn diary page mentioning 'admiration turned dangerous'.",
                "A music sheet annotated in unfamiliar handwriting.",
                "A missing key from the piano bench lock.",
                "Fingerprints found on Clara’s journal cover.",
            ],
        },
        question:
            "Who was responsible for Clara Benedict’s death, driven by obsession and unrequited admiration?",
        answer: "Oliver Trane",
        hint:
            "Pay attention to the diary entry and the music sheet annotations — admiration can turn into something darker.",
        motive:
            "Oliver Trane’s admiration for Clara Benedict evolved into an unhealthy obsession. When she discovered his invasion of her privacy and threatened to expose him, he acted out of desperation, believing that if she wouldn’t acknowledge him in life, she would in death.",
    }, {
        id: "the-feast-of-silence",
        title: "The Feast of Silence",
        image: feastOfSilenceImg,
        description:
            "A chilling Thanksgiving mystery set in a storm-battered mansion, where silence hides more than grief. As dawn breaks, one chair at the Harper family table remains empty — and a night of buried secrets begins to unravel.",
        caseDetails: {
            setting: "Harper Residence, Pine Hollow, Maine",
            victim: "Derek Harper",
            summary:
                "During a snowstorm Thanksgiving night, the Harper family’s annual dinner turns into tragedy. By morning, Derek Harper is found dead in Room 3B — no struggle, no marks, only silence. Each relative carries motive, resentment, and something left unsaid.",
            clues: [
                "A family photograph with Derek’s face scratched out.",
                "A pillowcase fiber consistent with suffocation.",
                "A half-eaten plate fragment with cranberry sauce near the hallway.",
                "A clock stopped at 2:37 A.M., aligning with the estimated time of death.",
                "A missed internal call to the victim’s phone moments before he died.",
            ],
        },
        question:
            "Who silenced Derek Harper that stormy Thanksgiving night — and why?",
        answer: "Noah Reed",
        hint:
            "Revisit the forensic report: fingerprints, the missed internal call, and who stood to ‘restore order’ in the house.",
        motive:
            "Noah Reed, burdened by years of manipulation and control under his uncle’s influence, confronted Derek after their heated midnight call. In an act driven by quiet defiance and emotional exhaustion, he smothered him while he slept — ending a cycle of control the only way he knew: through silence.",
    },
];

export default gamesData;
