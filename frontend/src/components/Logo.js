import React from 'react'

const Logo = ({w,h}) => {
  return (
    <div class="sm:flex sm:items-center sm:justify-between">
    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-indigo-950">RevaLab</span>
</div>
  )
}

export default Logo