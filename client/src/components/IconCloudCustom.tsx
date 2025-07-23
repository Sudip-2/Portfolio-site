import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "redux",
  "react",
  // "gemini",
  "mongodb",
  "mongoose",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  // "aws",
  "firebase",
  "nginx",
  "vercel",
  "postgresql",
  "docker",
  "git",
  "github",
  // "vscode",
  "figma",
  // "zustand",
];

export default function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
