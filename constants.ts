import { ContentMap } from './types';

export const SECRET_KEY = "iloveyou"; // In a real app, hash this.

export const LETTER_CONTENT: ContentMap = {
  en: {
    greeting: "My Dearest Love,",
    body: [
      "I write this to you under the gentle light of the moon, thinking of all the moments we have shared.",
      "No matter what storms may come, or how many seasons change, you remain the most beautiful scenery in my world.",
      "You are gentle, you are kind, and you are the only one who holds the key to my heart. Like the cherry blossoms that return every spring, my love for you is eternal and ever-renewing.",
      "Whatever the future holds, I promise to walk beside you, hand in hand, until the stars grow cold."
    ],
    closing: "Yours forever,",
    signature: "Your Love"
  },
  cn: {
    greeting: "亲爱的挚爱，",
    body: [
      "提笔之时，月色温柔，正如我此刻想念你的心绪。",
      "无论世事如何变迁，无论经历了多少风雨，你始终是我眼中最美的风景，是我心底最深的眷恋。",
      "你的温柔与善良，是我此生最大的幸运。愿得一人心，白首不相离。如同春日里永不凋零的繁花，我对你的爱意，生生世世，绵延不绝。",
      "无论未来如何，我都愿执子之手，与子偕老，直到星河长明。"
    ],
    closing: "永远爱你的，",
    signature: "你的守护者"
  }
};