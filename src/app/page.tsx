import { HomePreview, type HomePreviewContent } from "@/components/sections/home-preview";
import { getProfessionalContent } from "@/config/professional-content";
import { getProjectsContent } from "@/config/projects-content";
import { profile } from "@/config/profile";
import messages from "../../messages/en.json";

const content: HomePreviewContent = {
  locale: "en",
  profile,
  professional: getProfessionalContent("en"),
  projects: getProjectsContent("en"),
  navigation: {
    header: messages.navigation.header,
    items: [
      { label: messages.navigation.items.hero, href: "#hero" },
      {
        label: messages.navigation.items.about,
        href: "#about"
      },
      { label: messages.navigation.items.skills, href: "#skills" },
      { label: messages.navigation.items.experience, href: "#experience" },
      { label: messages.navigation.items.projects, href: "#projects" }
    ],
    footer: messages.navigation.footer
  },
  ...messages.home,
  stack: [
    messages.home.stack.next,
    messages.home.stack.typescript,
    messages.home.stack.node,
    messages.home.stack.data
  ],
  secondaryHref: "/es"
};

export default function RootPage() {
  return <HomePreview content={content} />;
}
