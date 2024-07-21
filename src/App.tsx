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
