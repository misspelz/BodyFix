import Header from "@/shared/Header";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { Benefit } from "./Benefit";
import { ActionButton } from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet"
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-4 md:py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className="md:mt-28 md:w-3/5">
          <Header>MORE THAN JUST A GYM</Header>
          <p className="my-2 text-sm ">Our state-of-the-art facilities and expert trainers are here to guide you towards your fitness goals, whether you're a seasoned athlete or just starting your fitness adventure.</p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center md:flex justify-between gap-20 md:mt-28">
          {/* GRAPHIC */}
          <img 
            className="mx-auto" 
            src={BenefitsPageGraphic} 
            alt="benfits-page-graphic"
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before::absolute before:-top-20 before:-left-20 before:z-[1] belfore:content-abstractwaves">
                <div>
                  <Header>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                    <span className="text-primary-500">FIT</span>
                  </Header>
                </div>
              </div>
            </div>

            {/* DESC */}
            <div>
              <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium doloribus molestias quos saepe? Deleniti quas commodi sequi incidunt eaque! dolor sit amet consectetur adipisicing elit.</p>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur cumque suscipit quam veniam magni vero inventore voluptatum nam debitis illum?</p>
            </div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton
                  setSelectedPage={setSelectedPage}
                >
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits