import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { MdCheck, } from 'react-icons/md'
import { BsChevronExpand} from "react-icons/bs"



export default function Select({listData, onChange, name, value}) {

 

  return (
    <div className="relative w-full">
<label htmlFor="position" className='text-md px-1 text-gray-500'>Position</label>

      <Listbox value={value} name={name} onChange={onChange} >
        <div id='position' className="relative mt-1 border rounded-lg">
          <Listbox.Button className="relative w-full cursor-default h-[3rem] rounded-lg bg-white pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-black">{value.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BsChevronExpand
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {listData?.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative hover:bg-hover cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary text-white' : 'text-hover'
                    }`
                  }
                  value={person}
                >
                  {({ value }) => (
                    <>
                      <span
                        className={`block truncate ${
                          value ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {value ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <MdCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
