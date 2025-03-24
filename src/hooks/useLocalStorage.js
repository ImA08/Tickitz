import { useState, useEffect } from "react";

export function useLocalStorage(key, init) {
  
  const [data, setData] = useState(() => {
    // kasih nilai default jika tidak ditemukan nilai dari localstorage
    const localValue = localStorage.getItem(key) || "";
    // jika nilai localValue adalah default
    if (localValue.length === 0) {
      if (init instanceof Function) return init();
      return init;
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    const newValue = JSON.stringify(data);
    localStorage.setItem(key, newValue);
  }, [data]);

  return [data, setData];
}

