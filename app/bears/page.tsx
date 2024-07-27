"use client"

import { useBearStore } from "./_store";

export default function Page() {
    const { bears, increase, decrease } = useBearStore()
    return (
      <main>
        <h1>Bears</h1>
        <p>How many Bears are in our Store? {bears}</p>
  
        <button onClick={increase} >Increase</button>
        <button onClick={decrease} >Decrease</button>
      </main>
    );
  }