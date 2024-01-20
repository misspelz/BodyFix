// import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage)=> void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  // ts doesn't know we converted this but the as keyword tells it to treat it as intended

  

  return (
    <AnchorLink
     className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
     href={`#${lowerCasePage}`}
     onClick={()=>setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
