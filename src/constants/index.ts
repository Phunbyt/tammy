// import { meta, shopify, starbucks, tesla } from "../assets/images";
import { arrow } from "../assets/icons";
import {
  image1,
  image2,
  image3,
  video1,
  video2,
  video3,
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
];

export const experiences = [
  {
    title: "The Comedian",
    company_name: "🤣😂😅",
    icon: arrow,
    iconBg: "#accbe1",
    date: "Play Audio",
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
    icon: arrow,
    iconBg: "#fbc3bc",
    date: "Play Audio",
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
    icon: arrow,
    iconBg: "#b7e4c7",
    date: "Play Audio",
    points: [
      `You are a good friend. From you, I learned that friendship goes beyond just being there during both the good and bad times.
A good friend prays for you, a good friend prays with you, a good friend looks out for your growth, a good friend encourages you,
a good friend is trustworthy, a good friend is selfless, a good friend respects and values you,
a good friend threatens you while "borrowing" your T-shirts, a good friend "borrows" your T-shirts without plans of returning them,
a good friend "sends an email to Salma requesting the immediate release of their friend's funds, else legal action will be taken."
Presidy is indebted to a good friend. You, my dear, are a good friend.
      `,
    ],
  },
  {
    title: "The Lover",
    company_name: "😍😍😘",
    icon: arrow,
    iconBg: "#a2d2ff",
    date: "Play Audio",
    points: [
      `There's a picture of you smiling at me — that image is forever etched in my heart. It captures you in your most tender, loving element.
      Even if I were to lose every memory, that picture would remain untouched. I have quite a few things to say but...
      I'm shy --call me to hear more 😘`,
    ],
  },
];
