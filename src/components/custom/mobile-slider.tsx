"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Separator } from "@radix-ui/react-separator";

import { ChevronDown, House, Menu, Origami, Newspaper, BadgeInfo, Icon    } from "lucide-react";
import { useState } from "react";
// import { House } from 'lucide-react';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

enum IconType {
  Home,
  Project,
  Blogs,
  About,
  Work,
  School,
}

interface CollapsibleMenuProps {
  title: string;
  links: { name: string; href: string }[];
  icon: IconType;
}

const renderIcon = (icon: IconType) => {
  switch (icon) {
    case IconType.Home:
      return (
        <div className="flex items-center">
          <House size="15" />
        </div>
      );
    case IconType.Work:
      return <div className="flex items-center">B</div>;
    case IconType.School:
      return <div className="flex items-center">S</div>;
    case IconType.Project:
      return <div className="flex items-center"><Origami size="15" /></div>;
    case IconType.Blogs:
      return <div className="flex items-center"><Newspaper size="15" /></div>;
    case IconType.About:
      return <div className="flex items-center"><BadgeInfo size="15" /></div>;
    default:
      return <div className="flex items-center">?</div>; // Fallback icon
  }
};

export const CollapsibleMenu = ({
  title,
  links,
  icon,
}: CollapsibleMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex group/collapsible w-full flex-col gap-2"
    >
      <div className="flex px-1 place-self-center  w-[90%] justify-between flex-row">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full">
            {renderIcon(icon)}
            <h2>{title}</h2>
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="flex flex-row space-x-4 pl-9">
          <Separator
            orientation="vertical"
            className="border-black-200 h-full border"
          />
          <ul className="w-[80%]">
            {links.map((link) => {
              return (
                <li className="py-1" key={link.name}>
                  <Button variant="ghost" className="w-full justify-start">
                    {link.name}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size="35" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>
        </SheetHeader>
        {/* <House/> */}
        <Button
          variant="ghost"
          className="w-[90%] justify-start place-self-center "
        >
          {renderIcon(IconType.Home)}
          Home
        </Button>
        <CollapsibleMenu
          title="Projects"
          links={[
            { name: "Link1", href: "#" },
            { name: "Link2", href: "#" },
          ]}
          icon={IconType.Project}
          //   Icon={House}
        />
        <CollapsibleMenu
          title="Blogs"
          links={[
            { name: "Link1", href: "#" },
            { name: "Link2", href: "#" },
          ]}
          icon={IconType.Blogs}
        />
        <CollapsibleMenu
          title="About"
          links={[
            { name: "Link1", href: "#" },
            { name: "Link2", href: "#" },
          ]}
          icon={IconType.About}
        />

        <SheetFooter>
          <Button>Join the Club</Button>
          <Button>Contact Me</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
