
import React, { FC } from 'react'


const Hero: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <div>
        <p className='text-3xl lg:text-8xl tracking-tighter font-bold bg-gradient-to-br from-foreground via-secondary-foreground/90 to-muted-foreground bg-clip-text text-transparent drop-shadow-sm'>Invoices</p>
      </div>
    </section>
  )
}

export default Hero