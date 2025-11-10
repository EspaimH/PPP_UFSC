// Fix: Import React to use its namespace for types like React.Dispatch.
import React, { useState, useEffect } from 'react';

function getValue<T>(key: string, initialValue: T | (() => T)): T {
  const savedValue = localStorage.getItem(key);
  if (savedValue !== null) {
    // Need to handle Set serialization
    if (initialValue instanceof Set) {
      try {
        const parsed = JSON.parse(savedValue);
        return new Set(parsed) as T;
      } catch (error) {
        console.error('Error parsing Set from localStorage', error);
        return initialValue instanceof Function ? initialValue() : initialValue;
      }
    }
    try {
      return JSON.parse(savedValue);
    } catch (error) {
      console.error('Error parsing value from localStorage', error);
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  }

  if (initialValue instanceof Function) {
    return (initialValue as () => T)();
  }
  return initialValue;
}

// Fix: Remove unnecessary trailing comma from generic type parameter.
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => getValue(key, initialValue));

  useEffect(() => {
    // Need to handle Set serialization
    if (value instanceof Set) {
      localStorage.setItem(key, JSON.stringify(Array.from(value)));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}