import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { MdCheck, } from 'react-icons/md'
import { BsChevronExpand} from "react-icons/bs"



export default function Select({listData, onChange, name, value, label, alternateValue}) {

 

  return (
    <div className="relative w-full">
      <Listbox id={name} value={value} name={name} onChange={onChange} >
        <div  className="relative border rounded-lg">
          <Listbox.Button className="relative w-full cursor-default h-[2rem] rounded-sm bg-white pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-black capitalize">{value?.name || `${alternateValue}`}</span>
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
            <Listbox.Options className="absolute z-[100] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {listData?.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative hover:bg-v-dark-green cursor-default select-none py-2 text-center ${
                      active ? 'bg-v-dark-green text-white' : 'text-hover'
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
