export interface Artist {
  name: string;
  slug: string;
  year: number[];
  hometown?: string;
  bio?: string;
  instagram?: string;
  facebook?: string;
  photo?: string;
  headliner?: boolean;
}

export const headliners: Artist[] = [
  {
    name: "Jonathan Byrd",
    slug: "jonathan-byrd",
    year: [2024],
    bio: "Award-winning songwriter and fingerstyle guitarist. Two-night headliner for the inaugural 2024 Invitational at The Matthews Opera House.",
    photo: "/photos/jonathan-byrd.jpg",
    headliner: true,
  },
  {
    name: "Jami Lynn",
    slug: "jami-lynn",
    year: [2024],
    bio: "\"As a songwriter, it brought inspiration, camaraderie, and the overwhelmingly strange sense of being heard and understood among my peers and the incredible community that supports us.\"",
    photo: "/photos/jami-lynn.webp",
    headliner: true,
  },
  {
    name: "Andrea von Kampen",
    slug: "andrea-von-kampen",
    year: [2025],
    bio: "Nebraska-born folk artist whose atmospheric songwriting and luminous voice captivated the 2025 Friday night audience at The Matthews.",
    photo: "/photos/andrea-von-kampen.webp",
    headliner: true,
  },
  {
    name: "John Fullbright",
    slug: "john-fullbright",
    year: [2025],
    bio: "Grammy-nominated Oklahoma songwriter. Headlined the 2025 Saturday night showcase at The Matthews Opera House.",
    photo: "/photos/john-fullbright.jpg",
    headliner: true,
  },
];

export const artists2025: Artist[] = [
  { name: "Abbey Leach", slug: "abbey-leach", year: [2025], instagram: "abbeylleach", photo: "/photos/artists/abbey-leach.png" },
  { name: "Chris Graves", slug: "chris-graves", year: [2025], instagram: "iamchrisgraves", photo: "/photos/artists/chris-graves.png" },
  { name: "Clayton Ryan", slug: "clayton-ryan", year: [2024, 2025], instagram: "claytonrcryan", photo: "/photos/artists/clayton-ryan.jpeg" },
  { name: "Craig Winquist", slug: "craig-winquist", year: [2025], photo: "/photos/artists/craig-winquist.jpg" },
  { name: "Devon Sants", slug: "devon-sants", year: [2024, 2025], instagram: "devonsants", photo: "/photos/artists/devon-sants.jpg" },
  { name: "Emily Blair", slug: "emily-blair", year: [2025], instagram: "emilyblairmusic", photo: "/photos/artists/emily-blair.jpg" },
  { name: "Janice Gilbert", slug: "janice-gilbert", year: [2025], instagram: "janicegilbertmusic", photo: "/photos/artists/janice-gilbert.jpg" },
  { name: "Cody Neeb", slug: "cody-neeb", year: [2024, 2025], photo: "/photos/artists/cody-neeb.jpg" },
  { name: "Tommy Edwin", slug: "tommy-edwin", year: [2024, 2025], photo: "/photos/artists/tommy-edwin.png" },
  { name: "Heath Johnson", slug: "heath-johnson", year: [2024, 2025], instagram: "throughtheheath", photo: "/photos/artists/heath-johnson.png" },
  { name: "Laura Mills", slug: "laura-mills", year: [2025], photo: "/photos/artists/laura-mills.jpg" },
  { name: "Lawren Erickson", slug: "lawren-erickson", year: [2024, 2025], photo: "/photos/artists/lawren-erickson.jpg" },
  { name: "The Shiny Dimes", slug: "the-shiny-dimes", year: [2025], photo: "/photos/artists/the-shiny-dimes.jpg" },
  { name: "Frank Gregg", slug: "frank-gregg", year: [2024, 2025], photo: "/photos/artists/frank-gregg.png" },
  { name: "Harland Allen", slug: "harland-allen", year: [2025], instagram: "harlandallenmusic", photo: "/photos/artists/harland-allen.jpg" },
  { name: "Lacy Hotchkiss", slug: "lacy-hotchkiss", year: [2024, 2025], instagram: "lacynelsonmusic", photo: "/photos/artists/lacy-hotchkiss.png" },
  { name: "Sarah Carper", slug: "sarah-carper", year: [2024, 2025], instagram: "sarah_carper", photo: "/photos/artists/sarah-carper.jpg" },
  { name: "Anthony Speiser", slug: "anthony-speiser", year: [2025], instagram: "stonyspidermusic", photo: "/photos/artists/anthony-speiser.png" },
];

export const artists2024Only: Artist[] = [
  { name: "Anna Robins", slug: "anna-robins", year: [2024] },
  { name: "Bill Falcon", slug: "bill-falcon", year: [2024] },
  { name: "Bubba Startz", slug: "bubba-startz", year: [2024] },
  { name: "Cody Henson Hullinger", slug: "cody-henson-hullinger", year: [2024] },
  { name: "J Shogren", slug: "j-shogren", year: [2024] },
  { name: "Jackson Holte", slug: "jackson-holte", year: [2024] },
  { name: "JJ Kent", slug: "jj-kent", year: [2024] },
  { name: "Lonesome Jones", slug: "lonesome-jones", year: [2024] },
  { name: "Lucas Olson", slug: "lucas-olson", year: [2024] },
  { name: "Mike Endrud", slug: "mike-endrud", year: [2024] },
  { name: "Nevada Ellison", slug: "nevada-ellison", year: [2024] },
  { name: "Randy Burghardt", slug: "randy-burghardt", year: [2024] },
  { name: "Ryan Little Eagle", slug: "ryan-little-eagle", year: [2024] },
  { name: "Scott Simpson", slug: "scott-simpson", year: [2024] },
  { name: "Tanner Johns", slug: "tanner-johns", year: [2024] },
  { name: "Wayne P. Baye", slug: "wayne-p-baye", year: [2024] },
];

export const venues = [
  {
    name: "The Matthews Opera House & Arts Center",
    description: "Historic downtown venue for evening headliner showcases. Every participating songwriter performs one original song before the headliner takes the stage.",
    type: "headliner" as const,
  },
  {
    name: "Blackbird Espresso",
    description: "Intimate coffee shop setting for morning and early afternoon songwriter rounds.",
    type: "round" as const,
  },
  {
    name: "Studio 621",
    description: "Creative studio space hosting afternoon listening-room rounds.",
    type: "round" as const,
  },
  {
    name: "Spearfish Creek Wine Bar",
    description: "Cozy wine bar with an atmosphere perfect for acoustic storytelling.",
    type: "round" as const,
  },
  {
    name: "False Bottom Bar",
    description: "Local craft beer spot featuring lively afternoon rounds.",
    type: "round" as const,
  },
  {
    name: "Spearfish Public House",
    description: "Downtown gathering place for late afternoon songwriter sessions.",
    type: "round" as const,
  },
];
