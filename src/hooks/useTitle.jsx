import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} || Bingiefy - by Ashvin Sunga`;
    });
  
  return null;
}