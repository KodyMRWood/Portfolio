// import
import BMFImg from '../../assets/Projects/BMF.png';
import BDHImg from '../../assets/Projects/BDH.jpg';
import DozerDerbyImg from '../../assets/Projects/DozerDerby.png';
import LunchBoxing from '../../assets/Projects/LunchBoxing.png';
import BanquetBrawlImg from '../../assets/Projects/BanquetBrawl.png';
import DownRootImg from '../../assets/Projects/Downroot.png';
import MeteorMayhemImg from '../../assets/Projects/MeteorMayhem.png';
import PostalPanicImg from '../../assets/Projects/PostalPanic.png';
import TactileImg from '../../assets/Projects/Tactile.png';
import SlimeballImg from '../../assets/Projects/SlimeBall.png';
import ARStoryBook from '../../assets/Projects/ARStoryBook.png';
import Celestial from '../../assets/Projects/Celestial.png';
import HamsterBall from '../../assets/Projects/HamsterBall.png';
import MobilePong from '../../assets/Projects/MobilePong.png';
import MORPPP from '../../assets/Projects/MORPPP.png';
import Orbit from '../../assets/Projects/Orbit.png';
import PAM from '../../assets/Projects/PAM.png';
import ProjectAeromail from '../../assets/Projects/ProjectAeromail.png';
import ScrapperDome from '../../assets/Projects/ScrapperDome.png';
import ShipScavenger from '../../assets/Projects/ShipScavenger.png';
import VideoCallOperator from '../../assets/Projects/VideoCallOperator.png';
import ProjectOlympus from '../../assets/Projects/ProjectOlympus.png'

import CPlusPlus from '../../assets/TechStackLogos/CPlusPlus.svg'
import CSharp from '../../assets/TechStackLogos/CSharp.svg'
import GitHub from '../../assets/TechStackLogos/GitHub.svg'
import OpenGL from '../../assets/TechStackLogos/OpenGL.svg'
import Unity from '../../assets/TechStackLogos/Unity.svg'
import Unreal from '../../assets/TechStackLogos/Unreal.svg'
import Jenkins from '../../assets/TechStackLogos/Jenkins.svg'
import Slack from '../../assets/TechStackLogos/Slack.svg'
import Confluence from '../../assets/TechStackLogos/Confluence.svg'
import Rider from '../../assets/TechStackLogos/Rider.svg'
import Xcode from '../../assets/TechStackLogos/Xcode.svg'
import JSON from '../../assets/TechStackLogos/JSON.svg'
import Yarn from '../../assets/TechStackLogos/Yarn.svg'
import VisualStudio from '../../assets/TechStackLogos/VisualStudio.svg'
import R from '../../assets/TechStackLogos/R-.svg'



const GameProjectsLookUp = {
    "Barbie Dreamhouse Adventures": {
        title:"Barbie Dreamhouse Adventures",
        longDescription:"A Budge Studios  game that allows players to customize Barbie and Friends and the dreamhouse. There are several locations from the Barbie universe where players can interact with objects and role play with characters. Similar to how Barbies are played with in real life.",
        shortDescription:"Mobile LiveOps Game",
        img: BDHImg,
        videoLink: "https://www.youtube.com/embed/unzg4mn12zA?si=Wc1slZMV1j2HEPir",
        responsibilities:[
            "Delivered gameplay features and UI updates for high-traffic children’s game",
            "Integrated new game features resulting in user retention to +30,000 concurrent monthly users",
            "Collaborated cross-functionally with art, design, and audio teams to ensure smooth integration of +10 features and +2 locations",
            "Used Jira and Agile track progress and resolve blockers for +35 2-week sprints, resulting in fast iterable development",
            "Utilized Unity ScriptableObjects to store and manage large amounts of data for use in +100 Unity components",
            "Made of use of Addressables to improve loading and game download size by +3Gb",
            "Conducted code reviews and debugging using JetBrains Rider, to identify inconsistent coding standards and errors before merges",
            "Employed Jenkins for CI/CD to identify game-breaking bugs, resolving conflicts within 5 minutes"
        ],
        tech:[Unity, CSharp, Rider, GitHub, Xcode, Jenkins, Slack, Confluence, JSON],
        workLink:"https://budgestudios.com/en/apps/detail/barbie-dreamhouse-adventures/",
    },
    "Barbie Magical Fashion": {
        title:"Barbie Magical Fashion",
        longDescription:"A Budge Studios game lets players to pick a Barbie they would like to customize and allowing them to play through a series of dress up stages to make their perfect doll. These stages include hair, make up and shoes. Their final product is then saved in a gallery for them to look at or share with friends.",
        shortDescription:"Revamped Mobile Game",
        img: BMFImg,
        videoLink:"https://www.youtube.com/embed/dqKC_S_34gc?si=7DgAAgsMYfl5YFmz",
        responsibilities:[
            "Revamped 10 year old project using Unity, C# and design patterns to improve gameplay, resulting in +70,000 downloads a month since rerelease",
            "Solved game breaking bug causing a region of players from playing the game",
            "Developed gameplay stages using OOP to create reusable and extensible code base, improving development time by 89%",
            "Collaborated with designers and artists to integrate gameplay features and art assets to match concepts",
            "Utilized collaborative skills to design gameplay system with other developers, reducing merge conflicts",
            "Optimized particle spawning by creating a pooling system, improving computational load",
            ],
        tech:[Unity, CSharp, Rider, GitHub, Xcode, Jenkins, Slack, Confluence, JSON],
        workLink:"https://budgestudios.com/en/apps/detail/barbie-dreamhouse-adventures/",
    },
    "Lunch Boxing": {
        title:"Lunch Boxing",
        longDescription:"A game in development by Butterware Studios. It is a game that pays homage to older fighting games like Mike Tyson's Punch Out. I cannot go into too many details about the game or specifics on what I worked on as I signed an NDA.",
        shortDescription:"Indie game by Butterware Studios",
        img: LunchBoxing,
        videoLink:"",
        responsibilities:[
            "Engineered core systems and mechanics in Unity (C#) for an upcoming game title",
            "Constructed a modular codebase, improving scalability and iteration time by 90%",
            "Designed game modes based on concepts to improve game replayability and retention",
            "Developed 3 new game modes to present to investors for additional funding",
            "Empoloy YARN to create interactive dialogue to game"
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub, Yarn],
        workLink:"",
    },
    "Physiological Adaptive Module": {
        title:"Physiological Adaptive Module",
        longDescription:"A Virtual Reality adpative module that creates a connection with a BITalino and Unity. Additionally, it contains template scripts that help create adaptive game elements in any Unity Project. The system uses readings the users' heart rate and skin conductivity to determine if there is a significant level of stimulus. If the user had elevated measures, the module adapts the simulation to create a less stimulating environment. This is, ultimately, to assist in making Virtual Reality more usable. The module was tested in a training scenario for Nuclear engineers safety protocol.",
        shortDescription:"Master's dissertation module",
        img: PAM,
        videoLink:"",
        responsibilities:[
            "Developed adaptive module to that reads user's physiological measures ",
            "Successfully create Unity training simulation that changes difficulty based on user's stress",
            "Created system that stores +1000 of data points per second using CSV",
            "Utilized R to expertly analyze data to obtain scientifically significant findings",
        ],
        tech:[Unity, CSharp, GitHub, VisualStudio, R],
        workLink:"https://ontariotechu.scholaris.ca/items/07484815-b9e0-4bc6-bb73-cba73dea893b",
    },
    "Project Olympus": {
        title:"Project Olympus",
        longDescription:"A project that made using Unreal to utilize C++ and learn Unreal. The final project has enemy AI, Inverse Kinematics (IK), object interactions, animation blending and soiund integrated",
        shortDescription:"Solo project made Unreal",
        img: ProjectOlympus,
        videoLink:"",
        responsibilities:[
            "Developed a IK for main player using Blueprint and C++ to create immersive experience",
            "Integrated game mechanics for pikcing up look and fighting enemy units",
            "Implemented animation graphs, transitions and triggering with Unreal's animation system",
            "Created patrolling AI units that change logic states upon on detecting player"
        ],
        tech:[Unreal, CPlusPlus, VisualStudio, GitHub],
        workLink:"https://github.com/KodyMRWood/ProjectOlympius",
    },
    "Dozer Derby: Jungle Jewels": {
        title:"Dozer Derby: Jungle Jewels",
        longDescription:"Kenney Jam 2023 Submission of theme 'Exploration'. There are rumours of valuable ancient relics deep in the jungle! Unfortunately, looks like everyone else is thinking the same. Be the first in the jungle to uncover the treasure that's up for grabs!",
        shortDescription:"Kenney Jam 2023 Submission",
        img: DozerDerbyImg,
        videoLink:"",
        responsibilities:[
            "Developed up to 4 player control schema that allows all players to play on a local PC with either keyboard or mouse",
            "Designed fun gameplay loop based off the theme of Exploration",
            "Integrated driving mechanic for player movement",
            "Implemented sounds to add auditory feedback and ambiance to the game",
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/dozer-derby-jungle-jewels",
    },
    "Orbit": {
        title:"Orbit",
        longDescription:"Mobile release with developed with Google Admob. Game was originally developed for TOJam 2022:All Twogether Now of the theme 'That Shouldn't Be Here'. The game was then expanded to have Google AdMob and released on Android and iOS.",
        shortDescription:"Mobile release with Google AdMob",
        img: Orbit,
        videoLink:"",
        responsibilities:[
            "Successfully released game on Android and iOS",
            "Integrated Google AdMod API into Unity game to allow for ads to be played",
            "Utilized intersitial and banner ads to be obtain more than $1.00 CAD of earnings"
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/orb-it",
    },
    "Postal Panic": {
        title:"Postal Panic",
        longDescription:"Ludum Dare 53 with the theme of 'Delivery'. There are tons of packages that come through our Postal Office everyday and we need you help more than ever! Make sure the packages have the right postage to get them where the customer needs!",
        shortDescription:"Ludum Dare 53 Submission",
        img: PostalPanicImg,
        videoLink:"",
        responsibilities:[
            "Integrated sticker tray mechanics to allow users to interact with the game in an interesting way",
            "Utilized Unity layering system to allow stickers to be placed on top of boxes and other stickers",
            "Implemented sounds to add auditory feedback and ambiance to the game",
            "Developed game loop for players to know what stickers need to be placed to win or lose the game",
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/postal-panic",
    },
    "Downroot": {
        title:"Downroot",
        longDescription:"Global Game Jam 2023 submission with the theme of 'Roots'. You are a small plant that is eventually going to run out of water and wither. Find water on your way to the centre of the Earth to keep replenished for the long journey down. Make sure to avoid rocks in your path and see if you can make it to the infinite pool!",
        shortDescription:"Global Game Jam 2023 Submission",
        img: DownRootImg,
        videoLink:"",
        responsibilities:[
            "Co-developed procedural generation grid to spawn water and rocks",
            "Integrated recursive call that searches for connecting grid spaces for adjacent water or rock tiles",
            "Implemented sounds to add auditory feedback and ambiance to the game",
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/downroot",
    },
    "Meteor Mayhem": {
        title:"Meteor Mayhem",
        longDescription:"Global Game Jam 2022 Submission with the theme 'Duality'. Meteor Mayhem is a fast-paced, arcade, weight management game in which you play as 'Cardboard Carl' as you help them keep their home platform clear of the incoming meteor shower. Meteors will periodically fall onto your platform, increasing the weight being held up. Get too heavy and go past 20 meteors on your board and the whole thing will collapse! Clear the meteors using Carl's special ability to switch between 2D and 3D! In 2D, Carl can always remove the highest meteors, giving them the reach to remove meteors even in a stack! On the other hand, Carl is powerful enough in 3D to shove meteors off the platform, just as long as there is nothing to stop the meteors rolling on their path!",
        shortDescription:"Global Game Jam 2022 Submission",
        img: MeteorMayhemImg,
        videoLink:"",
        responsibilities:[
            "Developed camera transition and functionality utilizing Cinemachine",
            "Designed fun gameplay loop based off the theme",
            "Integrated game flow system, allowing win/lose conditions to be met and player progression",
            "Implemented sounds to add auditory feedback and ambiance to the game",
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/meteor-mayhem",
    },
     "Tactile": {
        title:"Tactile",
        longDescription:"Yogscast Game Jam 2021 submission with the theme of 'Opposites'. Tac[T]ile is a 2-player turn-based strategy game where there is just as much focus on the board as the units! Take turns against your opponent adjusting the board to your advantage while your army moves forward to eliminate theirs!",
        shortDescription:"Yogscast Game Jam 2021",
        img: TactileImg,
        videoLink:"",
        responsibilities:[
            "Integrated deck and card mechanics including shuffeling, dealing and cards in hand display",
            "Implemented sounds to add auditory feedback and ambiance to the game",
            "Designed a full strategy game around the theme of 'Opposites'",
            ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/tactile",
    },
    "Banquet Brawl": {
        title:"Banquet Brawl",
        longDescription:"Dinner in the banquet hall is getting too boring. Start a food fight and make a mess to liven up the party! Get everyone to join in on the Banquet Brawl! Click on anybody to select them. Next click on anybody nearby to throw your dinner at them to get them mad and join in on the fight. Try to get everyone involved in the fight and make the biggest mess possible!",
        shortDescription:"Brackeys Game Jam 2021.2",
        img: BanquetBrawlImg,
        videoLink:"",
        responsibilities:[
            "Utilized Unity's shuriken particle system to create texture splattering effect on levels.",
            "Developed an algorithm to detect what amount of the ground has been covered by splatter, used for win/lose condition",
            "Integrated Cinemachine cameras and dolly tracks to allow for smooth interactive cameras",
            "Implemented sounds to add auditory feedback and ambiance to the game",
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/banquet-brawl",
    },
    "Video Call Operator": {
        title:"Video Call Operator",
        longDescription:"Toronto Game Jam 2020 submission. A once relaxing job managing video calls is now being flooded with more people than ever before. Can you keep up with the pressure and keep the video calls running?",
        shortDescription:"Toronto Game Jam 2020 Submission",
        img: VideoCallOperator,
        videoLink:"",
        responsibilities:[
            "Integrated keyboard mechanics, creating an entertaining player-computer interaction",
            "Created beautiful UX/UI for the keyboard animations resulting in satisfying interactions with the game",
            "Developed a visually pleasing and functional day cycle for game loop and user feedback",
            "Implemented sounds to add auditory feedback and ambiance to the game"
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/video-call-operator",
    },
    "Project Aeromail": {
        title:"Project Aeromail",
        longDescription:"Indie delivery game developed by Me and 3 team members. A side project that was given a 3 month develop cycle. Project Aeromail is a 3D flying adventure game in which you can explore as an airplane and collect and deliver polaroid memories of different landmarks on the island. ",
        shortDescription:"Indie delivery game",
        img: ProjectAeromail,
        videoLink:"",
        responsibilities:["Implemented flying mechanics, creating a fun way of experiencing the game world",
            "Utilized Cinemachine to create a movement speed dynamic camera following the plane",
            "Made use of Unity URP and Shader effects to create a postprocessed areas of the map to increase player immersion",
            "Assisted in designing a casual game to create realxing game experience",],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"https://rubber-ducks.itch.io/aeromail",
    },
    "Ship Scavenger": {
        title:"Ship Scavenger",
        longDescription:"GMTK Game Jam 2020 submission with the theme of 'Out of Control'. Your ship has blown up and you're left with only an engine. Travel around the asteroid field collecting and putting your ship back together along the way. Search for your star drive to escape and return back home.",
        shortDescription:"GMTK Game Jam 2020 Submission",
        img: ShipScavenger,
        videoLink:"",
        responsibilities:[
            "Integrated player movement and ",
            "Implemented sounds to add auditory feedback and ambiance to the game",
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"",
    },
    "MORPPP": {
        title:"MORPPP",
        longDescription:"A capstone project build by the Faculty of Engineering and Applied Science build and Facutly of IT and Business. This project displays a mathematically accurate model of a radiative plume being released over a populated city. The purpose was to use VR, an emerging technology, to bring awareness to the safely precedures for if this situation were to occur.",
        shortDescription:"VR nuclear plume model",
        img: MORPPP,
        videoLink:"",
        responsibilities:[
            "Collaborated with nuclear engineering students and game development students to successfully build a VR simulation",
            "Integrated human-VR interactions, allowing user's to move around the virtual world",
            "Implemented mathematical model for nuclear plume",
            "Made use of Unity's Nav Mesh to create AI civilians and First Responders",
        ],
        tech:[Unity, CSharp, GitHub, VisualStudio,],
        workLink:"",
    },
    "Augmented Reality Story Book": {
        title:"Augmented Reality Story Book",
        longDescription:"This application, is a AR simulation on mobile devices, that scans pictures on a picture book and displays a 3D animated scene on a mobile device. Additionally, words are also displayed upon scanning the image. Once pressed, the animated scene which perform the next animation, playing along as you read. The purpose of the application is to assist kids in learning to read, by giving them a fun and interactive way of reading books.",
        shortDescription:"Mobile AR storybook: 3rd year Project",
        img: ARStoryBook,
        videoLink:"https://www.youtube.com/embed/apWA2Y4Dzck",
        responsibilities:[
            "Successfully integrated AR technology to recognize images and show an animated figure",
            "Integrated interactions with words and animations when pressed upon certain words",
            "Designed a novel, interactive and educational method of learning to read with emerging technology",
        ],
        tech:[Unity, CSharp, VisualStudio, GitHub],
        workLink:"",
    },
    "Scrapper Dome": {
        title:"Scrapper Dome",
        longDescription:"2 players are thrown into one vehicle to battle in a futurisic gladiator-style colosseum. One player drives, the other fire a mount turret. Their enemy? A giant robot and its smaller robot army. Work together to take out the drones and defeat the robot in an epic showdown. ",
        shortDescription:"Co-op arena brawler 3rd year project",
        img: ScrapperDome,
        videoLink:"https://www.youtube.com/embed/9rbIJ_txK3E",
        responsibilities:[
            "Integrated environemental hazards to bring life the game world",
            "Implemented AI logic to chase players after spawing",
            "Lead and collaborated with team of 7 people to successfully develop a co-op game",
            "Utilized networking knowledge to establish a peer to peer connection",
        ],
        tech:[Unity, CSharp, GitHub, VisualStudio,],
        workLink:"",
    },
    "Slimeball": {
        title:"Slimeball",
        longDescription:"Slimeball is a 4-player couch arcade game, that has players fight in an arena as slimeballs. Try to be the last one standing, by throwing pieces of yourself at other players. If you hit, a large chunk will be available to pick up, which on collecting will give you back more health. But be careful as shooting means you loose health, and size.",
        shortDescription:"4 player shooter: 2nd year project",
        img: SlimeballImg,
        videoLink:"https://www.youtube.com/embed/CwsqdhDy0mU",
        responsibilities:[
            "Chosen to represent school at Level Up Showcase 2017",
            "Utilized OpenGL and C++ to integrate a deferred rendering solution allowing",
            "Lead team of 7 as project lead to develop a game that was invited to showcase at Toronto LevelUp Showcase",
            "Designed entertaining shooting mechanics and game environment",
        ],
        tech:[OpenGL, CPlusPlus, VisualStudio, GitHub],
        workLink:"",
    },
    "Celestial": {
        title:"Celestial",
        longDescription:"First Year Project",
        shortDescription:"First Year Project",
        img: Celestial,
        videoLink:"https://www.youtube.com/embed/YN_AZ-2onvE",
        responsibilities:[
            "Designed thought provoking levels and puzzles",
            "Lead team of 5 people to developing a game that was chosen to represent school at Level Up Showcase 2016",
            "Created pixel styled art resulting in a beautiful 2D game",
        ],
        tech:[CPlusPlus, OpenGL,  VisualStudio, GitHub],
        workLink:"https://pirotechstudios.itch.io/celestial",
    },
    // "Hamsterball": {
    //     title:"Hamsterball",
    //     longDescription:"Mobile gyroscope maze game",
    //     shortDescription:"Mobile gyroscope maze game",
    //     img: HamsterBall,
    //     videoLink:"",
    //     responsibilities:["","","","","",""],
    //     tech:[Unity, CSharp, VisualStudio, GitHub],
    //     workLink:"",
    // },
    // "Mobile Pong": {
    //     title:"Mobile Pong",
    //     longDescription:"Mobile version of pong",
    //     shortDescription:"Mobile version of pong",
    //     img: MobilePong,
    //     videoLink:"",
    //     responsibilities:["","","","","",""],
    //     tech:[Unreal, CPlusPlus,  VisualStudio,],
    //     workLink:"",
    // },
}

export default GameProjectsLookUp;
