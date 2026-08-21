export interface Artist {
  name: string;
  slug: string;
  year: number[];
  hometown?: string;
  bio?: string;
  fullBio?: string;
  instrument?: string;
  influences?: string;
  signatureSong?: string;
  firstPerformance?: string;
  biggestAchievement?: string;
  dreamCollaboration?: string;
  favoriteLyric?: string;
  funFact?: string;
  instagram?: string;
  facebook?: string;
  /** Full URL. The intake form has always asked for this; there was nowhere to
   *  put it until 2026-08-06, so earlier artists' sites were silently dropped. */
  website?: string;
  photo?: string;
  photoPosition?: string;
  photoCredit?: string;
  headliner?: boolean;
}

export const headliners: Artist[] = [
  {
    name: "Jeffrey Foucault",
    slug: "jeffrey-foucault",
    year: [2026],
    hometown: "Native Midwest",
    bio: "One of the most distinctive voices in American music — \"stark, literate songs that are as wide open as the landscape of his native Midwest\" (The New Yorker). Headlining the 2026 Invitational at The Matthews Opera House on Saturday, September 26.",
    fullBio: "In two decades on the road, Jeffrey Foucault has become one of the most distinctive voices in American music, refining a sound instantly recognizable for its simplicity and emotional power.\nAcross a string of critically acclaimed studio albums — \"stark, literate songs that are as wide open as the landscape of his native Midwest\" (The New Yorker), \"beat-up troubadour folk whittled to dolorous perfection\" (Uncut) — he has built a brick-and-mortar international touring career and a devoted following, one that includes luminaries like Van Dyke Parks, Greil Marcus, and Don Henley.\nThe Universal Fire (Fluff & Gravy, 2024), his first album of entirely new material since 2018, was cut live in one room with his all-star band augmented by members of Calexico and Bon Iver: both a working wake for his late friend and drummer Billy Conway and a meditation on the nature of beauty, artifact, and loss.",
    instrument: "Guitar / Vocals",
    signatureSong: "The Universal Fire",
    website: "https://jeffreyfoucault.com",
    photo: "/photos/jeffrey-foucault.jpg",
    photoPosition: "center 20%",
    photoCredit: "Joe Navas",
    headliner: true,
  },
  {
    name: "Jonathan Byrd",
    slug: "jonathan-byrd",
    year: [2024],
    bio: "A seventh-generation North Carolinian who writes narrative songs about love, life and death in America. Two-night headliner for the inaugural 2024 Invitational at The Matthews Opera House.",
    fullBio:
      "A seventh-generation North Carolinian, a preacher's kid and a Gulf War veteran, Jonathan Byrd writes narrative songs about love, life and death in America and plays them in a range of traditional acoustic styles built on flatpicking.\nHe won the New Folk competition at the Kerrville Folk Festival in 2003 and outsold the main stage acts there that year. More than a dozen albums and two decades of touring later, his plain, working-class songs have become campfire standards, picked up along the way by players like Sam Bush and Tim O'Brien.\nCackalack, written as a tribute to his family's seven generations in the state, reached number one on the Roots Music Report folk chart in 2011.",
    hometown: "Fayetteville, NC",
    instrument: "Acoustic guitar / Vocals",
    website: "https://jonathanbyrd.com",
    photo: "/photos/jonathan-byrd.jpg",
    headliner: true,
  },
  {
    name: "Jami Lynn",
    slug: "jami-lynn",
    year: [2024],
    // Her `bio` used to be her testimonial about the festival — the same quote
    // the home page already runs. It read as praise for us on a page that is
    // supposed to be about her.
    bio: "Folk, bluegrass and jazz singer from eastern South Dakota, now based in Spearfish. Two-night headliner for the inaugural 2024 Invitational at The Matthews Opera House.",
    fullBio:
      "Jami Lynn started performing folk and bluegrass at thirteen, after her grandfather pushed her from the audience onto the stage, and was writing her own songs by sixteen.\nShe studied vocal performance at the University of South Dakota, where a senior thesis on the early folk music of the upper Midwest turned into her first solo record, Sodbusters — later taken into the Smithsonian's Shared Harmonies Project. Fall Is A Good Time To Die, her first album of all-original material, landed on The Telegraph's country albums of the year.\nShe has taken high honours at the Rocky Mountain Folks Festival songwriting showcase and shared stages with Spider John Koerner, Gillian Welch, The Wood Brothers, Charlie Parr and Trampled by Turtles. In 2018 she recorded Sparse, a jazz record made with bassist Andrew Reinartz. She lives and writes in Spearfish.",
    hometown: "Eastern South Dakota (now Spearfish)",
    instrument: "Guitar / Vocals",
    website: "https://jamilynnsd.com",
    photo: "/photos/jami-lynn.webp",
    headliner: true,
  },
  {
    name: "Andrea von Kampen",
    slug: "andrea-von-kampen",
    year: [2025],
    bio: "Nebraska folk singer and fingerstyle guitarist, a 2016 NPR Tiny Desk Contest top-ten finalist. Captivated the 2025 Friday night audience at The Matthews.",
    fullBio:
      "Andrea von Kampen grew up singing in church and school choirs in Seward, Nebraska, studied music at Concordia University Nebraska, and built a career from there rather than leaving for a coast — she still lives and works in Lincoln.\nNational attention arrived in 2016, when her entry in NPR's Tiny Desk Contest, \"Let Me Down Easy,\" finished in the top ten. Records have come steadily since: the Another Day EP in 2015, Old Country in 2019, That Spell for Fantasy Records in 2021, the film soundtrack A Chance Encounter in 2022, and Sister Moon in 2024.\nHer fingerstyle guitar and unhurried delivery have drawn tens of millions of streams without ever pushing for them.",
    hometown: "Lincoln, NE (raised in Seward)",
    instrument: "Acoustic guitar / Vocals",
    signatureSong: "Let Me Down Easy",
    website: "https://andreavonkampen.com",
    photo: "/photos/andrea-von-kampen.webp",
    headliner: true,
  },
  {
    name: "John Fullbright",
    slug: "john-fullbright",
    year: [2025],
    bio: "Grammy-nominated songwriter from Okemah, Oklahoma — Woody Guthrie's town. Headlined the 2025 Saturday night showcase at The Matthews Opera House.",
    fullBio:
      "John Fullbright was born on a farm outside Okemah, Oklahoma, which is also Woody Guthrie's town — a fact that has trailed him his entire career, fairly or not.\nHe started on piano at five and was playing folk festivals by high school, including the Woody Guthrie Folk Festival in his own backyard. He was a founding member of the Turnpike Troubadours and played alongside Mike McClure before going out under his own name.\nHis first studio album, From the Ground Up, was nominated for Best Americana Album at the 2013 Grammys, when he was twenty-four. He had taken the ASCAP Foundation's Harold Adamson Lyric Award the year before, and the Oklahoma Music Hall of Fame's Rising Star award followed in 2014. Songs came out in 2014; after an eight-year silence, The Liar in 2022.",
    hometown: "Okemah, OK",
    instrument: "Piano, guitar, harmonica / Vocals",
    website: "https://johnfullbrightmusic.com",
    photo: "/photos/john-fullbright.jpg",
    photoPosition: "center 20%",
    headliner: true,
  },
];

export const profiledArtists: Artist[] = [
  {
    name: "Abbey Leach",
    slug: "abbey-leach",
    year: [2025, 2026],
    instagram: "abbeylleach",
    facebook: "AbbeyLeachMusic",
    photo: "/photos/artists/abbey-leach.png",
    hometown: "Boise, ID (now based in the Black Hills)",
    fullBio: "Abbey Leach is a singer-songwriter who recently relocated from Boise, Idaho, to the Black Hills, where she's quickly becoming a familiar face on local stages. Rooted in the tradition of American folk music, Abbey draws inspiration from icons like Joan Baez, Bob Dylan, and Paul Simon, blending their timeless influence with a modern lyrical edge. A storyteller at heart, her songs are deeply personal snapshots of life, love, and self-discovery. This past summer, Abbey has performed everything from intimate solo sets to high-energy full band shows, showcasing her versatility and presence as an artist. She is currently recording her debut album, promising a collection of songs that reflect her voice — genuine, heartfelt, and unafraid to share the truth of her experiences.",
    instrument: "2020 Epiphone Dove",
    influences: "Bob Dylan, Joan Baez, Paul Simon",
    signatureSong: "The Last Time I Saw St. Peter",
    firstPerformance: "Guitar recital in a bar in Star, Idaho, at age 8",
    biggestAchievement: "Growth as a songwriter over the past few years, with the best achievements still ahead.",
    dreamCollaboration: "Singing with Joan Baez (past); opening for Stella Prince or Sierra Ferrell (present)",
    favoriteLyric: "And with each season passing, the buildings are collapsing, and soon they'll be only pastures where the cattle gaily graze.",
    funFact: "She has a deaf dog — something she finds ironic since both she and her partner are musicians.",
  },
  {
    name: "Chris Graves",
    slug: "chris-graves",
    // 2024 added on Heath's correction 2026-08-07 — he played the inaugural and
    // the record had him starting in 2025.
    year: [2024, 2025, 2026],
    instagram: "iamchrisgraves",
    photo: "/photos/artists/chris-graves.png",
    hometown: "Sturgis, SD (now based in Rapid City)",
    fullBio: "Chris Graves is a singer-songwriter born and raised in Sturgis, South Dakota, with strong ties to Spearfish and now based in Rapid City. Known for his raw honesty and driving guitar style, Chris blends influences like Dave Grohl and Medium Build into songs that are both confessional and powerful.",
    instrument: "1990s Martin HD-28",
    influences: "Dave Grohl, Medium Build",
    signatureSong: "All My Friends",
    firstPerformance: "Flanagan's Irish Pub (now the Public House), Spearfish, SD",
    biggestAchievement: "Making a living primarily from original music",
    dreamCollaboration: "Writing a song with Dave Grohl or singing with Gary Clark Jr.",
    favoriteLyric: "We've all got mistakes I know, I've got a few / Was never good at letting people in, I just let 'em pass through.",
    funFact: "He finally decided he likes Mexican food more than Italian.",
  },
  {
    name: "Clayton Ryan",
    slug: "clayton-ryan",
    year: [2024, 2025],
    instagram: "claytonrcryan",
    facebook: "claytonryanmusic",
    photo: "/photos/artists/clayton-ryan.jpeg",
    hometown: "Rapid City, SD (by way of Winterset, IA)",
    fullBio: "Clayton Ryan is an alternative country-ish singer who has called the Midwest home for much of his life, building his craft on stages from Iowa to South Dakota and now Minnesota. His debut album Ghost Town exceeded 100,000 streams, with the title track featured on The Current's \"Top 89 Tracks of 2024.\" He performed at Whiskey Jam in Nashville, earning one of only a handful of encores in the showcase's 1000+ show history. Since 2024, Clayton has toured 75+ dates while documenting his journey through YouTube series \"With The Wild Man.\"",
    instrument: "A well-worn Taylor that sounds like a Martin",
    influences: "Slaid Cleaves, Chris Whitley, Tanya Tucker, Imagine Dragons",
    signatureSong: "Ghost Town",
    firstPerformance: "Various stages and dive bars across Iowa and South Dakota",
    biggestAchievement: "Ghost Town surpassing 100,000 streams; \"Top 89 Tracks of 2024\"",
    dreamCollaboration: "Lainey Wilson",
    favoriteLyric: "\"Yeah\" (sung in an Eddie Vedder voice)",
    funFact: "His right leg is longer than his left.",
  },
  {
    name: "Craig Winquist",
    slug: "craig-winquist",
    year: [2025, 2026],
    photo: "/photos/artists/craig-winquist.jpg",
    hometown: "Canton, SD",
    fullBio: "Craig Winquist is a songwriter from Canton, South Dakota whose career reflects a deep love for melody and story. He spent eight years in Nashville writing songs and has had more than thirty songs recorded by artists worldwide, with some featured on television. A career highlight was performing at the legendary Bluebird Cafe. He continues to write and perform while raising his family in South Dakota as a cattle and sheep rancher.",
    instrument: 'Alvarez — "Irregular"',
    influences: "The Beatles, Eagles, Bob McDill, Jeffrey Steele",
    signatureSong: "American",
    firstPerformance: "Early years in Alcester, SD; career highlights include playing the Bluebird Cafe in Nashville",
    biggestAchievement: "Performing at the Bluebird Cafe and having 30+ songs recorded worldwide",
    dreamCollaboration: "Garth Brooks",
    favoriteLyric: "I'm a rock at the top of a waterfall, baby, just waitin' there to move. You're the current rushing by and after some time you finally turned me loose.",
    funFact: "Craig and his family raise cattle and sheep in South Dakota.",
  },
  {
    name: "Devon Sants",
    slug: "devon-sants",
    year: [2024, 2025, 2026],
    instagram: "devonsants",
    facebook: "devonsants",
    photo: "/photos/artists/devon-sants.jpg",
    hometown: "Pueblo, CO",
    fullBio: "Devon Sants is an independent Americana storyteller from Pueblo, Colorado whose songs go back to the roots of storytelling. A proud father whose music draws from life experience, Devon contributed to the Life Is a Joke; A Tribute to Our Amigo compilation album.",
    instrument: "Taylor Grand Auditorium 524",
    influences: "Johnny Cash, KALEO, Amigo the Devil, Justin Furstenfeld (Blue October)",
    signatureSong: "I'm Not a Hero",
    firstPerformance: "JMichael's Union Avenue Pub, Pueblo, CO",
    biggestAchievement: "Contributing to Life Is a Joke; A Tribute to Our Amigo compilation album",
    dreamCollaboration: "Tyler Childers",
    funFact: "Proud father.",
  },
  {
    name: "Emily Blair",
    slug: "emily-blair",
    year: [2025],
    instagram: "emilyblairmusic",
    photo: "/photos/artists/emily-blair.jpg",
    hometown: "Spearfish, SD",
    fullBio: "Emily Blair is a singer-songwriter from Spearfish, South Dakota who has returned home, bringing with her a voice shaped by both travel and the landscapes of the desert southwest. She performs with Jenna Talbett in harmony groups and with Chris Cady and Jake Jackson in The Black Asters. Beyond music, she is a ceramic artist who recently opened Spearfish Clayworks pottery studio. She is currently recording her first solo album.",
    instrument: "Guitar",
    influences: "Cat Clyde, Lady Lamb, Fiona Apple, Jenna Talbett",
    signatureSong: "Ghost Town",
    firstPerformance: "A tiny juice shack in Hale'ewa, Hawai'i",
    biggestAchievement: "Recording her first solo album",
    dreamCollaboration: "Writing a song with her dad",
    funFact: "She once hitch-hiked an airplane ride.",
  },
  {
    name: "Janice Gilbert",
    slug: "janice-gilbert",
    year: [2025, 2026],
    instagram: "janicegilbertmusic",
    facebook: "janicegilbertmusic",
    photo: "/photos/artists/janice-gilbert.jpg",
    hometown: "Miller, SD",
    fullBio: "Janice Gilbert is an award-winning songwriter, performer, and music educator from rural South Dakota. She began singing in church and community settings, winning the 2004 Dakota Star Talent Search at the South Dakota State Fair. In 2006, she relocated to Nashville, teaching music and collaborating with songwriters while performing at venues like the Bluebird Cafe. In 2012, she won the Bluebird Cafe's 30th Anniversary Songwriting Contest. After releasing three Nashville albums, she returned to South Dakota in 2013 and continues performing regionally with original music blending Midwest storytelling with contemporary country influences.",
    instrument: "Piano / Guitar",
    influences: "Barry Dean, Diane Warren, Don Henry, Chris Wallen",
    signatureSong: "She Can Haul",
    firstPerformance: "SDSU's talent show Cavorts as a freshman in college",
    biggestAchievement: "Writing and releasing her own music independently; winning the Bluebird Cafe's 30th Anniversary Songwriting Contest",
    dreamCollaboration: "Writing a song with Trisha Yearwood",
    favoriteLyric: "Dancing in the July snow falling down from the Cottonwood trees",
    funFact: "She performs the National Anthem at sporting events, including appearances with the Chicago White Sox and Minnesota Twins.",
  },
  {
    name: "Cody Neeb",
    slug: "cody-neeb",
    year: [2024, 2025, 2026],
    photo: "/photos/artists/cody-neeb.jpg",
    hometown: "Indianapolis, IN",
    fullBio: "Cody Neeb is a pianist and songwriter based in Indianapolis with ties to the Black Hills. With over 20 years of piano experience, he creates songs that blend wit, heart, and honesty. His work ranges from humorous parenting compositions to fan favorites. He describes his greatest achievement as \"Stickin' with it for this long.\"",
    instrument: "Piano (Korg SV-1)",
    influences: "The Beatles, David Bowie, Harry Nilsson",
    signatureSong: "Whiskey Business",
    firstPerformance: "Le Poisson Rouge, New York City",
    biggestAchievement: "Stickin' with it for this long",
    dreamCollaboration: "Prince",
    funFact: "Self-identifies as an \"egg boy.\"",
  },
  {
    name: "Tommy Edwin",
    slug: "tommy-edwin",
    year: [2024, 2025],
    photo: "/photos/artists/tommy-edwin.png",
    hometown: "Brookings, SD",
    fullBio: "Tommy Edwin is a South Dakota-based singer-songwriter whose work draws inspiration from classic songwriters of the 1960s-70s era. His compositions span multiple styles including rockers, love ballads, and old-time styles, unified by narrative depth. He was raised as a military dependent across three foreign countries before age 18 — experiences reflected in his songwriting. He released his debut album Fade to Memory in 2022.",
    instrument: "Gibson J-45 (2014)",
    influences: "James Taylor, Bob Dylan, Paul McCartney, Jeff Tweedy",
    signatureSong: "She's Moving On",
    firstPerformance: "Nick's Hamburger Shop Summer Concert Series (2016)",
    biggestAchievement: "Released debut album Fade to Memory in 2022",
    dreamCollaboration: "Willie Nelson performing and recording his song Phoenix",
    favoriteLyric: "The sun was high, but bullets rained down.",
    funFact: "He's a grandfather and self-described \"mac & cheese expert.\"",
  },
  {
    name: "Heath Johnson",
    slug: "heath-johnson",
    year: [2024, 2025, 2026],
    instagram: "throughtheheath",
    facebook: "heathjohnsonmusic",
    photo: "/photos/artists/heath-johnson.png",
    hometown: "Spearfish, SD",
    fullBio: "Heath Johnson is an Americana acoustic artist from Spearfish, South Dakota who has been writing songs since 2009. He won the American Songwriter Lyric Contest in 2015 and performs a mix of original compositions and covers tailored to each audience. His performances have included shared bills with established artists like Dwight Yoakam and Colter Wall, alongside founding Queen City Songwriters, a nonprofit supporting local and regional songwriters.",
    instrument: "2016 Gibson J-15",
    influences: "John Prine, Peter Bradley Adams, Parker Millsap, Blaze Foley",
    signatureSong: "Stuck in South Dakota",
    firstPerformance: "Flanagan's Irish Pub, Spearfish, SD",
    biggestAchievement: "Having my songs requested by Gary",
    dreamCollaboration: "Writing a song with Blaze Foley",
    funFact: "Father of 5 children.",
  },
  {
    name: "Laura Mills",
    slug: "laura-mills",
    year: [2025, 2026],
    facebook: "lauramillsmusic",
    photo: "/photos/artists/laura-mills.jpg",
    hometown: "Rapid City, SD",
    fullBio: "Laura Mills is a singer-songwriter from Rapid City, SD, blending folk, indie, blues, and pop. Her work explores both the beauty and pain of life, always with authenticity, aiming to connect people through shared experiences. She received the South Dakota Transcendent Musicians Grant in 2024 to record her single Tempe.",
    instrument: "2012 Gibson L-200",
    influences: "Joni Mitchell, Carole King, Sara Jarosz, Deb Talan",
    signatureSong: "It Could Be Now",
    firstPerformance: "House show in Laramie, WY",
    biggestAchievement: "Receiving the South Dakota Transcendent Musicians Grant in 2024",
    dreamCollaboration: "Carole King",
    funFact: "When not performing, she enjoys hiking and caring for her black tabby cat named Lunchmeat.",
  },
  {
    name: "Lawren Erickson",
    slug: "lawren-erickson",
    year: [2024, 2025, 2026],
    photo: "/photos/artists/lawren-erickson.jpg",
    hometown: "Rapid City, SD",
    fullBio: "Lawren Erickson is a Rapid City-based songwriter and performer whose career stretches back to his teenage years. He started guitar at 12, performed in bars and Las Vegas venues, majored in music in college, and has released two albums of original material featuring melodic and lyrical work.",
    instrument: "1965 Dolphin's Melody Maker",
    influences: "The Beatles, Seals and Crofts, Loggins and Messina, Buffalo Springfield",
    signatureSong: "Night Breezes",
    firstPerformance: "Vale Volunteer Fire Department New Year's Eve dance (performed during a near blizzard to a nearly empty room)",
    biggestAchievement: "Recording and releasing two albums of original songs",
    dreamCollaboration: "Sheryl Crow",
    favoriteLyric: "...till the night breezes blow... and long shadows start fall",
    funFact: "He has massively huge kneecaps.",
  },
  {
    name: "The Shiny Dimes",
    slug: "the-shiny-dimes",
    year: [2025],
    photo: "/photos/artists/the-shiny-dimes.jpg",
    hometown: "Spearfish, SD / Rapid City, SD",
    fullBio: "Allen Brown Woodard and Patrick Roberts have blended decades of musical experience into a partnership built on melody, grit, and collaboration. Allen hails from Montana and Seattle, now residing in Spearfish — he picked up guitar at age eight after watching the Beatles on The Ed Sullivan Show and has written over 300 songs. Patrick is from Rapid City, grew up in a musical household, and fronted his band Flannel for 15+ years before this collaboration.",
    instrument: "Gibson Custom Shop/Murphy Lab J-45 Reissue, 1931 Martin 00-17",
    influences: "The Beatles, The Kinks, Pixies, Townes Van Zandt, Death Cab for Cutie, Nirvana, Radiohead",
    biggestAchievement: "Building their co-writing partnership and first band project",
  },
  {
    name: "Frank Gregg",
    slug: "frank-gregg",
    year: [2024, 2025],
    photo: "/photos/artists/frank-gregg.png",
    hometown: "Batesville, OH (now in Edgemont, SD)",
    fullBio: "Frank Gregg is a singer-songwriter and guitarist who blends country, folk, and bluegrass. Raised on these genres in Appalachia, Frank has released six albums with Deadwood as his latest. One of his compositions is currently in radio rotation by the Western duo Ramblin' Rangers. He performs across the U.S. and his music streams on Spotify, YouTube, and iTunes. Outside music, he pursues woodworking, solar energy experimentation, and amateur radio operations.",
    instrument: "1995 Martin D-40",
    influences: "Tom T. Hall, Norman Blake, Willie Nelson, John Prine",
    signatureSong: "Indian Paintbrush",
    firstPerformance: "Part of a trio called \"Gemini\" while stationed in the Azores",
    biggestAchievement: "Six released albums; song recorded and in rotation by the Ramblin' Rangers",
    dreamCollaboration: "Hank Williams",
    favoriteLyric: "If God saw fit to send me back I'd take it like a man and I'd lay it down and let it ride and do it all again.",
    funFact: "Composed six songs in seven days; loves Mexican food and solar energy experimentation.",
  },
  {
    name: "Harland Allen",
    slug: "harland-allen",
    year: [2025],
    instagram: "harlandallenmusic",
    facebook: "Harlandallenmusic",
    photo: "/photos/artists/harland-allen.jpg",
    hometown: "Upton, WY",
    fullBio: "Harland Allen is a singer-songwriter from Upton, Wyoming with a career spanning more than four decades. His music blends unpretentious lyrics, mellow vocals, and a classic Americana style. Known for his baritone voice and unique guitar style, he has been performing since 1977.",
    instrument: "1977 Guild D-25M",
    influences: "Hank Williams, Cat Stevens, James Taylor",
    signatureSong: "Dear Child",
    firstPerformance: "1977",
    biggestAchievement: "His original song \"Dear Child\" gained international radio play and was recognized as an inspirational song of the month on KCMR radio",
    dreamCollaboration: "Cat Stevens",
    funFact: "For the past 13 years, has appeared in state and local commercials and five short films.",
  },
  {
    name: "Lacy Hotchkiss",
    slug: "lacy-hotchkiss",
    year: [2024, 2025, 2026],
    instagram: "lacynelsonmusic",
    facebook: "lacynelsonmusic",
    photo: "/photos/artists/lacy-hotchkiss.png",
    hometown: "Ten Sleep, WY",
    fullBio: "Lacy (Nelson) Hotchkiss is an Americana artist with western roots — a mom, wife, and songwriter based in Wyoming cattle country. She has performed across the West and is part of her local worship team. In 2020, she won the Queen City Songwriting Contest and released her second album, Old Fashioned, in 2021.",
    instrument: "Martin D15 (2009)",
    influences: "Miranda Lambert, Kacey Musgraves, Lee Ann Womack",
    signatureSong: "Old Fashioned",
    firstPerformance: "Ten Sleep Brewery",
    biggestAchievement: "Writing, recording, releasing, and performing two full albums of original songs",
    dreamCollaboration: "James Taylor",
    favoriteLyric: "Let your hair grow long, and your beard grow wild, like the night that we first met...",
    funFact: "She enjoys baking and uses buttermilk as her secret ingredient.",
  },
  {
    name: "Sarah Carper",
    slug: "sarah-carper",
    year: [2024, 2025, 2026],
    instagram: "sarah_carper",
    facebook: "sarahcarpermusic",
    photo: "/photos/artists/sarah-carper.jpg",
    hometown: "Moorcroft, WY",
    fullBio: "Sarah Carper hails from Moorcroft, Wyoming, near Devils Tower, and currently resides in the Black Hills. Raised in a musical family attending country dances and performing with her family's band, she developed an honest, plainspoken songwriting approach. Her country-leaning songs emphasize clear melodies and acoustic arrangements centered on storytelling. Her song \"Take Me to Wyoming\" was featured in a documentary about a Wyoming bull rider, and she has opened for Randall King.",
    instrument: "Epiphone Masterbilt",
    influences: "Miranda Lambert, Carter Faith",
    signatureSong: "Prairie Fire",
    firstPerformance: "At age 7 with her family's band at a bowling alley in Bison, SD",
    biggestAchievement: "Her song \"Take Me to Wyoming\" featured in a documentary; opened for Randall King",
    dreamCollaboration: "Keith Whitley, Brooks & Dunn, Vince Gill, Leon Bridges, Chris Stapleton",
    funFact: "She appeared in a college photoshoot that became a stock photo, now appearing in Hobby Lobby picture frames nationwide.",
  },
  {
    name: "Anthony Speiser",
    slug: "anthony-speiser",
    year: [2025],
    instagram: "stonyspidermusic",
    photo: "/photos/artists/anthony-speiser.png",
    hometown: "Spearfish, SD",
    fullBio: "Anthony Speiser began playing guitar at age 12 and was active in bands while excelling in football and wrestling. He co-founded Beta Caroteen in high school, then studied music performance at Black Hills State University where he formed The Mighty Moose Band with Dan Sherrill. After pursuing competitive cycling, he returned to the Black Hills music scene and currently performs solo and with regional bands including High Rise, Buckskin Cult, and The Adults.",
    instrument: "Guitar, custom builds by StonySpiderMusic",
    influences: "Dan Sherrill, Jerry Cantrell, Thom Yorke, Fiona Apple",
    signatureSong: "Unreal",
    firstPerformance: "High school shows with Beta Caroteen",
    biggestAchievement: "Inspiring others to find passion in music, particularly helping people restart after taking a break",
    dreamCollaboration: "Fiona Apple",
    favoriteLyric: "Bottle will break, but bush will bend.",
    funFact: "He likes Brussels sprouts.",
  },
  // Returned their intake forms 2026-08-06, the first responses since the form
  // was made reusable year to year. Both moved up from name-only rows.
  {
    name: "Brad McKim",
    slug: "brad-mckim",
    year: [2026],
    website: "https://bradmckim.com",
    photo: "/photos/artists/brad-mckim.jpg",
    // The only landscape portrait in the set. Every frame on the site is taller
    // than it is wide, so cover trims width and keeps full height — and Brad
    // sits about 30% across, sharing the porch with a Monarch range that would
    // otherwise take the middle of the crop. Pull the window left onto him.
    photoPosition: "30% 50%",
    hometown: "Beulah, WY",
    fullBio:
      "Brad McKim was raised in California and was possibly the only Willie Nelson and Jerry Jeff Walker fan in his very large high school. He started playing guitar when he was 14 and was writing songs by 15. He has lived in Colorado, Texas, Alaska, England and now Beulah, playing gigs and open mics wherever he has landed, and recorded an album of original songs called The Road that is still available online. His greatest joy musically is playing with his sons J.C. and Cal, who both surpassed him as guitarists and songwriters long ago.",
    instrument: "Taylor 914-CE plugged in, Martin HD28-VR if not",
    influences: "Bruce Cockburn, Joe South, Dan Fogelberg",
    signatureSong: "The Road",
    firstPerformance: "The annual art fair at his high school in Torrance, CA",
    biggestAchievement:
      "Recording an album of ten original songs nearly 30 years ago that is still available online",
    dreamCollaboration: "Glen Hansard",
    favoriteLyric:
      "You're a mystery to me and what you may do, but it's bound to be love that sees you through, because your Mama loves me and loves you too, while waiting for you to come true.",
    funFact:
      "He worked his way through law school partly by playing almost every bar in Laramie, Wyoming in a duo called Hearsay.",
  },
  {
    name: "Jackson Holte",
    slug: "jackson-holte",
    year: [2024, 2026],
    instagram: "jackson_holte_",
    website: "https://www.jacksonholte.com",
    photo: "/photos/artists/jackson-holte.jpg",
    hometown: "Livingston, MT",
    fullBio:
      "Jackson Holte is a musician, writer, and mule packer. In 2025 he won the Wyoming Singer-Songwriter Competition and the Montana Quarterly's Big Snowy Prize for creative non-fiction. His first solo record, Sky Blues, is cinematic folk music — a loosely autobiographical concept album about what Marilynne Robinson called \"the attentive quiet at the center of Western life\" and Tom Edwards called \"the hush of the land.\"",
    instrument: "1971 Martin D-18",
    influences: "Townes Van Zandt, James McMurtry, Leonard Cohen",
    signatureSong: "East Hills",
    firstPerformance: "A high school talent show",
    biggestAchievement: "His 2025 record, Sky Blues",
    dreamCollaboration: "Heath Johnson",
    favoriteLyric:
      "Is there still our sign in the North Fork? Some record of our little lives? Are the East hills still blackened at daybreak, but brimming with light?",
    funFact: "He can make Minute Rice in 58 seconds.",
  },
  {
    name: "Clint Hahn",
    slug: "clint-hahn",
    year: [2026],
    instagram: "officialclinthahn",
    // He submitted a facebook.com/share/… link. Those are opaque redirects, not
    // usernames — this is the account it resolves to.
    facebook: "officialclinthahn",
    website: "https://linktr.ee/Clint.Hahn",
    photo: "/photos/artists/clint-hahn.jpg",
    hometown: "Hammond, MT",
    // His own bio, shifted from first person to third to match the rest of the
    // roster. Nothing else changed.
    fullBio:
      "Clint Hahn is a rancher and firefighter from Hammond, Montana. He started playing music in 2019 and writing his own in 2024. Music got him through hard times, and he hopes to make music that does the same for someone else.",
    instrument: "Epiphone EJ-200 (Annabel)",
    influences: "Wade Forster, Kellen Smith, Red Shahan, Brandon Jenkins",
    signatureSong: "The Rancher",
    firstPerformance: "Crow Peak Brewery, Spearfish, SD",
    biggestAchievement:
      "The friends made along the way — so many talented people he's honored to call friends",
    dreamCollaboration:
      "Kellen Smith — a similar background in ranching, writing songs he can relate to",
    favoriteLyric:
      "They say the devil wears a suit and tie, but this one wore a silk gown.",
    funFact: "He doesn't mind pineapple on pizza.",
  },
  {
    name: "Quinlan Valdez",
    slug: "quinlan-valdez",
    year: [2026],
    instagram: "quinlan_valdez",
    facebook: "QuinlanValdezMusic",
    website: "https://quinlanvaldezmusic.com",
    photo: "/photos/artists/quinlan-valdez.jpg",
    hometown: "Casper, WY",
    fullBio:
      "Quinlan Valdez's music reflects his deep Wyoming roots and has resonated across the region. Commonly described as a peaceful joy, his sound is sure to capture the ears of audiences from all experiences. He has been featured on the Wyoming Road Trip Playlist and has shared the stage with regional legends, bringing a raw voice to the local scene. What makes him unforgettable is the calm, soulful presence — the kind that makes a room lean in and listen.",
    instrument: "Larrivee L-03 and a Ute resonator banjo",
    influences: "Jalan Crossland, Amelia Curran, Gillian Welch",
    signatureSong: "Blue Sunlight, or Ten Sleep Creek",
    firstPerformance: "Metro Coffee, Casper, WY",
    biggestAchievement: "Playing music as a full-time job",
    dreamCollaboration: "Sharing a stage with Possessed by Paul James",
    favoriteLyric:
      "Love is a scene we know so well when we're dreaming wide awake",
    funFact: "He's a van dweller — travelling is most possible in van life.",
  },
  {
    // Billed Wayne P. Baye; the intake form has him as "Wayne Baye", which is
    // also his brain entity's slug. The middle initial is the public name.
    name: "Wayne P. Baye",
    slug: "wayne-p-baye",
    year: [2024, 2026],
    photo: "/photos/artists/wayne-p-baye.jpg",
    hometown: "Whitewood, SD",
    // His own bio, shifted from first person to third. The closing line he
    // submitted — that playing The Matthews was huge for him and the sound was
    // incredible — is left out on purpose: it is praise for us, and this page is
    // about him. It belongs in the testimonials block if anywhere.
    fullBio:
      "Wayne P. Baye grew up in western North Dakota and went into the oilfield after high school, chasing drilling rigs through North Dakota, Montana, Wyoming, Utah, New Mexico, Oklahoma and Texas.\nHe moved from Wyoming to the Black Hills fifteen years ago and has spent them riding motorcycles, playing guitar and harmonica, and cooking for events.",
    instrument: "Gibson J-45 (2010)",
    influences: "Mary Gauthier, Bob Dylan, John Prine, Fred Eaglesmith",
    signatureSong: "Pluggin Along",
    firstPerformance: "A wedding in Halliday, ND",
    biggestAchievement: "Playing a set on 6th Street in Austin, Texas",
  },
  {
    name: "Daron Lacina",
    slug: "daron-lacina",
    year: [2026],
    website: "https://stickponies.com",
    photo: "/photos/artists/daron-lacina.jpg",
    hometown: "LaMoure, ND (now Spearfish)",
    // His own bio, shifted from first person to third and trimmed of its
    // sign-off. Nothing about the story changed.
    fullBio:
      "Daron Lacina grew up in LaMoure, North Dakota, took a business administration degree with an agri-business minor at Dickinson State, and rode bareback broncs professionally in the PRCA for ten years before retiring into agronomy.\nHe came to the guitar late and sideways: in his early thirties he loaned his brother money and took the man's guitar as collateral. He learned his chords at open mics and song circles, playing for tips, joined the band Exit 262, and wrote his first song shortly after turning forty. Songwriting turned out to be the direction he wanted, so he left Exit 262 for the Stick Ponies, where he still plays.\nFour years ago he moved to Spearfish for the musical vibe of the Black Hills. He works as an agronomist at CBH Coop in Belle Fourche, hosts the Sunday afternoon open mic at Crow Peak Brewery, and hopes to get some recordings done this winter.",
    instrument: "Martin DRS2 acoustic-electric (2014)",
    // He wrote "Jimmy Buffet" and "Steve Earl"; spellings corrected.
    influences: "John Prine, Jimmy Buffett, Chris LeDoux, Steve Earle",
    signatureSong: "Catchin a Buzz",
    firstPerformance: "An 80th birthday party at the KC Club, Jamestown, ND",
    biggestAchievement: "Getting played on the radio",
    dreamCollaboration: "Picking guitar with John Prine",
    favoriteLyric:
      "Coconuts are out of season, I'm drunk and don't have a reason",
    funFact: "He makes a great omelette.",
  },
  {
    // Public billing locked 2026-08-20: legal name first, project in
    // parentheses. Slug stays ian-gall — do not add a secondhand-son row.
    name: "Ian Gall (Secondhand Son)",
    slug: "ian-gall",
    year: [2026],
    instagram: "secondhand_son_music",
    // He submitted facebook.com/profile.php?id=61593637316388. The page
    // concatenates facebook.com/${handle}, so a profile-id URL cannot be
    // stored without inventing a username.
    photo: "/photos/artists/ian-gall.jpg",
    // Portrait 2:3, full-body on a stump, face in the upper third. Artist
    // frames are aspect-[4/5] (record page) and aspect-[3/4] (headliner
    // cards), both object-fit: cover. The source is taller than either
    // frame, so cover crops top and bottom — default center eats the head.
    // Same high pin as Foucault / Fullbright.
    photoPosition: "center 20%",
    hometown: "Divide, CO",
    // His own short bio, already third person. Curly quotes normalized;
    // hometown comma kept. No career facts added.
    fullBio:
      "Ian Gall (Secondhand Son) is originally from Rochester, NY, and now calls a small mountain town in Colorado home. His musical journey began with piano, followed by years of singing in choirs and performing in musicals. Eventually he picked up the guitar and began writing songs of his own.\nInfluenced by artists including The Doors, James Taylor, Fleetwood Mac, and countless others, Secondhand Son blends layered, emotional lyrics with a deep, soulful sound.\nToward the end of 2026, Secondhand Son will release its debut album.",
    instrument: "Taylor Koa GS Mini",
    influences: "The Doors, James Taylor, Fleetwood Mac",
    signatureSong: "No Saint",
    firstPerformance: "Westerville, OH",
    biggestAchievement: "Writing for his first album",
    dreamCollaboration: "Gregory Alan Isakov",
    // Submitted under the song title Resign. Lines unchanged.
    favoriteLyric:
      "Let me be the villain / And I will go my way / I'm tired and I'm turning / away from yesterday",
  },
];

export const artists2024Only: Artist[] = [
  { name: "Anna Robins", slug: "anna-robins", year: [2024] },
  { name: "Bill Falcon", slug: "bill-falcon", year: [2024] },
  { name: "Bubba Startz", slug: "bubba-startz", year: [2024] },
  { name: "Cody Henson Hullinger", slug: "cody-henson-hullinger", year: [2024] },
  { name: "J Shogren", slug: "j-shogren", year: [2024] },
  { name: "JJ Kent", slug: "jj-kent", year: [2024] },
  { name: "Lonesome Jones", slug: "lonesome-jones", year: [2024] },
  { name: "Lucas Olson", slug: "lucas-olson", year: [2024] },
  { name: "Mike Endrud", slug: "mike-endrud", year: [2024] },
  { name: "Nevada Ellison", slug: "nevada-ellison", year: [2024] },
  { name: "Randy Burghardt", slug: "randy-burghardt", year: [2024] },
  { name: "Ryan Little Eagle", slug: "ryan-little-eagle", year: [2024] },
  { name: "Scott Simpson", slug: "scott-simpson", year: [2024] },
  { name: "Tanner Johns", slug: "tanner-johns", year: [2024] },
];

/**
 * Confirmed for a given year but no intake on file yet — name only, no bio or
 * photo. They render as plain rows until their intake form comes back, at which
 * point they graduate into `profiledArtists` above with a full profile.
 * Empty as of Ian Gall's 2026-08-20 intake: every 2026 writer now has a record.
 */
export const rosterNoProfile: Artist[] = [];

/**
 * Everyone who has ever been on a roster, headliners excluded. The `year` field
 * is the source of truth for which edition someone belongs to — derive from it
 * rather than adding another hand-maintained per-year array.
 */
const allRostered: Artist[] = [
  ...profiledArtists,
  ...artists2024Only,
  ...rosterNoProfile,
];

/**
 * The 2026 roster — locked at 18 on 2026-08-06. Alphabetical by first name, the
 * same convention the 2024 list uses: a lineup should not imply a ranking.
 */
export const artists2026: Artist[] = allRostered
  .filter((a) => a.year.includes(2026))
  .sort((a, b) => a.name.localeCompare(b.name));

/**
 * The 2025 roster. Derived, not the raw store: `profiledArtists` is "everyone
 * with a full record", which is not the same set as "everyone who played 2025"
 * — Jackson Holte has a full record and played 2024 and 2026 but never 2025.
 * Reading the store directly would have put him in the 2025 section.
 */
export const artists2025: Artist[] = allRostered.filter((a) =>
  a.year.includes(2025)
);

/** 2024 artists who have not appeared on a later roster. */
export const artists2024Unreturned: Artist[] = artists2024Only.filter(
  (a) => !a.year.includes(2025) && !a.year.includes(2026)
);

export const venues = [
  {
    name: "The Matthews Opera House & Arts Center",
    description: "Historic downtown venue and home of both evening events — Friday night's Songwriters Showcase, where invited writers take the stage, and Saturday night's headliner performance.",
    type: "headliner" as const,
  },
  {
    name: "Spearfish Creek Wine Bar",
    description: "Cozy wine bar with an atmosphere perfect for acoustic storytelling.",
    type: "round" as const,
  },
  {
    name: "False Bottom Bar",
    description: "Local craft beer spot featuring lively daytime rounds.",
    type: "round" as const,
  },
  {
    name: "Spearfish Public House",
    description: "Downtown gathering place for daytime songwriter rounds.",
    type: "round" as const,
  },
];

/* ------------------------------------------------------------ artist pages --- */

/**
 * Everyone who gets a page at /artists/<slug>: anyone with a written record,
 * plus the entire 2026 bill — a name on this year's call sheet gets a URL from
 * announcement day and the page fills in as intake lands. Headliners and the
 * rostered lists never share a slug, so a plain concat is safe.
 */
export const pageArtists: Artist[] = [...headliners, ...allRostered].filter(
  (a) => !!(a.fullBio || a.bio) || a.year.includes(2026)
);

export function getArtistBySlug(slug: string): Artist | undefined {
  return pageArtists.find((a) => a.slug === slug);
}

/** Edition facts the pages cite. Derived nowhere — this is the record. */
export const editionsByYear: Record<number, { ordinal: string; note: string }> = {
  2024: { ordinal: "Inaugural", note: "Jonathan Byrd & Jami Lynn headlined" },
  2025: { ordinal: "Second annual", note: "Andrea von Kampen & John Fullbright headlined" },
  2026: { ordinal: "Third annual", note: "Jeffrey Foucault headlines · Sept 25–26" },
};
