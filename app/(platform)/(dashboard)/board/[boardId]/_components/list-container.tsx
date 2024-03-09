"use client";

import { List } from "@prisma/client";
import { ListForm } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/list-form";
import { useEffect, useState } from "react";
import { ListItem } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/list-item";

type ListContainerProps = {
    data: List[];
    boardId: string;
}

export function ListContainer({ data, boardId }: ListContainerProps) {
    const [orderedData, setOrderedData] = useState(data);

    useEffect(() => {
        setOrderedData(data);
    }, [data]);

    return (
        <ol className="flex gap-x-3 h-full">
            {orderedData.map((list, index) => (
                <ListItem
                    key={list.id}
                    index={index}
                    data={list}
                />
            ))}
            <ListForm/>
            <div className="flex-shrink-0 w-1"/>
        </ol>
    );
}