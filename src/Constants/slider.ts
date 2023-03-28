import comp1 from "../Assets/comp1.png";
import comp2 from "../Assets/comp2.png";
import comp3 from "../Assets/comp3.png";
import comp4 from "../Assets/comp4.png";
import comp5 from "../Assets/comp5.png";

interface ISliderIcons {
  id: number;
  icon: string;
  title: string;
}

const sliderIcons: Array<ISliderIcons> = [
  {
    id: 1,
    icon: comp1,
    title: "Icon",
  },
  {
    id: 2,
    icon: comp2,
    title: "Icon",
  },
  {
    id: 3,
    icon: comp3,
    title: "Icon",
  },
  {
    id: 4,
    icon: comp4,
    title: "Icon",
  },
  {
    id: 5,
    icon: comp5,
    title: "Icon",
  },
];

export { sliderIcons };
