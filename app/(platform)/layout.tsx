import { PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-providet";

export default function PlatformLayout({ children }: PropsWithChildren) {
    return (
        <ClerkProvider>
            <QueryProvider>
                <Toaster/>
                <ModalProvider/>
                {children}
            </QueryProvider>
        </ClerkProvider>
    );
}