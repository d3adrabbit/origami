export const Hero = () => {
  return (
    <div className="w-full space-y-3 sm:space-y-5  border flex flex-col justify-between  from-[#111111] to-[#181818] bg-gradient-to-t border-white/10 rounded-md p-5  md:p-10">
      <div className="text-md sm:text-xl lg:text-2xl">
        16+ 3D Motion Graphics
      </div>
      <div className="text-5xl text-transparent sm:text-6xl zen-dots-regular md:text-8xl lg:text-9xl from-[#828282] to-white bg-gradient-to-l bg-clip-text ">
        ORIGAMI
      </div>

      <div className="flex flex-col justify-around text-xs border lg:flex-row md:text-sm border-white/10">
        <div className="px-2 py-2 sm:px-4">©️ 2024 Codrops</div>
        <div className="flex justify-between flex-grow px-2 py-2 sm:px-4 lg:justify-around border-white/10 md:border-x">
          <div>ThreeJs</div>
          <div className="hidden sm:inline-block">▲</div>
          <div>React-three-fiber</div>
          <div className="hidden sm:inline-block">▲</div>
          <div>React</div>
          <div className="hidden sm:inline-block">▲</div>
          <div>GSAP</div>
          <div className="hidden sm:inline-block">▲</div>
          <div>Deri</div>
        </div>
        <div className="flex px-2 py-2 space-x-4 sm:px-4 lg:justify-around">
          <div>X / Twitter</div>
          <div>Github</div>
          <div>Article</div>
        </div>
      </div>
    </div>
  );
};
