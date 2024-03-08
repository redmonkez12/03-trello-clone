"use client";

import { FormInput } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-input";
import { FormButton } from "@/app/(platform)/(dashboard)/organization/form-button";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";

export function Form() {
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess(data) {
            // ..
        },
        onError(error) {
            // ...
        }
    });

    function onSubmit(formData: FormData) {
        const title = formData.get("title") as string;

        execute({
            title,
        });
    }

    return (
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">
                <FormInput
                    errors={fieldErrors}
                />
            </div>
            <FormButton/>
        </form>
    );
}
