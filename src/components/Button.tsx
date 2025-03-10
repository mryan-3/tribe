
const Button = ({ children}: React.PropsWithChildren) => {
  return (
    <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'>
      <div className='absolute inset-0'>
        <div className=' border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]]'></div>
        <div className='border border-white/40 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]]'></div>
        <div className='absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255,0.7)_inset] rounded-lg'></div>
      </div>
      <span>{children}</span>
    </button>
  )
}

export default Button
