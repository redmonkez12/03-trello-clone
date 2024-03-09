import { PropsWithChildren } from "react";
import OrgControl from "@/app/(platform)/(dashboard)/organization/[organizationId]/_components/org-control";
import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";

export async function generateMetadata() {
    const { orgSlug } = auth();

    return {
        title: startCase(orgSlug || "organization"),
    };
}

export default function OrganizationIdLayout({ children }: PropsWithChildren) {


    return (
        <>
            <OrgControl/>
            {children}
        </>
    );
}