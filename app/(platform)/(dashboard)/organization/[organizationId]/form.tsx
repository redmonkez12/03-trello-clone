"use client";

import { create, State } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { FormInput } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-input";
import { FormButton } from "@/app/(platform)/(dashboard)/organization/form-button";

export function Form() {
    const initialState: State = { message: null, errors: {} };
    const [state, dispatch] = useFormState(create, initialState);

    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                <FormInput
                    errors={state?.errors}
                />
            </div>
            <FormButton/>
        </form>
    );
}
