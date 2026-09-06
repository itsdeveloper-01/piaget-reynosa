import {
  Eye, MessageCircle, Music, Sprout, Globe, Languages,
  Hash, Palette, Paintbrush, FlaskConical, Users, Activity,
  Monitor, Search, BookOpen, BookMarked, Lightbulb, Theater,
  Briefcase, GraduationCap, Heart, Handshake, Star, Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ICON_MAP: Record<string, LucideIcon> = {
  "👐": Handshake,
  "👀": Eye,
  "🗣": MessageCircle,
  "🎵": Music,
  "🎶": Music,
  "🌱": Sprout,
  "🌎": Globe,
  "🌍": Globe,
  "🔤": Languages,
  "🌐": Languages,
  "🔢": Hash,
  "🎨": Palette,
  "🖌": Paintbrush,
  "🧹": Sparkles,
  "🔬": FlaskConical,
  "🤝": Users,
  "🏃": Activity,
  "🤸": Activity,
  "💻": Monitor,
  "🔎": Search,
  "📚": BookOpen,
  "📘": BookMarked,
  "📗": BookMarked,
  "📙": BookMarked,
  "📕": BookMarked,
  "💡": Lightbulb,
  "🎭": Theater,
  "💼": Briefcase,
  "🎓": GraduationCap,
  "❤️": Heart,
  "🌈": Sparkles,
  "🎤": MessageCircle,
  "🧑‍💼": Briefcase,
  "🎉": Star,
};

export function AreaIcon({ emoji, className }: { emoji: string; className?: string }) {
  const Icon = ICON_MAP[emoji] ?? Star;
  return <Icon className={cn("h-5 w-5 shrink-0", className)} strokeWidth={1.5} />;
}
