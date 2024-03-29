type Props = {
  children: React.ReactNode
}

const Header = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-xl md:text-3xl font-bold">
         {children}   
    </h1>
  )
}

export default Header