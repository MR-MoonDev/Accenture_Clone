interface SubNavItem {
  title: string;
  href: string;
}

interface NavItem {
  title: string;
  href: string;
  subNavitmes?: SubNavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "what we do",
    href: "/abc",
    subNavitmes: [
      { title: "service1", href: "/service1" },
      { title: "service2", href: "/service2" },
      { title: "service3", href: "/service3" },
    ],
  },
  { title: "what we think", href: "/abc" },
  {
    title: "Who We Are",
    href: "/abc",
    subNavitmes: [
      { title: "Team", href: "/Team" },
      { title: "Mission", href: "/Mission" },
      { title: "History", href: "/History" },
    ],
  },
  {
    title: "Career",
    href: "/Career",
    subNavitmes: [
      { title: "jobs", href: "/jobs" },
      { title: "Internship", href: "/Internship" },
    ],
  },
];
