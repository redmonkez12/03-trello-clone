"use client";

import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";

type FormInputProps = {
    errors?: {
        title?: string[];
    };
};

export function FormInput({ errors }: FormInputProps) {
    const { pending } = useFormStatus();

    return (
        <div>
            <Input
                id=""
                name="title"
                required
                placeholder="Enter a board title"
                disabled={pending}
            />
            {errors?.title ? (
                <div>
                    {errors.title.map(error => (
                        <p key={error} className="text-rose-500">{error}</p>
                    ))}
                </div>
            ) : null}
        </div>
    );
}