import { CircleFadeLoader } from "react-loaders-kit";
import "./Loading.css";

export function Loading() {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 1,
  };

  return (
    <div className="loading-container">
      <CircleFadeLoader {...loaderProps} />
      <h2>Carregando...</h2>
    </div>
  );
}
