import {
  Compass,
  Box,
  Shapes,
  Sun,
  Flame,
  Image as ImageIcon,
  PenTool,
  Palette,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const SKILL_ICONS: Record<string, LucideIcon> = {
  autocad: Compass,
  "3ds max": Box,
  sketchup: Shapes,
  "v-ray": Sun,
  "corona renderer": Flame,
  "adobe photoshop": ImageIcon,
  "adobe illustrator": PenTool,
  canva: Palette,
};

export function skillIcon(name: string): LucideIcon {
  return SKILL_ICONS[name.toLowerCase()] ?? Wrench;
}
