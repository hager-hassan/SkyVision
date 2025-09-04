import { toast } from "react-hot-toast";

export default function ToastLightTheme (message: string, icon: string): void{
  toast(message, {
    icon: icon,
    style: {
      borderRadius: "8px",
      background: "#1d293d",
      color: "#fff",
    },
  });
};