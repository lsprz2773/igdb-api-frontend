"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface PaginationProps {
    currentPage: number;
}

export default function Pagination({ currentPage }: PaginationProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const goToPage = (page: number) => {
        startTransition(() => {
            router.push(`?page=${page}`);
        });
    };

    return (
        <div className="flex flex-row items-center justify-center gap-4 mt-8">
            {isPending && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
            )}

            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1 || isPending}
                className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
                Anterior
            </button>
            <span className="text-white/50 text-sm">Página {currentPage}</span>
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={isPending}
                className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
                Siguiente
            </button>
        </div>
    );
}
