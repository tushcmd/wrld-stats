
import React, { FC } from 'react'
import { TableDemo } from './list'


const Hero: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 max-w-7xl">
      <div>
        <p className='text-lg lg:text-3xl tracking-tighter font-bold bg-gradient-to-br from-foreground via-secondary-foreground/90 to-muted-foreground bg-clip-text text-transparent drop-shadow-sm'>Invoices</p>
      </div>
      <TableDemo />
    </section>
  )
}

export default Hero