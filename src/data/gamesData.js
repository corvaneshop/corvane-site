import whispersImg from "../assets/games/whispers.png";
import feastOfSilenceImg from "../assets/games/feast-of-silence.png";
import fivehoursmissingImg from "../assets/games/five-hours-missing.png";


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
    {
        id: "five-hours-missing",
        title: "Five Hours Missing",
        image: fivehoursmissingImg,
        answer: "Dr. L. Moreau manipulated David’s mind.",

        description:
            "A psychological murder mystery set in Ravenwood County. A man wakes up covered in blood with no memory of the last five hours — and his ex-partner found dead miles away. Was it guilt, manipulation, or something even darker?",
        caseDetails: {
            setting: "Ravenwood County, USA",
            victim: "Emily Carver",
            summary:
                "At 7:12 A.M., David Mercer called 911, reporting 'something strange' and 'blood all over his hands.' Emily Carver’s body was discovered at her family’s lakehouse hours later. Mercer claims complete memory loss between 2:00 and 7:00 A.M., but GPS, fibers, and phone logs suggest otherwise.",
            clues: [
                "Blood on Mercer’s hands matches Emily’s DNA.",
                "Vehicle GPS shows a tampered route with missing data.",
                "A palm print at the cabin window matches neither Mercer nor Emily.",
                "Two glasses found — one with traces of Doxylamine sedative.",
                "Witness heard the phrase: 'She had to see it.'",
            ],
        },
        question:
            "What truly happened during the missing five hours — and who controlled the events of that night?",
        type: "choice",
        prompt:
            "After reviewing all the evidence, what do you believe truly happened during the missing five hours?",
        options: [
            "David Mercer killed Emily Carver.",
            "Dr. L. Moreau manipulated David’s mind.",
            "Emily Carver staged her own death.",
            "A third unknown person orchestrated the entire event."
        ],
        outcomes: {
            "David Mercer killed Emily Carver.": {
                verdictLabel: "You Followed the Obvious Trail",
                profile: {
                    label: "The Pragmatist",
                    description:
                        "You trust evidence over theory — blood, fingerprints, and motive are enough for you."
                },
                reasoning: [
                    "Mercer’s fingerprints and the victim’s blood were undeniable.",
                    "The glass fibers and timeline align with direct confrontation.",
                    "His fragmented memory could be repression rather than manipulation."
                ],
                contradictions: [
                    "GPS tampering suggests external interference.",
                    "No defensive wounds on Emily weaken the struggle theory."
                ],
                closing:
                    "You saw a crime of passion, not conspiracy — perhaps that’s how justice prefers it."
            },
            "Dr. L. Moreau manipulated David’s mind.": {
                verdictLabel: "You Chose the Psychological Path",
                profile: {
                    label: "The Analyst",
                    description:
                        "You see control and suggestion behind chaos — truth lies in manipulation, not memory."
                },
                reasoning: [
                    "Repeated hypnosis sessions tie directly to David’s blackout.",
                    "Voice interference at timestamp 14:34 supports tampering with consciousness.",
                    "Dr. Moreau’s name appears in both autopsy and therapy records — too convenient."
                ],
                contradictions: [
                    "No material gain or motive for Moreau is clearly established.",
                    "If she orchestrated it, why leave evidence pointing to herself?"
                ],
                closing:
                    "You believe the mind is the ultimate crime scene — and Dr. Moreau knew how to use it."
            },
            "Emily Carver staged her own death.": {
                verdictLabel: "You Saw Through the Stage",
                profile: {
                    label: "The Theorist",
                    description:
                        "You question everything — even death itself. Deception is just another form of control."
                },
                reasoning: [
                    "No soil or water sediment found on Emily’s skin implies she was moved postmortem.",
                    "Sedative dosage was non-lethal — perfect for simulating death.",
                    "Witness statement mentions movement after the supposed time of death."
                ],
                contradictions: [
                    "DNA and blood traces on Mercer were authentic.",
                    "No verified evidence Emily left the area alive."
                ],
                closing:
                    "You believe Emily wrote the ending of her own story — one final act of control."
            },
            "A third unknown person orchestrated the entire event.": {
                verdictLabel: "You Trusted the Gaps in the Story",
                profile: {
                    label: "The Skeptic",
                    description:
                        "You see patterns where others see coincidence — for you, absence of evidence is the biggest clue."
                },
                reasoning: [
                    "The palm print at the window didn’t match Mercer or Emily.",
                    "GPS edit detected via external cable input suggests tampering.",
                    "Witness heard the phrase 'She had to see it' — doesn’t match either main suspect’s dialogue."
                ],
                contradictions: [
                    "No known suspect fits the new profile.",
                    "Lack of physical evidence makes this theory circumstantial."
                ],
                closing:
                    "You believe a ghost in the system pulled the strings — and everyone else played their part unknowingly."
            }
        },
        fullSolutionText:
            "There is no confirmed truth in this case — only the fragments of memory and manipulation left behind. The real mystery is whether what you believe… makes you part of the story."
    }
];

export default gamesData;
