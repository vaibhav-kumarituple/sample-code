"use client";

import { use, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Icons from "@/components/common/Icons";
import PageHeader from "./PageHeader";

type Props = {
  title: string;
  onClose?: () => void;
  onOk?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function SkillsDialog({ title, onClose, className, children }: Props) {
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  dialogRef.current?.showModal();

  const closeDialog = () => {
    dialogRef.current?.close();
    if (onClose) onClose();
  };

  const dialog: JSX.Element | null = (
    <dialog
      ref={dialogRef}
      className={cn(
        "z-10  rounded-xl backdrop:bg-gray-600/50 border-0 border-none outline-none active:outline-none focus:outline-none focus-visible:ring-0 focus:border-none w-[800px]",
        className
      )}>
      <div className="flex flex-row w-full justify-between mb-4 pt-2 px-5">
        <PageHeader label={title} className="md:pb-2" />
        <Icons iconName="close" onClick={closeDialog} />
      </div>
      <div className="px-5 pb-6">{children}</div>
    </dialog>
  );

  return dialog;
}
