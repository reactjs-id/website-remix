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
    text: "Masuk ke Channel Telegram",
    icon: siTelegram,
  },
  {
    url: "https://meetup.com/reactindonesia",
    text: "Masuk ke Grup Meetup",
    icon: siMeetup,
  },
  {
    url: "https://facebook.com/groups/442974152553174",
    text: "Masuk ke Grup Facebook",
    icon: siFacebook,
  },
  {
    url: "https://x.com/reactjsid",
    text: "Follow di Twitter",
    icon: siX,
  },
];
