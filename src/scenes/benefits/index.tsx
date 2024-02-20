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
    description: " We are committed to providing our members with a world-class fitness experience, and our state-of-the-art facilities reflect that dedication."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Whether you're an early riser or a night owl or a yoga enthusiast, we have over 100 diverse classes to accommodate your schedule and fitness goals."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: " Each of our trainers is not only certified and experienced but also deeply passionate about helping you achieve your fitness goals. "
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
                <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ duration: 0.5 }}
                   variants={{
                     hidden: { opacity: 0, x: 50 },
                     visible: { opacity: 1, x: 0 }
                   }}
                >
                  <Header>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                    <span className="text-primary-500">FIT</span>
                  </Header>
                </motion.div>
              </div>
            </div>

            {/* DESC */}
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.2 , duration: 0.5 }}
               variants={{
                 hidden: { opacity: 0, x: 50 },
                 visible: { opacity: 1, x: 0 }
               }}
            >
              <p className="my-5">Our mission is to help you achieve your fitness goals, and we're proud to say that our members' success stories are what drive us every day.</p>
              <p className="mb-5">Whether you're looking to lose weight, gain muscle, improve flexibility, or simply live a healthier life, our supportive and motivating environment will keep you on track.</p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-8 mb-4 md:mb-0 md:mt-16">
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