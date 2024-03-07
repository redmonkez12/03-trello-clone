import { PropsWithChildren } from "react";
import OrgControl from "@/app/(platform)/(dashboard)/organization/[organizationId]/_components/org-control";

export default function OrganizationIdLayout({ children }: PropsWithChildren) {
    return (
        <>
            <OrgControl/>
            {children}
        </>
    );
}