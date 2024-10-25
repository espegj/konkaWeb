import { Link } from "react-router-dom";
import leftFoot from "./assets/leftFoot.svg";
import rightFoot from "./assets/rightFoot.svg";
import konkaLogo from "./assets/konka.svg";
import topArm from "./assets/topArm.svg";
import leftArm from "./assets/leftArm.svg";
import { DownloadButton } from "./components/DownloadButton";

export const App = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col">
        <img className="h-20 self-end" src={topArm} />
        <img className="h-20 self-start" src={leftArm} />
        <img className="h-48 self-end" src={rightFoot} />
        <img className="h-40 self-start" src={leftFoot} />
      </div>
      <img
        className="h-32 absolute top-28 mr-auto ml-auto text-center left-0 right-0"
        src={konkaLogo}
      />
      <div className="flex flex-col gap-2 h-full items-center justify-end">
        <DownloadButton />
        <div className="flex gap-4 p-4 justify-center text-[#6498ED]">
          <Link to={`privacy`}>Privacy</Link>
          <Link to={`contact`}>Contact</Link>
        </div>
      </div>
    </div>
  );
};
