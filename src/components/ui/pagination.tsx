'use client';
import { useRouter } from "next/navigation";

interface PaginationProps {
    currentPage: number;
}

export default function Pagination({ currentPage }: PaginationProps) {
    const router = useRouter();

    return (
        <div className="flex flex-row items-center justify-center gap-4 mt-8">
            <button
                onClick={() => router.push(`?page=${currentPage - 1}`)}
                disabled={currentPage <= 1}
                className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
                Anterior
            </button>
            <span className="text-white/50 text-sm">Página {currentPage}</span>
            <button
                onClick={() => router.push(`?page=${currentPage + 1}`)}
                className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
            >
                Siguiente
            </button>
        </div>
    );
}
