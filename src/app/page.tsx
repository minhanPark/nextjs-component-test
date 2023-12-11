import SpeedDial from "./components/speed-dial";
import Tooltip from "./components/tooltip";

export default function Home() {
  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <div className="">
        <Tooltip text="Hover Youy">
          <button className="p-2 bg-blue-500 text-white rounded">
            Hover me
          </button>
        </Tooltip>
        <Tooltip text="Hover Youy2">
          <button className="p-2 bg-blue-500 text-white rounded">
            Hover me
          </button>
        </Tooltip>
      </div>
      <SpeedDial />
    </div>
  );
}
