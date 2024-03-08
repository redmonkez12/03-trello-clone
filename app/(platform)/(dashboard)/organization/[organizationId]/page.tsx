import { db } from "@/lib/db";
import { Board } from "@/app/(platform)/(dashboard)/organization/board";
import { Form } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form";

export default async function OrganizationIdPage() {
    const boards = await db.board.findMany();

    return (
        <div>
            <Form/>

            <div className="space-y-2">
                {boards.map(board => (
                    <Board
                        key={board.id}
                        title={board.title}
                        id={board.id}
                    />
                ))}
            </div>
        </div>
    );
}