"use client"

import { useBearStore } from "./_store";

export default function Page() {
    const store = useBearStore()
    return (
      <main>
        <h1>Bears</h1>
        <p>How many Bears are in our Store? {store.bears}</p>
  
        <button>Increase</button>
        <button>Decrease</button>
      </main>
    );
  }