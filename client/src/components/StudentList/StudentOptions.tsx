export default function StudentOptions({ label } : { label: string }) {
  return (
    <div className="relative">
      <select className="font-medium block appearance-none w-full bg-white border text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
        <option value=''>{label}</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
      </div>
    </div>
  )
}
