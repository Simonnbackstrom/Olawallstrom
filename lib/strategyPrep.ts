/*
 * Short self-assessment before a strategy call, taken word for word from
 * Ola's "Tillväxthjulet – Självskattning" PDF: two statements per spoke,
 * scored 0, 1 or 2 like in the PDF, with each spoke's Gammalt/Nytt.
 */

export const PREP_PATH = "/infor-strategisamtalet";

/* Ola's video (1080p mp4 in public/videos, made from the original .mov). */
export const PREP_VIDEO_SRC = "/videos/infor-motet.mp4";

export const SCALE = [{ value: "0" }, { value: "1" }, { value: "2" }] as const;

export type Spoke = {
  id: string;
  n: number;
  title: string;
  old: string;
  neww: string;
  statements: string[];
};

export const SPOKES: Spoke[] = [
  {
    id: "mental",
    n: 1,
    title: "Mental klarhet",
    old: "”Jag sätter större mål och kör hårdare.”",
    neww: "”Jag vet vad jag egentligen vill, och bygger bolaget efter det.”",
    statements: [
      "Jag kan på en minut beskriva vart bolaget ska om tre år, och varför det är viktigt för mig.",
      "Jag har regelbundet tid att tänka strategiskt, bortom nästa vecka.",
    ],
  },
  {
    id: "ledarskap",
    n: 2,
    title: "Ledarskap",
    old: "”Det går fortast om jag gör det själv.”",
    neww: "”Mitt jobb är att göra andra bättre än mig.”",
    statements: [
      "Bolaget fungerar i två veckor utan att jag är nåbar.",
      "Färre än hälften av besluten i vardagen går via mig.",
    ],
  },
  {
    id: "affar",
    n: 3,
    title: "Affärsutveckling",
    old: "”Vi säljer det vi alltid har sålt, till det pris vi alltid har tagit.”",
    neww: "”Vi säljer det värde vi faktiskt skapar, till dem som kan betala för det.”",
    statements: [
      "Vi vet exakt vad vi gör med lätthet som kunderna värderar högst.",
      "Vi säljer till personer som har både mandat och budget att köpa.",
    ],
  },
  {
    id: "forsaljning",
    n: 4,
    title: "Försäljning",
    old: "”Vi måste hitta fler nya kunder.”",
    neww: "”Vi börjar där förtroendet redan finns.”",
    statements: [
      "Vi har ett jämnt inflöde av förfrågningar, även när jag inte själv jagar.",
      "Våra kunder rekommenderar oss utan att vi behöver be om det.",
    ],
  },
];

export const MAX_PER_SPOKE = 4;
