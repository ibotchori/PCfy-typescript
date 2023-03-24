import icon from 'assets/icon/icon-camera.png'
import Button from 'components/Button/Button'

const FileUpload = () => {
  return (
    <div
      className='m-auto lgMin:h-[26.43rem] lgMin:w-[54.875rem] mdMin:h-[22.43rem] mdMin:w-[40.875rem]
    rounded-[1.125rem] border-2 border-dashed border-[#4386A9] bg-[#F6F6F6]
   h-[15.25rem] w-[22.375rem] '
    >
      <div>
        <p
          className='relative top-[6.6rem] m-auto h-[4.75rem] w-[12.8rem] select-none
       text-center text-[1.25rem] font-medium leading-[2.375rem] text-[#4386A9] md:hidden'
        >
          ჩააგდე ან ატვირთე ლეპტოპის ფოტო
        </p>
      </div>
      <img
        src={icon}
        alt='Camera icon'
        className='m-auto mt-[5rem] hidden md:block md:hover:cursor-pointer'
      />
      <div>
        <p
          className='relative top-[0.6rem] m-auto hidden h-[3.25rem]
          text-center text-base text-[#4386A9] md:block md:w-[9.125rem] md:hover:cursor-pointer'
        >
          ლეპტოპის ფოტოს ატვირთვა
        </p>
      </div>

      <div className='relative top-[10.5rem] mdMin:left-[13rem] lgMin:left-[20rem] h-[3.75rem] w-[14.6rem] md:hidden'>
        <Button text={'ატვირთე'} path={''} />
      </div>
    </div>
  )
}

export default FileUpload
