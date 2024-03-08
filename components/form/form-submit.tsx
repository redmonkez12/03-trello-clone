"use client";

import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormSubmitProps = {
    disabled?: boolean;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
};

export function FormSubmit({ disabled, variant = "primary", className, children }: PropsWithChildren<FormSubmitProps>) {
    const { pending } = useFormStatus();

    return (
        <Button
            disabled={pending || disabled}
            type="submit"
            variant={variant}
            size="sm"
            className={cn(className)}
        >
            {children}
        </Button>
    );
}