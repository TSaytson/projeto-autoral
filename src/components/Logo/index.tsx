import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center gap-6">
      <span className="text-xl font-bold">
        <Link href='/'>
          My <span className="text-sky-700">Logo</span> Here
        </Link>
      </span>
    </div>
  )
}