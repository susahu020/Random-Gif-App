import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col background items-center overflow-x-hidden">
      <h1 className="bg-white rounded-md w-full max-w-[1250px] text-lg font-semibold mx-auto p-2 mt-[40px] text-center">RANDOM GIFS</h1>
      <div className="w-full flex flex-col items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
