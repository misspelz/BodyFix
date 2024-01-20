type Props = {
  children: React.ReactNode
}

const Text = ({children}: Props) => {
  return (
    <h1 className=" font-montserrat text-xl md:text-xl font-bold">
         {children}   
    </h1>
  )
}

export default Text