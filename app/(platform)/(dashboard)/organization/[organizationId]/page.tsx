import { auth, OrganizationSwitcher } from "@clerk/nextjs";

export default function OrganizationIdPage() {
    const { userId, orgId } = auth();

    return (
        <div>
            <OrganizationSwitcher/>
        </div>
    );
}