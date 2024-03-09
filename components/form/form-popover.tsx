"use client";

import { ElementRef, PropsWithChildren, useRef } from "react";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";
import { toast } from "sonner";
import { FormPicker } from "@/components/form/form-picker";
import { useRouter } from "next/navigation";

type FormPopoverProps = {
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
};

export function FormPopover({ side, align, sideOffset, children }: PropsWithChildren<FormPopoverProps>) {
    const closeRef = useRef<ElementRef<"button">>(null);
    const router = useRouter();

    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess(data) {
            toast.success("Board created");
            closeRef.current?.click();
            router.push(`/board/${data.id}`);
        },
        onError(error) {
            toast.error(error);
        }
    });

    function onSubmit(formData: FormData) {
        const title = formData.get("title") as string;
        const image = formData.get("image") as string;

        execute({
            title,
            image,
        });
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                align={align}
                className="w-80 pt-3"
                side={side}
                sideOffset={sideOffset}
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Create board
                </div>
                <PopoverClose ref={closeRef} asChild>
                    <Button className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600" variant="ghost">
                        <X className="w-4 h-4"/>
                    </Button>
                </PopoverClose>
                <form action={onSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <FormPicker
                            id="image"
                            errors={fieldErrors}
                        />

                        <FormInput
                            id="title"
                            label="Board title"
                            type="text"
                            errors={fieldErrors}
                        />
                        <FormSubmit className="w-full">
                            Create
                        </FormSubmit>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}