import React, { useEffect, useRef } from 'react'
import { useState, useCallback } from 'react'


const PasswordGenerator = () => {

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")
    //useref hook
    const passwordRef = useRef(null)

    const PasswordGen = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0987654321"
        if (charAllowed) str += "~`!@#$%^&*--+={}[]"
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);


    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select() //to highlight the selected content
        passwordRef.current?.setSelectionRange(0,3) //to select only three characters as starting index is 0 it will select from start
        window.navigator.clipboard.writeText(password)
}, [password])






    useEffect(() => {
        PasswordGen()
    }, [length, numberAllowed, charAllowed, PasswordGen])


    return (
        <div>
            <h1 className='text-4xl text-black text center '>Password Generator</h1>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey'>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text" value={password} className='outline-none w-full py-1 px-3 text-left' placeholder='password' ref={passwordRef}></input>

                    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <label>length:{length}</label>
                    <div className='flex items-center gap-x-1'>
                        <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }}></input>

                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => { setNumberAllowed(prev => !prev) }} ></input>
                        <label htmlFor='numberInput'>Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input type='checkbox' defaultChecked={charAllowed} id='numberInput' onChange={() => { setCharAllowed(prev => !prev) }} ></input>
                        <label htmlFor='numberInput'>Characters</label>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default PasswordGenerator