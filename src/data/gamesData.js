import whispersImg from "../assets/games/whispers.png";
import feastOfSilenceImg from "../assets/games/feast-of-silence.png";


const gamesData = [
    {
        id: "whispers-in-the-conservatory",
        title: "Whispers in the Conservatory",
        image: whispersImg,
        description:
            "A haunting locked-room mystery set in Hollow Creek Conservatory, where music, rivalry, and obsession compose a deadly symphony. Clara Venedict’s final sonata was never meant to end — but someone ensured the silence would last forever.",
        caseDetails: {
            setting: "Hollow Creek Conservatory",
            victim: "Clara Venedict",
            summary:
                "Renowned violinist Clara Venedict was found dead inside the practice room of Hollow Creek Conservatory. The door was locked from the inside, and the only open exit — a west-facing window — revealed faint muddy footprints leading outward. Her hand clutched a torn sheet of music marked with strange symbols.",
            clues: [
                "An audio recording ending with Clara whispering 'Del—' before the impact.",
                "A deleted 7:53 P.M. call log made after the estimated time of death.",
                "A baton handle trace found to contain mixed DNA residue.",
                "A partially recovered message from Sebastian: 'No one will hear a note out of place again.'"
            ]
        },
        question:
            "Was Oliver Del-Trane truly responsible for Clara’s death — or was he framed by someone determined to silence the final sonata?",
        answer:
            "Sebastian Mahr",
        hint:
            "Focus on the timeline — the 7:53 call occurs after Clara’s death. Who still had access to the conservatory then?",
        motive:
            "Sebastian Mahr feared Clara’s new composition would expose him — she planned to reveal his plagiarism in 'The Final Sonata.' When words failed, he chose silence. Yet he staged the scene to implicate Oliver, leaving investigators questioning every note of truth."
    },
    {
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
