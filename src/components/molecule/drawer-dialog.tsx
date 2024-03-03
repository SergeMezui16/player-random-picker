import * as React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from 'usehooks-ts';

type DrawerDialogProps = {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  close?: React.ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
} & React.PropsWithChildren;

export function DrawerDialog({
  open,
  trigger,
  title,
  description,
  children,
  close,
  onOpenChange,
}: DrawerDialogProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter className='pt-2'>
            <DialogClose asChild>{close}</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>{close}</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
