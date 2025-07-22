import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-radio-canada)]">
            <Link href="/radio">Radio</Link>
        </div>
    );
}
