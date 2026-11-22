import {
  Bot,
  Clapperboard,
  Clock,
  Cpu,
  Film,
  GraduationCap,
  Layers,
  Mail,
  Megaphone,
  MapPin,
  MessageCircle,
  PenTool,
  Phone,
  Send,
  Share2,
  Sparkles,
  Terminal,
  Video,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";

const icons: Record<IconName, LucideIcon> = {
  video: Video,
  clapperboard: Clapperboard,
  workflow: Workflow,
  share: Share2,
  sparkles: Sparkles,
  send: Send,
  bot: Bot,
  film: Film,
  layers: Layers,
  cpu: Cpu,
  zap: Zap,
  mail: Mail,
  message: MessageCircle,
  pin: MapPin,
  clock: Clock,
  phone: Phone,
  graduation: GraduationCap,
  pen: PenTool,
  megaphone: Megaphone,
  code: Terminal,
};

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" />;
}
