"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleReset = () => {
    if (typeof reset === "function") {
      reset();
    } else {
      console.error("reset is not a function");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 text-2xl">문제가 발생했습니다!</h2>
      <Image
        src="/images/error.png"
        alt="오류 이미지"
        width={256}
        height={256}
        className="mb-4"
      />
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 text-white bg-cyan-400 rounded hover:bg-cyan-500"
          onClick={handleReset}
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-4 py-2 text-white bg-cyan-400 rounded hover:bg-cyan-500"
        >
          뒤로가기
        </Link>
      </div>
    </div>
  );
}
