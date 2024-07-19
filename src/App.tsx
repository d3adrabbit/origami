import { OrbitControls, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense } from "react";

import { Hero } from "./components/Hero";
import { Item1 } from "./grid/Item1";
import { Item2 } from "./grid/Item2";
import { Item3 } from "./grid/Item3";
import { Item4 } from "./grid/Item4";
import { Item5 } from "./grid/Item5";
import { Item6 } from "./grid/Item6";
import { Item7 } from "./grid/Item7";
import { Item8 } from "./grid/Item8";
import { Item9 } from "./grid/Item9";
import { Item10 } from "./grid/Item10";
import { Item11 } from "./grid/Item11";
import { Item12 } from "./grid/Item12";

const Upcoming = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>

      <div className="mt-2 text-xs">Upcoming</div>
    </div>
  );
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <View
      className="flex items-center from-[#111111] to-[#181818] bg-gradient-to-br justify-center duration-300 border rounded-md hover:transition-opacity text-white/20 border-white/10 hover:border-white/10 aspect-square hover:bg-white/5"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}
    </View>
  );
};

const GridItem = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex items-center justify-center duration-300 border rounded-md hover:transition-opacity text-white/20 border-white/10 hover:border-white/10 aspect-square hover:bg-white/5">
      {children ? children : <Upcoming></Upcoming>}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen text-white bg-[#0c0c0c] select-none background">
      <div className="container p-5 pb-20 mx-auto ">
        <Hero></Hero>

        <div className="relative mt-5 overflow-hidden">
          <div className="grid h-full gap-5 overflow-hidden grid-clos-1 md:grid-cols-2 lg:grid-cols-4 ">
            <Wrapper>
              <Item1></Item1>
            </Wrapper>
            <Wrapper>
              <Item2></Item2>
            </Wrapper>
            <Wrapper>
              <Item3></Item3>
            </Wrapper>
            <Wrapper>
              <Item4></Item4>
            </Wrapper>
            <Wrapper>
              <Item5></Item5>
            </Wrapper>
            <Wrapper>
              <Item6></Item6>
            </Wrapper>
            <Wrapper>
              <Item7></Item7>
            </Wrapper>
            <Wrapper>
              <Item8></Item8>
            </Wrapper>
            <Wrapper>
              <Item9></Item9>
            </Wrapper>
            <Wrapper>
              <Item10></Item10>
            </Wrapper>
            <Wrapper>
              <Item11></Item11>
            </Wrapper>
            <Wrapper>
              <Item12></Item12>
            </Wrapper>
          </div>

          <div className="fixed top-0 left-0 w-full h-screen pointer-events-none ">
            <Canvas
              camera={{
                zoom: 0.8,
              }}
              className="fixed"
              eventSource={document.getElementById("root")!}
            >
              <View.Port />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
