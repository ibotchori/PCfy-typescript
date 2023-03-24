type Props = {
  defaultValue: String
}
const Select = ({ defaultValue }: Props) => {
  return (
    <select
      className={`h-[3.75rem] smMin:w-[71%] rounded-[0.5rem] border-none
       bg-[#EBEBEB] pl-2 text-[1.125rem] leading-[1.31rem] text-[#000000] min-w-[22.375rem] smMin:min-w-[28rem] lgMin:min-w-[17rem] `}
    >
      <option value=''>{defaultValue}</option>
    </select>
  )
}

export default Select
