import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 h-screen flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl font-semibold text-black mb-4">
        Welcome to Skill-Up
      </h1>
      <p className="text-lg text-gray-700">
        Discover amazing content here.
      </p>
      <div className="mt-8"></div>
    </div>
  )
}
