import { OrbitControls, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense, useEffect } from "react";

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
    <div className="relative rounded-md cursor-pointer aspect-square bg-white/10 card">
      <View
        className="flex z-[2] m-[1px] bg-[#171717] h-full w-full  relative rounded-md "
        style={{
          height: `calc(100% - 2px)`,
          width: `calc(100% - 2px)`,
        }}
      >
        {children}
      </View>
      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 rounded-md opacity-0 group-hover:opacity-100 z-1"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),rgba(255, 255, 255, 0.3),transparent 40%)`,
        }}
      ></div>
    </div>
  );
};

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>(".card");

    const handlePointerMove = (e: PointerEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document
      .querySelector<HTMLDivElement>("[data-gird]")
      ?.addEventListener("pointermove", handlePointerMove);

    return () => {
      document
        .querySelector<HTMLDivElement>("[data-gird]")
        ?.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#0c0c0c] select-none background">
      <div className="container p-5 pb-20 mx-auto ">
        <Hero></Hero>
        <div className="relative mt-5 overflow-hidden">
          <div
            className="grid h-full gap-5 overflow-hidden group grid-clos-1 md:grid-cols-2 lg:grid-cols-4"
            data-gird
          >
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

          <div className="fixed top-0 left-0 z-20 w-full h-screen pointer-events-none ">
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
