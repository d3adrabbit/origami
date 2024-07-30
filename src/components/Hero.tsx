import { useStore } from "../store/useStore";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="hover:underline underline-offset-2"
      target="_blank"
    >
      {children}
    </a>
  );
};

export const Hero = () => {
  const [index, setIndex] = useStore((state) => [state.index, state.setIndex]);

  return (
    <div className="w-full space-y-3 sm:space-y-5  border flex flex-col justify-between  from-[#111111] to-[#181818] bg-gradient-to-t border-white/10 rounded-md p-5  md:p-10">
      <div className="flex items-center justify-between">
        <div className="text-md sm:text-xl lg:text-2xl">
          12+ 3D Motion Graphics
        </div>

        <div className="flex items-center ">
          <div className="hidden text-xs text-white/60 md:block">
            VARIATIONS
          </div>
          <div className="flex ml-4 space-x-2">
            {Array.from({ length: 3 }).map((_, key) => {
              return (
                <div
                  key={key}
                  className={`${
                    key === index
                      ? "text-white/100 bg-white/20"
                      : "text-white/60 bg-white/5 "
                  }  flex items-center justify-center rounded-sm w-6 h-6  md:w-8 md:h-8 transition-colors duration-300  cursor-pointer  bg-white/10 hover:bg-white/15  hover:text-white`}
                  onClick={() => {
                    setIndex(key);
                  }}
                >
                  <span className="text-xs md:text-sm">{key + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-5xl text-transparent sm:text-6xl zen-dots-regular md:text-8xl lg:text-9xl from-[#828282] to-white bg-gradient-to-l bg-clip-text ">
        ORIGAMI
      </div>
      <div className="flex flex-col justify-around text-xs border lg:flex-row md:text-s border-white/10">
        <div className="px-2 py-2 sm:px-4">
          ©️ 2024 <Link href="https://x.com/codrops">Codrops</Link> &amp; <Link href="https://x.com/deadrabbbbit">deadrabbbbit</Link>
        </div>
        <div className="flex justify-between flex-grow px-2 py-2 sm:px-4 lg:justify-around border-white/10 md:border-x">
          <Link href="https://tympanus.net/codrops/demos/?tag=webgl">webgl</Link>
          <div className="hidden sm:inline-block">▲</div>
          <Link href="https://tympanus.net/codrops/demos/?tag=three-js">three.js</Link>
          <div className="hidden sm:inline-block">▲</div>
          <Link href="https://tympanus.net/codrops/demos/?tag=react-three-fiber">R3F</Link>
          <div className="hidden sm:inline-block">▲</div>
          <Link href="https://tympanus.net/codrops/demos/?tag=3d">3D</Link>
        </div>
        <div className="flex px-2 py-2 space-x-4 sm:px-4 lg:justify-around">
          <Link href="https://github.com/d3adrabbit/origami">GitHub</Link>
          <Link href="https://tympanus.net/codrops/?p=79782">Article</Link>
        </div>
      </div>
    </div>
  );
};
