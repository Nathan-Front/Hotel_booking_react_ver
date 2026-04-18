
export function submitMessage(message) {
  const customerMessage = JSON.parse(localStorage.getItem("customerMessage")) || [];
  if(!customerMessage) return;
  customerMessage.push(message)
  localStorage.setItem("customerMessage", JSON.stringify(customerMessage));
  return {success: true}
}


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null;
}