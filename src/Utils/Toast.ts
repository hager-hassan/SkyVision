import { toast } from "react-hot-toast";

export default function Toast (message: string, icon: string): void{
  toast(message, {
    icon: icon,
    style: {
      borderRadius: "8px",
      background: "#fff",
      color: "#1d293d",
    },
  });
};