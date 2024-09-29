"use client";

import CountUp from "react-countup";

// Personal Statistic
const stats = [
  { num: 5, text: "Years of experience on various projects" },
  { num: 10, text: "Projects completed" },
  { num: 8, text: "Technologies Knowledge and Skill" },
  { num: 1000, text: "Code commits" },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto pt-4 pb-12 lg:p-0 border-b border-b-2 lg:pb-5 ">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl lg:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } text-white/80 leading-snug`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
