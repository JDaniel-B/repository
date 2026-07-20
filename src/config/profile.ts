export type ProfileLink = {
  label: string;
  href?: string;
};

export type Profile = {
  name: string;
  initials: string;
  imageHref?: string;
  location?: string;
  email?: string;
  emailHref?: string;
  phone?: string;
  cvHref?: string;
  github?: ProfileLink;
  linkedin?: ProfileLink;
};

export const profile: Profile = {
  name: "Daniel Bolaños",
  initials: "DB",
  imageHref: "/yo.jpeg",
  email: "danielbolanos909@gmail.com",
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=danielbolanos909@gmail.com",
  // cvHref: "/cv.pdf",
  github: {
    label: "GitHub",
    href: "https://github.com/JDaniel-B"
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-bola%C3%B1os-10aab5266/"
  }
};
