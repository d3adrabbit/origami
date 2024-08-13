import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Item1 } from "./grid/Item1";
import { Item10 } from "./grid/Item10";
import { Item11 } from "./grid/Item11";
import { Item12 } from "./grid/Item12";
import { Item2 } from "./grid/Item2";
import { Item3 } from "./grid/Item3";
import { Item4 } from "./grid/Item4";
import { Item5 } from "./grid/Item5";
import { Item6 } from "./grid/Item6";
import { Item7 } from "./grid/Item7";
import { Item8 } from "./grid/Item8";
import { Item9 } from "./grid/Item9";

const Wrapper = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div className="relative rounded-md cursor-pointer bg-white/10 card p-[1px]">
      <View className="flex z-[2] bg-[#171717]  aspect-square  relative rounded-t-md">
        {children}
      </View>

      <div className="relative z-20 flex items-center mt-[1px] justify-between  w-full px-4 py-2 bg-[#171717] rounded-b-md">
        <span className="w-1 h-1 rounded-full bg-white/20"></span>
        <span className="">{name}</span>
        <span className="w-1 h-1 rounded-full bg-white/20"></span>
      </div>

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
  const items = [
    { component: Item1, name: "Rings" },
    { component: Item2, name: "Loop" },
    { component: Item3, name: "Coins" },
    { component: Item4, name: "Core" },
    { component: Item5, name: "Rubik" },
    { component: Item6, name: "Travel" },
    { component: Item7, name: "Stagger" },
    { component: Item8, name: "Balance" },
    { component: Item9, name: "Pulse" },
    { component: Item10, name: "Pie" },
    { component: Item11, name: "Newton's Cradle" },
    { component: Item12, name: "Arrows" },
  ];
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
            {items.map((item, index) => (
              <Wrapper key={index} name={item.name}>
                <item.component />
              </Wrapper>
            ))}
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
