// import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  Heart_With_Arrow,
  Laptop,
  Wrapped_Gift,
  Zany_Face,
} from "../assets/icons";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  video1,
  video2,
  video3,
  video4,
} from "../assets/images/questions";

export const questions = [
  {
    question: "Where was this video taken?",
    answer: "B",
    options: {
      A: "Dunsi Oyekan's upper room",
      B: "AEO's concert",
      C: "Oasis SWAP",
      D: "GTCO F&D Festival",
    },
    isImage: false,
    isVideo: true,
    videoUrl: video3,
  },
  {
    question: `"Do you remember when you helped me clean JDH entrance, my punishment because I didn't sign room check? I found that really sweet. I don't think I can ever forget"-- Who said that?`,
    imageUrl: image1,
    answer: "C",
    options: { A: "Gbemmy", B: "Tamilore", C: "Lamiii", D: "No clue" },
    isImage: true,
    isVideo: false,
  },
  {
    question: "Guess the ocassion the picture was taken?",
    imageUrl: image2,
    answer: "A",
    options: {
      A: "Grandma's burial",
      B: "Church Thanksgiving",
      C: "A Wedding",
      D: "A random event",
    },
    isImage: true,
    isVideo: false,
  },
  {
    question: "Who was with you when this video was taken?",
    answer: "D",
    options: { A: "Tishe", B: "Timileyin", C: "Timini", D: "Tito" },
    isImage: false,
    isVideo: true,
    videoUrl: video1,
  },
  {
    question: `Who says this more often "Old woman, you don't know how to use tech"?`,
    imageUrl: image3,
    answer: "C",
    options: { A: "No Clue", B: "Tamilore", C: "Lamiii", D: "Gbemmy" },
    isImage: true,
    isVideo: false,
  },
  {
    question: `"Tamilore, you're the best court externship partner I could ever wish for" --- Who said this?`,
    answer: "D",
    options: { A: "Lamiii", B: "Tamilore", C: "No clue", D: "Gbemmy" },
    isImage: false,
    isVideo: true,
    videoUrl: video2,
  },

  {
    question: `Identify the woman in this picture`,
    imageUrl: image4,
    answer: "C",
    options: {
      A: "Mrs Bamiloye",
      B: "Mrs Bamigbose",
      C: "Mrs Bamiboye",
      D: "Mrs Bamilore",
    },
    isImage: true,
    isVideo: false,
  },
  {
    question: `When was this cute video take?`,
    answer: "D",
    options: { A: "2008", B: "2013", C: "2020", D: "2016" },
    isImage: false,
    isVideo: true,
    videoUrl: video4,
  },
  {
    question: `Guess who sent Funbi this picture`,
    imageUrl: image5,
    answer: "A",
    options: {
      A: "Tito",
      B: "Aunty Doyin",
      C: "Dinma",
      D: "Dad",
    },
    isImage: true,
    isVideo: false,
  },

  {
    question: `Who on this list calls you "Tam-Tam jiggy jiggy"`,
    imageUrl: image6,
    answer: "B",
    options: {
      A: "Tito",
      B: "Mum",
      C: "Funbi",
      D: "Dad",
    },
    isImage: true,
    isVideo: false,
  },
  {
    question: `Where was this picture taken`,
    imageUrl: image7,
    answer: "C",
    options: {
      A: "At Tammy's house",
      B: "At Gbemi's house",
      C: "At church",
      D: "At children's party",
    },
    isImage: true,
    isVideo: false,
  },
  // {
  //   question: `What memory do you have of this video`,
  //   imageUrl: video5,
  //   answer: "D",
  //   options: {
  //     A: "Oluchi's wig was stolen",
  //     B: "Tammy lost her money",
  //     C: "Funbi came for the event",
  //     D: "It was a rainy day",
  //   },
  //   isImage: false,
  //   isVideo: true,
  // },
];

export const experiences = [
  {
    title: "The Comedian",
    company_name: "🤣😂😅",
    icon: Zany_Face,
    iconBg: "#accbe1",
    date: `"Shey mo jo Basket mouth? Are you speaking to Bovi?"`,
    points: [
      `TBVH, all the comedians in the world have got nothing on you.
I’ve gotten used to how you always have a different and very hilarious outlook on things.
Especially your one-liner: "Check your air fryer brand. I don’t think it is Kenwood; it is probably KehindeWood."
I mean, who even thinks of that?
Let’s not even talk about our pronunciation arguments that I ALWAYS WIN, and you’d never accept I’m right until
you invite Google into the conversation... bruh, please.
And for the 10 millionth time, it is pronounced "MO-HI-TO" and not "MO-JI-TO".
You should take your comedy career seriously this year 😂. In summary,
You make me laugh, and you radiate joy everywhere you go.`,
    ],
  },
  {
    title: "The Lawyer",
    company_name: "👩‍💼⚖️👩‍⚖️",
    icon: Laptop,
    iconBg: "#fbc3bc",
    date: `"Babe, I'm organising office meeting next week, I don't know what to wear"`,
    points: [
      `Gimme your team lead's number; I need to tell him/her how lucky they are to have you on board.
While you're at it, I'd also need your HR's email — we need to renegotiate your employment contract.
The new agreement will be that you get x10 the salary, 6 months paid leave twice a year (don’t worry, I know what I’m saying),
accelerated promotion every year, and less work. You’ve tried; you’re not just another employee, you are truly committed to your work and so damn good at it.
You are dedicated, and the results are there to back it up.
PS: Thanks for helping me collect my money from Salma.
I’m sure they know I have a seasoned lawyer in my corner.


      `,
    ],
  },
  {
    title: "The Friend",
    company_name: "🫂👯‍♀️👭",
    icon: Wrapped_Gift,
    iconBg: "#b7e4c7",
    date: `"Ibadan today, Santorini tomorrow"`,
    points: [
      `You are a good friend. From you, I learned that friendship goes beyond just being there during both the good and bad times.
A good friend prays for you, a good friend prays with you, a good friend looks out for your growth, a good friend encourages you,
a good friend is trustworthy, a good friend is selfless, a good friend respects and values you,
a good friend threatens you while "borrowing" your T-shirts, a good friend "borrows" your T-shirts without plans of returning them,
a good friend "sends an email to Salma requesting the immediate release of their friend's funds, else legal actions will be taken."
Presidy is indebted to a good friend. You, my dear, are a good friend.
      `,
    ],
  },
  {
    title: "The Lover",
    company_name: "😍😍😘",
    icon: Heart_With_Arrow,
    iconBg: "#a2d2ff",
    date: `"Oh my God, you see what I'm saying... you're so handsome"`,
    points: [
      `There's a picture of you smiling at me — that image is forever etched in my heart. It captures you in your most tender, loving element.
      Even if I were to lose every memory, that picture would remain untouched. I have quite a few things to say but...
      I'm shy --call me to hear more 😘`,
    ],
  },
];

export const projects = [
  {
    iconUrl: Heart_With_Arrow,
    theme: "btn-back-red",
    name: "For you",
    description: `A soulfuly currated playlist I'm keeping my 
    fingers crossed and praying you like...
    Don't worry It's mostly gospel songs and a
    little bit of me trying to be romantic with music.`,
    link: "https://open.spotify.com/playlist/2fJJntRZDSnd8GhOK8BY6h?si=tZ4EwyuDQLSigCwz4_mYqw",
  },
  {
    iconUrl: Heart_With_Arrow,
    theme: "btn-back-green",
    name: "Some memories we've made",
    description: `Here's to so much more that I pray we get to do. Most of my favorite times are the moments I get to spend with you.`,
    link: "https://drive.google.com/drive/folders/1-awnq9d4B5BLN0ZMgipMiRQAxAeVlM7t",
  },
  // {
  //   iconUrl: Heart_With_Arrow,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: Heart_With_Arrow,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: Heart_With_Arrow,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: Heart_With_Arrow,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
