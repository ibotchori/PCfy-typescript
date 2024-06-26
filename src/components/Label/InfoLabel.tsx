type Props = {
  text: String
}
const InfoLabel = ({ text }: Props) => {
  return (
    <div>
      <p
        className='text-[1.2rem] font-bold leading-[3.35rem] text-[#2E2E2E]
        sm:text-sm sm:leading-[1.5rem]'
      >
        {text}
      </p>
    </div>
  )
}

export default InfoLabel
