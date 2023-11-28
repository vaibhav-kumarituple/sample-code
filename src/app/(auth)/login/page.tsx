import React from 'react'
import { Button } from "@/components/ui/button";
import { BsGoogle } from "react-icons/bs";
import { TiVendorMicrosoft } from "react-icons/ti";
import Link from 'next/link';

const LoginPage = () => {
    return (
        <>
            <div className="mt-14 text-4xl text-center md:hidden font-mono font-bold"> Skill-Up</div>
            <div className="flex ease-in-out duration-300">

                <div className="hidden md:flex flex-col bg-black min-h-screen w-1/3 items-center ">
                    <div className="text-white text-5xl  font-mono my-20 ">Skill-Up</div>
                    <div className="text-white flex-grow px-5 text-justify font-extralight leading-8">Your Gateway to Computer Mastery! Explore a world of knowledge with our
                        extensive collection of courses and questions, meticulously crafted for computer enthusiasts. Elevate your skills, solve challenges,
                        and embark on a journey of continuous learning. Whether you&apos;re a seasoned pro or just starting out,
                        SkillUp is your trusted companion on the path to mastering the digital realm.</div>
                    <div className="text-white text-sm text-justify underline my-10"><Link href="./sign-in">@Terms & Conditions</Link></div>
                </div>
                <div className=" md:w-1/3 bg-slate-200 p-10 rounded-md mx-auto my-28 h-1/2 overflow-y-auto ease-in duration-300">
                    <h1 className="text-2xl text-center font-bold decoration-auto py-3">Login to your account</h1>
                    {/* <LoginForm /> */}
                    <div className="flex flex-col gap-8 items-center mt-8 ">
                        <a href={process.env.NEXT_PUBLIC_GOOGLE_URL}>
                            <Button variant="outline" type="button">
                                <BsGoogle className="mr-2 h-4 w-4" /> Login With Google
                            </Button>
                        </a>
                        <p>OR</p>
                        <a href={process.env.NEXT_PUBLIC_MICROSOFT_URL}>
                            <Button variant="outline" type="button">
                                <TiVendorMicrosoft className="mr-2 h-4 w-4" /> Login With
                                Microsoft
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginPage;