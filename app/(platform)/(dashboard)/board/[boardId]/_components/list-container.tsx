"use client";

import { List } from "@prisma/client";
import { ListForm } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/list-form";

type ListContainerProps = {
    data: List[];
    boardId: string;
}

export function ListContainer({ data, boardId }: ListContainerProps) {
    return (
        <ol>
            <ListForm/>
            <div className="flex-shrink-0 w-1"/>
        </ol>
    );
}