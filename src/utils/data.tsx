import { PiUser } from "react-icons/pi";
import { MdGroups, MdWorkspacesOutline } from "react-icons/md";
import { PiUploadSimpleLight } from "react-icons/pi";
import { AiFillYoutube } from "react-icons/ai";
import { FaChrome, FaInstagram, FaLinux, FaWindows } from "react-icons/fa";
import { IoLogoApple, IoLogoWhatsapp } from "react-icons/io";
import { BsMicrosoftTeams } from "react-icons/bs";

export const networkData = [
  {
    id: 1,
    icon: <PiUser size={12} />,
    bannerTitle: "Users",
    amount: '3,836',
    isPercentageIncrease: false,
    percentage: 15
  },
  {
    id: 2,
    icon: <MdGroups size={12} />,
    bannerTitle: "Groups",
    amount: '316',
    isPercentageIncrease: true,
    percentage: 20
  },
  {
    id: 3,
    icon: <PiUploadSimpleLight size={12} />,
    bannerTitle: "Uploads",
    amount: '316',
    isPercentageIncrease: true,
    percentage: 23
  },
  {
    id: 4,
    icon: <MdWorkspacesOutline size={12} />,
    bannerTitle: "Departments",
    amount: '316',
    isPercentageIncrease: false,
    percentage: 23
  }
]
export const appData = [
  {
    id: 1,
    icon: <PiUser size={12} />,
    bannerTitle: "Number of Apps",
    amount: '316',
    isPercentageIncrease: false,
    percentage: 23
  },
  {
    id: 2,
    icon: <PiUploadSimpleLight size={12} />,
    bannerTitle: "Number of Downloads",
    amount: '316',
    isPercentageIncrease: true,
    percentage: 23
  }
]

export const fileSharingData = [
  {
    month: 'Jul',
    public: 120,
    shared: 100,
    organization: 80,
  },
  {
    month: 'Aug',
    public: 140,
    shared: 110,
    organization: 90,
  },
  {
    month: 'Sep',
    public: 130,
    shared: 120,
    organization: 100,
  },
  {
    month: 'Oct',
    public: 150,
    shared: 130,
    organization: 110,
  },
  {
    month: 'Nov',
    public: 160,
    shared: 140,
    organization: 120,
  },
  {
    month: 'Dec',
    public: 170,
    shared: 145,
    organization: 125,
  },
];

export const activeCountries = [
  { name: 'United Kingdom', percentage: 78, flag: '🇬🇧' },
  { name: 'Nigeria', percentage: 65, flag: '🇳🇬' },
  { name: 'UAE', percentage: 40, flag: '🇦🇪' },
  { name: 'Canada', percentage: 58, flag: '🇨🇦' },
  { name: 'United States of America', percentage: 74, flag: '🇺🇸' },
];

export const userActivityData = [
  {
    key: '1',
    name: 'Annette Black',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
    location: 'Ottawa, Canada',
    organization: 'MSBM, Ottawa',
    device: 'Windows',
    deviceImg: <FaWindows color="#0078D4"/>,
    activity: 'Google Chrome',
    activityImg: <FaChrome />,
    time: '3 hours 12 minutes',
  },
  {
    key: '2',
    name: 'Floyd Miles',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
    location: 'Lagos, Nigeria',
    organization: 'MSBM, Lagos',
    device: 'Windows',
    deviceImg: <FaWindows color='#0078D4'/>,
    activity: 'Instagram',
    activityImg: <AiFillYoutube color="#FF0000"/>,
    time: '2 hours 8 minutes',
  },
  {
    key: '3',
    name: 'Ronald Richards',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
    location: 'Dubai, UAE',
    organization: 'MSBM, Dubai',
    device: 'Mac',
    deviceImg: <IoLogoApple />,
    activity: 'Microsoft Teams',
    activityImg: <BsMicrosoftTeams color="#6264A7"/>,
    time: '6 hours 45 minutes',
  },
  {
    key: '4',
    name: 'Guy Hawkins',
    nameImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
    location: 'London, UK',
    organization: 'MSBM, London',
    device: 'Windows',
    deviceImg: <FaWindows color="#0078D4"/>,
    activity: 'Microsoft Teams',
    activityImg: <FaInstagram color="#E1306C"/>,
    time: '1 hours 30 minutes',
  },
  {
    key: '5',
    name: 'Jane Cooper',
    nameImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
    location: 'Frankfurt, Germany',
    organization: 'MSBM, Frankfurt',
    device: 'Mac',
    deviceImg: <IoLogoApple />,
    activity: 'Microsoft Teams',
    activityImg: <IoLogoWhatsapp color="#25D366"/>,
    time: '6 hours 45 minutes',
  },
  {
    key: '6',
    name: 'Leslie Alexander',
    nameImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
    location: 'Rome, Italy',
    organization: 'MSBM, Rome',
    device: 'Mac',
    deviceImg: <IoLogoApple />,
    activity: 'Microsoft Teams',
    activityImg: <BsMicrosoftTeams color="#6264A7"/>,
    time: '45 minutes',
  },
  {
    key: '7',
    name: 'Cody Mitchell',
    nameImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww', 
    location: 'Lagos, Nigeria',
    organization: 'MSBM, Lagos',
    device: 'Windows',
    deviceImg: <FaWindows color="#0078D4"/>,
    activity: 'Microsoft Teams',
    activityImg: <AiFillYoutube color="#FF0000"/>,
    time: '45 minutes',
  },
  {
    key: '8',
    name: 'Dianne Russell',
    nameImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
    location: 'Dubai, UAE',
    organization: 'MSBM, Dubai',
    device: 'Linux',
    deviceImg: <FaLinux color="#000000"/>,
    activity: 'Microsoft Teams',
    activityImg: <AiFillYoutube color="#FF0000" />,
    time: '45 minutes',
  },
]

export const appActivityData = [
  {
    key: '1',
    users: 34,
    activityImg: <FaChrome/>,
    activity: 'Google Chrome',
    time: '3 hours 12 minutes',
    date: '2024-06-26'
  },
  {
    key: '2',
    users: 14,
    activityImg: <AiFillYoutube color="#FF0000" />,
    activity: 'Youtube',
    time: '2 hours 7 minutes',
    date: '2024-06-26'
  },
  {
    key: '3',
    users: 16,
    activityImg:  <BsMicrosoftTeams color="#6264A7"/>,
    activity: 'Microsoft Teams',
    time: '6 hours 42 minutes',
    date: '2024-06-26'
  },
  {
    key: '4',
    users: 34,
    activityImg: <IoLogoWhatsapp color="#25D366"/>,
    activity: 'Whatsapp',
    time: '1 hours 12 minutes',
    date: '2024-06-26'
  },
  {
    key: '5',
    users: 34,
    activityImg: <FaInstagram color="#E1306C"/>,
    activity: 'Instagram',
    time: '12 minutes',
    date: '2024-06-26'
  },
]
