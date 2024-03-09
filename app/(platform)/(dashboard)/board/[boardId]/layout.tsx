import { PropsWithChildren } from "react";
import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";
import { db } from "@/lib/db";
import { BoardNavbar } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/board-navbar";

type BoardIdLayoutProps = {
    params: {
        boardId: string;
    };
};

export async function generateMetadata({ params }: { params: { boardId: string } }) {
    const { orgId } = auth();

    if (!orgId) {
        return {
            title: "Board",
        };
    }

    const board = await db.board.findUnique({
        where: {
            orgId,
            id: params.boardId,
        },
    });

    return {
      title: board?.title || "Board",
    };
}

export default async function BoardIdLayout({ children, params }: PropsWithChildren<BoardIdLayoutProps>) {
    const { orgId } = auth();

    if (!orgId) {
        return redirect("/select-org");
    }

    const board = await db.board.findUnique({
        where: {
            orgId,
            id: params.boardId,
        },
    });

    if (!board) {
        notFound();
    }

    return (
        <div
            className="relative h-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${board.imageFullUrl})` }}
        >
            <BoardNavbar data={board}/>
            <div className="absolute inset-0 bg-black/10"/>
            <main className="relative pt-28 h-full">
                {children}
            </main>
        </div>
    );
}