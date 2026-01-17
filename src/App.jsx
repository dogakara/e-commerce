import { useEffect } from "react";
import api from "./api/axios";

export default function App() {
  useEffect(() => {
    api.get("/products").then(res => {
      console.log(res.data);
    });
  }, []);

  return (
    <h1 className="text-3xl font-bold text-red-500">
      Axios Çalışıyor
    </h1>
  );
}
