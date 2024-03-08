import { deleteBoard } from "@/actions/delete-board";
import { FormDelete } from "@/app/(platform)/(dashboard)/organization/[organizationId]/form-delete";

type BoardProps = {
    title: string;
    id: string;
}

export function Board({ title, id }: BoardProps) {
    const deleteBoardWithId = deleteBoard.bind(null, id);

    return (
        <form action={deleteBoardWithId} className="flex items-center gap-x-2">
            <p>
                Board title: {title}
            </p>
            <FormDelete/>
        </form>
    );
}