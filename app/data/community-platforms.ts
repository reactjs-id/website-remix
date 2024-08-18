import {
  siFacebook,
  siMeetup,
  siTelegram,
  siX,
  type SimpleIcon,
} from "simple-icons";

type CommunityPlatform = {
  url: string;
  text: string;
  icon: SimpleIcon;
};

export const communityPlatforms: CommunityPlatform[] = [
  {
    url: "https://t.me/react_idn",
    text: "Masuk ke grup Telegram",
    icon: siTelegram,
  },
  {
    url: "https://meetup.com/reactindonesia",
    text: "Masuk ke Meetup.com",
    icon: siMeetup,
  },
  {
    url: "https://facebook.com/groups/442974152553174",
    text: "Masuk ke grup Facebook",
    icon: siFacebook,
  },
  {
    url: "https://x.com/reactjsid",
    text: "Follow di X (Twitter)",
    icon: siX,
  },
];
