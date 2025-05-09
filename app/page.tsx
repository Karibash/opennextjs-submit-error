'use client';

import { useState } from "react";
import { action } from "./action";

export default function Home() {
  const [result, setResult] = useState<{ name: string; size: number } | Error>();

  const handleSubmit = async (formData: FormData) => {
    try {
      const result = await action(formData);
      setResult(result);
    } catch (error) {
      setResult(error as Error);
    }
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input name="file" type="file" accept="image/*" />
        <button>Submit</button>
      </form>
      {result && (
        result instanceof Error ? (
          <div>
            <p>Error: {result.message}</p>
          </div>
        ) : (
          <div>
            <p>File Name: {result.name}</p>
            <p>File Size: {result.size} bytes</p>
          </div>
        )
      )}
    </div>
  );
}
