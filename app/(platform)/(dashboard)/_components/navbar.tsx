import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "@/app/(platform)/(dashboard)/_components/mobile-sidebar";
import { FormPopover } from "@/components/form/form-popover";

export function Navbar() {
    return (
        <nav className="fixed z-50 top-0 w-full h-14 border-b shadow-sm
            bg-white flex items-center px-4
        ">
            <MobileSidebar/>
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo/>
                </div>
                <FormPopover align="start" side="bottom" sideOffset={19}>
                    <Button className="rounded-sm hidden md:block h-auto py-1.5 px-2" size="sm" variant="primary">Create</Button>
                </FormPopover>
                <Button className="rounded-sm block md:hidden" size="sm">
                    <Plus className="w-4 h-4"/>
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectOrganizationUrl="/organization/:id"
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        },
                    }}
                />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: {
                                width: 30,
                                height: 30,
                            },
                        },
                    }}
                />
            </div>
        </nav>
    );
}