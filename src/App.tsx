import { Link } from "react-router-dom";
import leftFoot from "./assets/leftFoot.svg";
import rightFoot from "./assets/rightFoot.svg";
import { DownloadButton } from "./components/DownloadButton";

export const App = () => {
  return (
    <div className="flex flex-col h-full">
      <p className="text-4xl text-center pt-4">Logo</p>
      <div className="flex justify-between items-center">
        <img className="h-40" src={leftFoot} />
        <img className="h-48" src={rightFoot} />
      </div>
      <div className="flex justify-center items-center">
        <DownloadButton />
      </div>
      <div className="flex gap-4 p-4 justify-center h-full items-end">
        <Link className="text-[#424242]" to={`privacy`}>
          Privacy
        </Link>
        <Link className="text-[#424242]" to={`contact`}>
          Contact
        </Link>
      </div>
    </div>
  );
};
